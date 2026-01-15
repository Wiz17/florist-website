import { FloatingPetalsLoader } from "@/components/ui/FloatingPetalsLoader";

export default function ContactLoading() {
  return <FloatingPetalsLoader message="Getting in touch..." fullScreen={true}/>;
}
