import { Container } from '@grc/components/ui/container';
import { stats } from '@grc/_shared/data/history';

export const StatsBand = () => (
  <section className="border-b border-paper-edge bg-white">
    <Container>
      {/* The 1px grid lives inside the container so the divider colour never
          bleeds into the page gutters. */}
      <div className="grid grid-cols-2 gap-px overflow-hidden bg-paper-edge lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white px-2 py-10 text-center md:px-6 md:py-12">
            <p className="font-sans text-3xl font-semibold text-brand-700 md:text-4xl">
              {stat.value}
            </p>
            <p className="mx-auto mt-3 max-w-[22ch] text-xs leading-relaxed text-ink-muted md:text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </Container>
  </section>
);
