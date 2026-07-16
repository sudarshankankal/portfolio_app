import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Typewriter animation hook.
 * Types out the given text character by character at the specified speed.
 */
export function useTypewriter(text: string, speed: number = 80): {
  displayText: string;
  isComplete: boolean;
} {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const indexRef = useRef(0);

  const tick = useCallback(() => {
    if (indexRef.current <= text.length) {
      setDisplayText(text.slice(0, indexRef.current));
      indexRef.current++;
    } else {
      setIsComplete(true);
    }
  }, [text]);

  useEffect(() => {
    indexRef.current = 0;
    setDisplayText('');
    setIsComplete(false);

    const interval = setInterval(tick, speed);
    return () => clearInterval(interval);
  }, [tick, speed]);

  return { displayText, isComplete };
}
