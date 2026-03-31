import { AnimatedEyebrow, Reveal, SplitHeadline } from '@/components/site/react-bits-wrappers';
import type { LegalSection } from '@/lib/site-data';

interface LegalPageProps {
  eyebrow: string;
  title: string;
  intro: string;
  sections: LegalSection[];
}

export function LegalPage({ eyebrow, title, intro, sections }: LegalPageProps) {
  return (
    <div className="pb-14 pt-10 sm:pb-20 sm:pt-16">
      <section className="section-shell">
        <div className="glass-panel overflow-hidden rounded-[2rem] p-8 sm:p-12">
          <AnimatedEyebrow>{eyebrow}</AnimatedEyebrow>
          <SplitHeadline
            tag="h1"
            text={title}
            className="headline-glow mt-4 max-w-4xl text-left text-4xl font-semibold text-foreground sm:text-5xl lg:text-6xl"
          />
          <p className="mt-6 max-w-3xl text-base leading-8 text-brand-silver sm:text-lg">
            {intro}
          </p>
        </div>
      </section>

      <section className="section-shell mt-8 sm:mt-10">
        <div className="glass-panel rounded-[2rem] p-8 sm:p-12">
          <div className="legal-prose">
            {sections.map((section, index) => (
              <Reveal key={section.heading} delay={index * 0.06}>
                <section>
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </section>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
