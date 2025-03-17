'use client';

import { useEffect, useRef } from 'react';

interface DepressibleCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  maxRotation?: number;
}

export function DepressibleCard({
  children,
  maxRotation = 5,
  className = '',
  ...props
}: DepressibleCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Calculate rotation based on mouse position
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * maxRotation;
      const rotateY = ((x - centerX) / centerX) * maxRotation;

      // Apply the rotation
      card.style.setProperty('--rotateX', `${-rotateX}deg`);
      card.style.setProperty('--rotateY', `${rotateY}deg`);
      card.setAttribute('data-depression', 'true');
    };

    const handleMouseLeave = () => {
      card.style.setProperty('--rotateX', '0deg');
      card.style.setProperty('--rotateY', '0deg');
      card.removeAttribute('data-depression');
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [maxRotation]);

  return (
    <div
      ref={cardRef}
      className={`card-depression ${className}`}
      {...props}
    >
      {children}
    </div>
  );
} 