import { useInView, useMotionValue, useSpring } from 'motion/react';
import { useCallback, useEffect, useRef } from 'react';

interface CountUpProps {
  to: number;
  from?: number;
  direction?: 'up' | 'down';
  delay?: number;
  duration?: number;
  className?: string;
  startWhen?: boolean;
  separator?: string;
  onStart?: () => void;
  onEnd?: () => void;
}

export default function CountUp({
  to,
  from = 0,
  direction = 'up',
  delay = 0,
  duration = 2,
  className = '',
  startWhen = true,
  separator = '',
  onStart,
  onEnd
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const hasStartedRef = useRef(false);
  const motionValue = useMotionValue(direction === 'down' ? to : from);

  const damping = 20 + 40 * (1 / duration);
  const stiffness = 100 * (1 / duration);

  const springValue = useSpring(motionValue, {
    damping,
    stiffness
  });

  const isInView = useInView(ref, { once: true, margin: '0px' });

  const getDecimalPlaces = (num: number): number => {
    const str = num.toString();
    if (str.includes('.')) {
      const decimals = str.split('.')[1];
      if (parseInt(decimals) !== 0) {
        return decimals.length;
      }
    }
    return 0;
  };

  const maxDecimals = Math.max(getDecimalPlaces(from), getDecimalPlaces(to));

  const formatValue = useCallback(
    (latest: number) => {
      const hasDecimals = maxDecimals > 0;

      const options: Intl.NumberFormatOptions = {
        useGrouping: !!separator,
        minimumFractionDigits: hasDecimals ? maxDecimals : 0,
        maximumFractionDigits: hasDecimals ? maxDecimals : 0
      };

      const formattedNumber = Intl.NumberFormat('en-US', options).format(latest);

      return separator ? formattedNumber.replace(/,/g, separator) : formattedNumber;
    },
    [maxDecimals, separator]
  );

  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = formatValue(direction === 'down' ? to : from);
    }
    hasStartedRef.current = false;
    motionValue.set(direction === 'down' ? to : from);
  }, [from, to, direction, formatValue, motionValue]);

  const isActuallyVisible = useCallback((element: HTMLElement) => {
    const rect = element.getBoundingClientRect();
    const withinViewport =
      rect.bottom > 0 &&
      rect.right > 0 &&
      rect.top < window.innerHeight &&
      rect.left < window.innerWidth;

    if (!withinViewport) {
      return false;
    }

    let node: HTMLElement | null = element;
    let opacityProduct = 1;

    while (node) {
      const style = window.getComputedStyle(node);

      if (style.display === 'none' || style.visibility === 'hidden') {
        return false;
      }

      opacityProduct *= Number(style.opacity || '1');

      if (opacityProduct < 0.6) {
        return false;
      }

      node = node.parentElement;
    }

    return true;
  }, []);

  useEffect(() => {
    if (!isInView || !startWhen || hasStartedRef.current) {
      return;
    }

    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let durationTimeoutId: ReturnType<typeof setTimeout> | null = null;
    let frameId = 0;

    const startAnimation = () => {
      if (hasStartedRef.current) {
        return;
      }

      hasStartedRef.current = true;

      if (typeof onStart === 'function') {
        onStart();
      }

      timeoutId = setTimeout(() => {
        motionValue.set(direction === 'down' ? from : to);
      }, delay * 1000);

      durationTimeoutId = setTimeout(
        () => {
          if (typeof onEnd === 'function') {
            onEnd();
          }
        },
        delay * 1000 + duration * 1000
      );
    };

    const waitForVisible = () => {
      if (!ref.current || hasStartedRef.current) {
        return;
      }

      if (isActuallyVisible(ref.current)) {
        startAnimation();
        return;
      }

      frameId = requestAnimationFrame(waitForVisible);
    };

    waitForVisible();

    return () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      if (durationTimeoutId) {
        clearTimeout(durationTimeoutId);
      }
    };
  }, [
    delay,
    direction,
    duration,
    from,
    isActuallyVisible,
    isInView,
    motionValue,
    onEnd,
    onStart,
    startWhen,
    to,
  ]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest: number) => {
      if (ref.current) {
        ref.current.textContent = formatValue(latest);
      }
    });

    return () => unsubscribe();
  }, [springValue, formatValue]);

  return <span className={className} ref={ref} />;
}
