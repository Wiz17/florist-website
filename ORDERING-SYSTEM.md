# Ordering System Implementation Guide

## Overview

This document outlines the product ordering system for the florist website using:
- **Supabase** — Database (orders, users) + Authentication
- **Stripe** — Payment processing
- **Sanity** — Products (existing)
- **React Context** — Cart state management

---

## Architecture

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Sanity    │     │  Supabase   │     │   Stripe    │
│  (Products) │     │(Orders/Auth)│     │ (Payments)  │
└──────┬──────┘     └──────┬──────┘     └──────┬──────┘
       │                   │                   │
       └───────────────────┼───────────────────┘
                           │
                    ┌──────▼──────┐
                    │   Next.js   │
                    │   Frontend  │
                    └─────────────┘
```

---

## Dependencies

```bash
npm install @supabase/supabase-js @supabase/ssr stripe @stripe/stripe-js resend
```

---

## Environment Variables

Add to `.env.local`:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxx
STRIPE_SECRET_KEY=sk_test_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx  # Add after setting up webhook

# Email (Resend)
RESEND_API_KEY=re_xxx
SELLER_EMAIL=seller@yourdomain.com
```

---

## Database Schema (Supabase)

Run these SQL commands in Supabase SQL Editor:

### Tables

```sql
-- User profiles (extends Supabase auth.users)
CREATE TABLE profiles (
  id UUID REFERENCES auth.users PRIMARY KEY,
  full_name TEXT,
  phone TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Shipping addresses
CREATE TABLE addresses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id),
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  address_line1 TEXT NOT NULL,
  address_line2 TEXT,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  postal_code TEXT NOT NULL,
  is_default BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Orders
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id),
  status TEXT DEFAULT 'pending',
  subtotal INTEGER NOT NULL,
  shipping INTEGER DEFAULT 0,
  total INTEGER NOT NULL,
  shipping_address JSONB NOT NULL,
  stripe_payment_intent_id TEXT,
  stripe_session_id TEXT,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Order items
CREATE TABLE order_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
  product_id TEXT NOT NULL,
  product_name TEXT NOT NULL,
  product_image TEXT,
  quantity INTEGER NOT NULL,
  unit_price INTEGER NOT NULL,
  total_price INTEGER NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Row Level Security (RLS)

```sql
-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE addresses ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

-- Addresses policies
CREATE POLICY "Users can view own addresses" ON addresses
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own addresses" ON addresses
  FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own addresses" ON addresses
  FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own addresses" ON addresses
  FOR DELETE USING (auth.uid() = user_id);

-- Orders policies
CREATE POLICY "Users can view own orders" ON orders
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own orders" ON orders
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Order items policies
CREATE POLICY "Users can view own order items" ON order_items
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM orders WHERE orders.id = order_items.order_id AND orders.user_id = auth.uid())
  );
```

### Auto-create profile trigger

```sql
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name)
  VALUES (new.id, new.raw_user_meta_data->>'full_name');
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();
```

---

## Files to Create

```
src/
├── lib/
│   └── supabase.ts              # Supabase client
├── context/
│   └── CartContext.tsx          # Cart state with React Context
├── hooks/
│   └── useAuth.ts               # Auth hook
├── types/
│   └── order.ts                 # Order types
├── components/
│   ├── auth/
│   │   ├── AuthProvider.tsx
│   │   ├── LoginModal.tsx
│   │   └── SignupModal.tsx
│   └── cart/
│       ├── CartDrawer.tsx
│       ├── CartItem.tsx
│       └── CartButton.tsx
├── app/
│   ├── api/
│   │   ├── checkout/
│   │   │   └── route.ts         # Create checkout session
│   │   └── webhooks/
│   │       └── stripe/
│   │           └── route.ts     # Stripe webhook handler
│   ├── checkout/
│   │   ├── page.tsx             # Checkout page
│   │   └── success/
│   │       └── page.tsx         # Order success
│   └── auth/
│       └── callback/
│           └── route.ts         # OAuth callback
```

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/components/ui/Navigation.tsx` | Add cart button, login/user menu |
| `src/app/shop/components/ProductCard.tsx` | Add "Add to Cart" button |
| `src/app/layout.tsx` | Wrap with AuthProvider, CartProvider |

---

## User Flow

### Cart Flow
1. User browses products on `/shop`
2. Clicks "Add to Cart" on ProductCard
3. Item added to React Context (persisted to localStorage)
4. Cart icon in Navigation shows count
5. Click cart icon → CartDrawer slides out
6. Review items → Click "Checkout"

### Checkout Flow
1. Redirect to `/checkout` (requires login)
2. If not logged in → show LoginModal
3. Fill shipping address
4. Click "Pay Now" → calls `/api/checkout`
5. API creates order in Supabase (status: pending)
6. API creates Stripe Checkout Session
7. Redirect to Stripe hosted checkout
8. On success → Stripe webhook updates order to "paid"
9. Redirect to `/checkout/success`

### Order Statuses
- `pending` — Order created, awaiting payment
- `paid` — Payment successful
- `processing` — Order being prepared
- `shipped` — Order shipped
- `delivered` — Order delivered
- `cancelled` — Order cancelled

---

## Email Notifications

### Setup (using Resend)

```bash
npm install resend
```

Add to `.env.local`:
```env
RESEND_API_KEY=re_xxx
SELLER_EMAIL=seller@yourdomain.com
```

### When emails are sent

Emails are triggered from the **Stripe webhook** after successful payment:

1. **Customer Confirmation Email**
   - Order number
   - Items purchased with prices
   - Shipping address
   - Estimated delivery

2. **Seller Notification Email**
   - New order alert
   - Customer details
   - Order items
   - Shipping address
   - Link to Supabase dashboard

### Email Templates

Create `src/lib/email.ts`:

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendOrderConfirmation(order: Order, customerEmail: string) {
  await resend.emails.send({
    from: 'Bloom & Petal <orders@yourdomain.com>',
    to: customerEmail,
    subject: `Order Confirmed - #${order.id.slice(0, 8)}`,
    html: `
      <h1>Thank you for your order!</h1>
      <p>Order #${order.id.slice(0, 8)}</p>
      <!-- Add order details -->
    `,
  });
}

export async function sendSellerNotification(order: Order) {
  await resend.emails.send({
    from: 'Orders <orders@yourdomain.com>',
    to: process.env.SELLER_EMAIL!,
    subject: `New Order - #${order.id.slice(0, 8)} - ₹${order.total / 100}`,
    html: `
      <h1>New Order Received!</h1>
      <p>Order #${order.id.slice(0, 8)}</p>
      <!-- Add order details -->
    `,
  });
}
```

### Webhook Integration

In `/api/webhooks/stripe/route.ts`, after updating order status:

```typescript
// After order status updated to 'paid'
await sendOrderConfirmation(order, customerEmail);
await sendSellerNotification(order);
```

### Alternative: WhatsApp/SMS

For instant seller notifications, you can also add:
- **Twilio** for SMS
- **WhatsApp Business API** for WhatsApp messages

---

## Testing

### Stripe Test Cards
- Success: `4242 4242 4242 4242`
- Decline: `4000 0000 0000 0002`
- Requires auth: `4000 0025 0000 3155`

Use any future expiry date and any 3-digit CVC.

### Local Webhook Testing
```bash
# Install Stripe CLI
# Then run:
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

This will give you a webhook signing secret for local testing.

---

## Verification Checklist

- [ ] Dependencies installed
- [ ] Environment variables set
- [ ] Supabase tables created
- [ ] RLS policies applied
- [ ] Auth flow works (signup, login, logout)
- [ ] Cart persists across page refresh
- [ ] Add/remove/update cart items
- [ ] Checkout creates order in Supabase
- [ ] Stripe payment completes
- [ ] Webhook updates order status
- [ ] Customer receives confirmation email
- [ ] Seller receives notification email
- [ ] Success page shows order details
