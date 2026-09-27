'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function MotionEffects() {
  const path = usePathname();
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (media.matches) return;
    const animations: Animation[] = [];
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        if (media.matches) return;
        animations.push((entry.target as HTMLElement).animate(
          [{ opacity: 0, transform: 'translateY(22px)' }, { opacity: 1, transform: 'translateY(0)' }],
          { duration: 650, easing: 'cubic-bezier(.2,.7,.2,1)', fill: 'none' },
        ));
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.project-story,.capabilities,.personal-note,.case-section,.journey,.experience-row').forEach(element => observer.observe(element));
    const stop = () => {
      if (media.matches) {
        observer.disconnect();
        animations.forEach(animation => animation.cancel());
      }
    };
    media.addEventListener('change', stop);
    return () => {
      observer.disconnect();
      animations.forEach(animation => animation.cancel());
      media.removeEventListener('change', stop);
    };
  }, [path]);
  return null;
}
