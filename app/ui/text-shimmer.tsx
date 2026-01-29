'use client';

import React from 'react';

import { motion } from 'framer-motion';

import { cn } from '@/app/lib/utils';

interface TextShimmerProps {
  children: string;
  as?: React.ElementType;
  className?: string;
  duration?: number;
  spread?: number;
  baseColor?: string;
  gradientColor?: string;
}

// Create motion components outside of render to avoid React warnings
const MotionP = motion.p;
const MotionH1 = motion.h1;
const MotionH2 = motion.h2;
const MotionH3 = motion.h3;
const MotionSpan = motion.span;
const MotionDiv = motion.div;

const createShimmerProps = (
  className: string | undefined,
  duration: number,
  baseColor: string,
  gradientColor: string,
  stripeWidth: number
) => ({
  className: cn('relative inline-block', className),
  animate: {
    backgroundPosition: ['0% center', '100% center', '0% center'],
  },
  transition: {
    repeat: Infinity,
    duration,
    ease: 'linear' as const,
    times: [0, 0.5, 1],
  },
  style: {
    backgroundImage: `linear-gradient(90deg, 
      ${baseColor} 0%, 
      ${baseColor} calc(50% - ${stripeWidth}px), 
      ${gradientColor} calc(50% - ${stripeWidth / 2}px), 
      ${gradientColor} calc(50% + ${stripeWidth / 2}px), 
      ${baseColor} calc(50% + ${stripeWidth}px), 
      ${baseColor} 100%
    )`,
    backgroundSize: '250% 100%',
    backgroundRepeat: 'no-repeat',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    color: 'transparent',
    overflow: 'visible',
    lineHeight: '1.2',
  } as React.CSSProperties,
});

export function TextShimmer({
  children,
  as: Component = 'p',
  className,
  duration = 2,
  baseColor = '#ffffff',
  gradientColor = '#c0c0c0',
}: TextShimmerProps) {
  const stripeWidth = 80; // Largura da listra em pixels

  const props = createShimmerProps(className, duration, baseColor, gradientColor, stripeWidth);
  const componentType = typeof Component === 'string' ? Component : 'p';

  switch (componentType) {
    case 'h1':
      return <MotionH1 {...props}>{children}</MotionH1>;
    case 'h2':
      return <MotionH2 {...props}>{children}</MotionH2>;
    case 'h3':
      return <MotionH3 {...props}>{children}</MotionH3>;
    case 'span':
      return <MotionSpan {...props}>{children}</MotionSpan>;
    case 'div':
      return <MotionDiv {...props}>{children}</MotionDiv>;
    case 'p':
    default:
      return <MotionP {...props}>{children}</MotionP>;
  }
}

