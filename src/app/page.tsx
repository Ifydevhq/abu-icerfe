import { Hero } from '@grc/components/home/hero';
import { StatsBand } from '@grc/components/home/stats-band';
import { Purpose } from '@grc/components/home/purpose';
import { ProgrammesPreview } from '@grc/components/home/programmes-preview';
import { DirectorNote } from '@grc/components/home/director-note';
import { NewsPreview } from '@grc/components/home/news-preview';
import { Partners } from '@grc/components/home/partners';
import { CtaBand } from '@grc/components/ui/cta-band';

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBand />
      <Purpose />
      <ProgrammesPreview />
      <DirectorNote />
      <NewsPreview />
      <Partners />
      <CtaBand />
    </>
  );
}
