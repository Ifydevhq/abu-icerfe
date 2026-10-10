import { Masthead } from '@grc/components/home/masthead';
import { Mandate } from '@grc/components/home/mandate';
import { KnowledgeBand } from '@grc/components/home/knowledge-band';
import { ProgrammesPanel } from '@grc/components/home/programmes-panel';
import { EnterpriseLines } from '@grc/components/home/enterprise-lines';
import { Directorate } from '@grc/components/home/directorate';
import { ImpactBand } from '@grc/components/home/impact-band';
import { DeliveryCarousel } from '@grc/components/home/delivery-carousel';
import { Dispatches } from '@grc/components/home/dispatches';
import { PartnerRail } from '@grc/components/home/partner-rail';
import { ClosingCta } from '@grc/components/home/closing-cta';

export default function HomePage() {
  return (
    <>
      <Masthead />
      <Mandate />
      <KnowledgeBand />
      <ProgrammesPanel />
      <EnterpriseLines />
      <Directorate />
      <ImpactBand />
      <DeliveryCarousel />
      <Dispatches />
      <PartnerRail />
      <ClosingCta />
    </>
  );
}
