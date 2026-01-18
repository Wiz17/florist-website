'use client';

import { useState, useEffect } from 'react';

interface FestivalCountdownProps {
  endDate: string;
}

export function FestivalCountdown({ endDate }: FestivalCountdownProps) {
  const [timeRemaining, setTimeRemaining] = useState<{
    days: number;
    hours: number;
    minutes: number;
  } | null>(null);

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const end = new Date(endDate);
      end.setHours(23, 59, 59, 999); // End of day
      const now = new Date();
      const difference = end.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeRemaining(null);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

      setTimeRemaining({ days, hours, minutes });
    };

    calculateTimeRemaining();
    const interval = setInterval(calculateTimeRemaining, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [endDate]);

  if (!timeRemaining) {
    return null;
  }

  return (
    <div className="mt-2 flex items-center gap-2 text-xs font-[family-name:var(--font-lato)] text-charcoal-light">
      <span className="font-semibold">Ends in:</span>
      {timeRemaining.days > 0 && (
        <span className="font-medium">
          {timeRemaining.days}d {timeRemaining.hours}h
        </span>
      )}
      {timeRemaining.days === 0 && timeRemaining.hours > 0 && (
        <span className="font-medium">
          {timeRemaining.hours}h {timeRemaining.minutes}m
        </span>
      )}
      {timeRemaining.days === 0 && timeRemaining.hours === 0 && (
        <span className="font-medium text-burgundy">{timeRemaining.minutes}m</span>
      )}
    </div>
  );
}
