'use client';

import { useReveal } from '@/hooks/use-reveal';
import { cn } from '@/lib/utils';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'span';
}

export function Reveal({ children, className, delay = 0, as = 'div' }: RevealProps) {
  const { ref, inView } = useReveal<HTMLDivElement>();
  const Tag = as;

  return (
    <Tag
      ref={ref as any}
      className={cn('reveal', inView && 'in-view', className)}
      style={{ transitionDelay: inView ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  );
}
