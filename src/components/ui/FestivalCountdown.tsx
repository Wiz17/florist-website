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
    seconds: number;
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
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeRemaining({ days, hours, minutes, seconds });
    };

    calculateTimeRemaining();
    const interval = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(interval);
  }, [endDate]);

  if (!timeRemaining) {
    return null;
  }

  const isUrgent = timeRemaining.days === 0 && timeRemaining.hours < 6;

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div
        className={`min-w-[28px] h-7 flex items-center justify-center rounded-md font-semibold text-sm ${
          isUrgent
            ? 'bg-burgundy/10 text-burgundy'
            : 'bg-sage/10 text-sage-dark'
        }`}
      >
        {value.toString().padStart(2, '0')}
      </div>
      <span className="text-[9px] text-charcoal-light mt-0.5 uppercase tracking-wide">
        {label}
      </span>
    </div>
  );

  return (
    <div className="mt-2 font-[family-name:var(--font-lato)]">
      <span
        className={`block text-[10px] font-semibold uppercase tracking-wide mb-1 ${
          isUrgent ? 'text-burgundy' : 'text-charcoal-light'
        }`}
      >
        {isUrgent ? '🔥 Hurry! Ends in' : 'Ends in'}
      </span>
      <div className="flex items-center gap-1">
        {timeRemaining.days > 0 && (
          <>
            <TimeBlock value={timeRemaining.days} label="days" />
            <span className="text-charcoal-light/50 text-xs font-medium">:</span>
          </>
        )}
        <TimeBlock value={timeRemaining.hours} label="hrs" />
        <span className="text-charcoal-light/50 text-xs font-medium">:</span>
        <TimeBlock value={timeRemaining.minutes} label="min" />
        <span className="text-charcoal-light/50 text-xs font-medium">:</span>
        <TimeBlock value={timeRemaining.seconds} label="sec" />
      </div>
    </div>
  );
}
