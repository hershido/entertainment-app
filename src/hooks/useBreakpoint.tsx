import { useState, useEffect } from 'react';

export function useBreakpoint(): 'mobile' | 'tablet' | 'desktop' {
  const [breakpoint, setBreakpoint] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

  function getBreakpoint() {
    if (window.innerWidth <= 750) {
      setBreakpoint('mobile');
    } else if (window.innerWidth <= 1024) {
      setBreakpoint('tablet');
    } else {
      setBreakpoint('desktop');
    }
  }

  useEffect(() => {
    getBreakpoint();
    window.addEventListener('resize', getBreakpoint);
    return () => window.removeEventListener('resize', getBreakpoint);
  }, []);

  return breakpoint;
}
