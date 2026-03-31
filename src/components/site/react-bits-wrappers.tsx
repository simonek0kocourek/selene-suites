'use client';

import { useReducedMotion } from 'motion/react';
import AnimatedContent from '@/components/AnimatedContent';
import CountUp from '@/components/CountUp';
import DarkVeil from '@/components/DarkVeil';
import DotGrid from '@/components/DotGrid';
import FloatingLines from '@/components/FloatingLines';
import GradientText from '@/components/GradientText';
import Particles from '@/components/Particles';
import SplitText from '@/components/SplitText';
import { cn } from '@/lib/utils';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  direction?: 'vertical' | 'horizontal';
}

interface SplitHeadlineProps {
  text: string;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3';
  textAlign?: React.CSSProperties['textAlign'];
}

interface MetricNumberProps {
  value: number;
  suffix?: string;
  className?: string;
}

interface AnimatedEyebrowProps {
  children: React.ReactNode;
  className?: string;
}

export function Reveal({
  children,
  className,
  delay = 0,
  distance = 48,
  direction = 'vertical',
}: RevealProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <AnimatedContent
      className={className}
      delay={delay}
      distance={distance}
      direction={direction}
      duration={0.9}
      ease="power3.out"
      threshold={0.18}
      animateOpacity
      initialOpacity={0}
    >
      {children}
    </AnimatedContent>
  );
}

export function AnimatedEyebrow({ children, className }: AnimatedEyebrowProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <span className={cn('section-kicker', className)}>{children}</span>;
  }

  return (
    <GradientText
      className={cn(
        'section-kicker max-w-max cursor-default border border-brand-line bg-white/6 px-3 py-1 text-[0.7rem] uppercase tracking-[0.28em] text-brand-champagne',
        className
      )}
      colors={['#f6e7c7', '#90e3ff', '#ff9f8d']}
      animationSpeed={6}
      showBorder
    >
      {children}
    </GradientText>
  );
}

export function SplitHeadline({
  text,
  className,
  tag = 'h2',
  textAlign = 'left',
}: SplitHeadlineProps) {
  const reducedMotion = useReducedMotion();
  const Tag = tag;

  if (reducedMotion) {
    return (
      <Tag className={className} style={{ textAlign }}>
        {text}
      </Tag>
    );
  }

  return (
    <SplitText
      text={text}
      tag={tag}
      textAlign={textAlign}
      className={className}
      delay={22}
      duration={0.85}
      splitType="words, chars"
      from={{ opacity: 0, y: 28 }}
      to={{ opacity: 1, y: 0 }}
      threshold={0.2}
      rootMargin="-60px"
    />
  );
}

export function MetricNumber({ value, suffix = '', className }: MetricNumberProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return (
      <span className={className}>
        {Intl.NumberFormat('en-US').format(value)}
        {suffix}
      </span>
    );
  }

  return (
    <span className={cn('inline-flex items-baseline', className)}>
      <CountUp
        className="inline-block"
        to={value}
        duration={1.6}
        separator=","
      />
      <span>{suffix}</span>
    </span>
  );
}

export function DotGridBackdrop({
  className,
  variant = 'default',
}: {
  className?: string;
  variant?: 'default' | 'hero';
}) {
  const reducedMotion = useReducedMotion();
  const isHero = variant === 'hero';

  if (reducedMotion) {
    return (
      <div
        aria-hidden="true"
        className={cn(
          isHero
            ? 'absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(144,227,255,0.26)_1.5px,transparent_1.5px)] [background-size:22px_22px] opacity-75'
            : 'absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(144,227,255,0.18)_1px,transparent_1px)] [background-size:20px_20px] opacity-45',
          className
        )}
      />
    );
  }

  return (
    <div aria-hidden="true" className={cn('absolute inset-0 overflow-hidden', className)}>
      <DotGrid
        className={cn('absolute inset-0', isHero ? 'opacity-95' : 'opacity-70')}
        dotSize={isHero ? 3 : 4}
        gap={isHero ? 20 : 18}
        baseColor={isHero ? '#293a55' : '#32425f'}
        activeColor="#90e3ff"
        proximity={isHero ? 150 : 110}
        shockRadius={isHero ? 220 : 180}
        shockStrength={isHero ? 2.8 : 2.2}
        resistance={isHero ? 980 : 900}
        returnDuration={isHero ? 1.35 : 1.2}
      />
    </div>
  );
}

export function DarkVeilBackdrop({
  className,
  variant = 'section',
}: {
  className?: string;
  variant?: 'section' | 'global';
}) {
  const reducedMotion = useReducedMotion();
  const isGlobal = variant === 'global';

  if (reducedMotion) {
    return (
      <div
        aria-hidden="true"
        className={cn(
          isGlobal
            ? 'fixed inset-0 bg-[radial-gradient(circle_at_25%_18%,rgba(246,231,199,0.1),transparent_18%),radial-gradient(circle_at_72%_24%,rgba(144,227,255,0.12),transparent_22%),linear-gradient(180deg,#090d1b_0%,#060814_100%)]'
            : 'absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(246,231,199,0.12),transparent_18%),radial-gradient(circle_at_70%_28%,rgba(144,227,255,0.14),transparent_24%),linear-gradient(180deg,#0a1021_0%,#060917_100%)]',
          className
        )}
      />
    );
  }

  return (
    <div
      aria-hidden="true"
      className={cn(
        isGlobal
          ? 'fixed inset-0 overflow-hidden pointer-events-none'
          : 'absolute inset-0 overflow-hidden pointer-events-none',
        className
      )}
    >
      <div
        className={cn(
          'absolute inset-0',
          isGlobal
            ? 'opacity-90'
            : 'opacity-80 [mask-image:radial-gradient(circle_at_center,black,transparent_96%)]'
        )}
      >
        <DarkVeil
          hueShift={isGlobal ? 22 : 18}
          noiseIntensity={isGlobal ? 0.03 : 0.02}
          scanlineIntensity={isGlobal ? 0.04 : 0.08}
          speed={isGlobal ? 0.24 : 0.35}
          scanlineFrequency={isGlobal ? 0.4 : 1.2}
          warpAmount={isGlobal ? 0.14 : 0.18}
          resolutionScale={1}
        />
      </div>
    </div>
  );
}

export function FloatingLinesBackdrop({
  className,
  variant = 'global',
}: {
  className?: string;
  variant?: 'section' | 'global';
}) {
  const reducedMotion = useReducedMotion();
  const isGlobal = variant === 'global';

  if (reducedMotion) {
    return (
      <div
        aria-hidden="true"
        className={cn(
          isGlobal
            ? 'fixed inset-0 bg-[linear-gradient(180deg,#050816_0%,#071122_100%),repeating-linear-gradient(112deg,transparent_0,transparent_34px,rgba(144,227,255,0.1)_35px,transparent_62px)] opacity-85'
            : 'absolute inset-0 bg-[linear-gradient(180deg,#091022_0%,#050816_100%),repeating-linear-gradient(112deg,transparent_0,transparent_26px,rgba(144,227,255,0.08)_27px,transparent_46px)] opacity-70',
          className
        )}
      />
    );
  }

  return (
    <div
      aria-hidden="true"
      className={cn(
        isGlobal ? 'fixed inset-0 overflow-hidden pointer-events-none' : 'absolute inset-0 overflow-hidden',
        className
      )}
    >
      <div className={cn('absolute inset-0', isGlobal ? 'opacity-[0.9]' : 'opacity-[0.78]')}>
        <FloatingLines
          enabledWaves={['top', 'middle', 'bottom']}
          lineCount={5}
          lineDistance={5}
          topWavePosition={{ x: 10.0, y: 0.5, rotate: -0.4 }}
          middleWavePosition={{ x: 5.0, y: 0.0, rotate: 0.2 }}
          bottomWavePosition={{ x: 2.0, y: -0.7, rotate: -1 }}
          animationSpeed={1}
          interactive
          bendRadius={5}
          bendStrength={-0.5}
          mouseDamping={0.05}
          parallax
          parallaxStrength={0.16}
          globalPointerTracking={isGlobal}
          linesGradient={['#241042', '#5f32d6', '#5c6fff', '#dc72ff']}
          mixBlendMode="screen"
        />
      </div>
    </div>
  );
}

export function ParticlesBackdrop({ className }: { className?: string }) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return (
      <div
        aria-hidden="true"
        className={cn(
          'absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(144,227,255,0.18),transparent_24%),radial-gradient(circle_at_30%_65%,rgba(246,231,199,0.12),transparent_18%),radial-gradient(circle_at_70%_60%,rgba(255,159,141,0.1),transparent_20%)]',
          className
        )}
      />
    );
  }

  return (
    <div aria-hidden="true" className={cn('absolute inset-0 overflow-hidden', className)}>
      <Particles
        className="absolute inset-0"
        particleColors={['#90e3ff', '#f6e7c7', '#ff9f8d']}
        particleCount={120}
        particleSpread={11}
        speed={0.06}
        moveParticlesOnHover
        particleHoverFactor={0.35}
        alphaParticles
        particleBaseSize={72}
        sizeRandomness={0.8}
        cameraDistance={18}
        disableRotation={false}
        pixelRatio={1}
      />
    </div>
  );
}
