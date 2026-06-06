import { useEffect } from 'react';

// Spotlight only — no custom cursor override
export function useMouseSpotlight(): void {
  useEffect(() => {
    const spot = document.getElementById('spotlight');
    if (!spot) return;

    const onMove = (e: MouseEvent) => {
      spot.style.background =
        `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(99,102,241,0.07), transparent 70%)`;
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);
}
