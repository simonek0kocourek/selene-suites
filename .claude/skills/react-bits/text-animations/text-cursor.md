# Text Cursor

- Category: Text Animations
- Docs: https://reactbits.dev/text-animations/text-cursor
- Description: Make any text element follow your cursor, leaving a trail of copies behind it.

## Install

```bash
npx shadcn@latest add @react-bits/TextCursor-TS-TW
npm install motion@^12.23.12
```

Fallback:

```bash
npx jsrepo@latest add https://reactbits.dev/r/TextCursor-TS-TW
```

## Best Website Fit

- Use as the main interactive text moment in a hero, splash screen, or playful showcase section.
- Fit best on creative portfolios, agency sites, experimental microsites, or product launches.

## Usage

```tsx
import TextCursor from './TextCursor';

<TextCursor
  text="Hello!"
  spacing={80}
  followMouseDirection={true}
  randomFloat={true}
  exitDuration={0.3}
  removalInterval={20}
  maxPoints={10}
/>
```

## Extracted TSX Source

### TextCursor/TextCursor.tsx

```tsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface TextCursorProps {
  text: string;
  spacing?: number;
  followMouseDirection?: boolean;
  randomFloat?: boolean;
  exitDuration?: number;
  removalInterval?: number;
  maxPoints?: number;
}

interface TrailItem {
  id: number;
  x: number;
  y: number;
  angle: number;
  randomX?: number;
  randomY?: number;
  randomRotate?: number;
}

const TextCursor: React.FC<TextCursorProps> = ({
  text = '⚛️',
  spacing = 100,
  followMouseDirection = true,
  randomFloat = true,
  exitDuration = 0.5,
  removalInterval = 30,
  maxPoints = 5
}) => {
  const [trail, setTrail] = useState<TrailItem[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastMoveTimeRef = useRef<number>(Date.now());
  const idCounter = useRef<number>(0);

  const handleMouseMove = (e: MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    setTrail(prev => {
      let newTrail = [...prev];
      if (newTrail.length === 0) {
        newTrail.push({
          id: idCounter.current++,
          x: mouseX,
          y: mouseY,
          angle: 0,
          ...(randomFloat && {
            randomX: Math.random() * 10 - 5,
            randomY: Math.random() * 10 - 5,
            randomRotate: Math.random() * 10 - 5
          })
        });
      } else {
        const last = newTrail[newTrail.length - 1];
        const dx = mouseX - last.x;
        const dy = mouseY - last.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance >= spacing) {
          let rawAngle = (Math.atan2(dy, dx) * 180) / Math.PI;

          rawAngle = ((rawAngle + 180) % 360) - 180;

          const computedAngle = followMouseDirection ? rawAngle : 0;
          const steps = Math.floor(distance / spacing);
          for (let i = 1; i <= steps; i++) {
            const t = (spacing * i) / distance;
            const newX = last.x + dx * t;
            const newY = last.y + dy * t;
            newTrail.push({
              id: idCounter.current++,
              x: newX,
              y: newY,
              angle: computedAngle,
              ...(randomFloat && {
                randomX: Math.random() * 10 - 5,
                randomY: Math.random() * 10 - 5,
                randomRotate: Math.random() * 10 - 5
              })
            });
          }
        }
      }
      if (newTrail.length > maxPoints) {
        newTrail = newTrail.slice(newTrail.length - maxPoints);
      }
      return newTrail;
    });
    lastMoveTimeRef.current = Date.now();
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('mousemove', handleMouseMove);
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, [containerRef.current]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Date.now() - lastMoveTimeRef.current > 100) {
        setTrail(prev => (prev.length > 0 ? prev.slice(1) : prev));
      }
    }, removalInterval);
    return () => clearInterval(interval);
  }, [removalInterval]);

  return (
    <div ref={containerRef} className="w-full h-full relative">
      <div className="absolute inset-0 pointer-events-none">
        <AnimatePresence>
          {trail.map(item => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 1, rotate: item.angle }}
              animate={{
                opacity: 1,
                scale: 1,
                x: randomFloat ? [0, item.randomX || 0, 0] : 0,
                y: randomFloat ? [0, item.randomY || 0, 0] : 0,
                rotate: randomFloat ? [item.angle, item.angle + (item.randomRotate || 0), item.angle] : item.angle
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                opacity: { duration: exitDuration, ease: 'easeOut' },

                ...(randomFloat && {
                  x: {
                    duration: 2,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatType: 'mirror'
                  },
                  y: {
                    duration: 2,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatType: 'mirror'
                  },
                  rotate: {
                    duration: 2,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatType: 'mirror'
                  }
                })
              }}
              className="absolute select-none whitespace-nowrap text-3xl"
              style={{ left: item.x, top: item.y }}
            >
              {text}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TextCursor;
```

Source folder: `text-animations/text-cursor.md`
