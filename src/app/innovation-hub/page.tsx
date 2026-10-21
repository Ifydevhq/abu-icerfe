import type { Metadata } from 'next';
import { HubMasthead } from '@grc/components/innovation-hub/hub-masthead';
import { HubOverview } from '@grc/components/innovation-hub/hub-overview';
import { HubPillars } from '@grc/components/innovation-hub/hub-pillars';
import { HubJourney } from '@grc/components/innovation-hub/hub-journey';
import { HubFacilities } from '@grc/components/innovation-hub/hub-facilities';
import { HubClosing } from '@grc/components/innovation-hub/hub-closing';
import { innovationHub } from '@grc/_shared/data/innovation-hub';

export const metadata: Metadata = {
  title: 'Innovation Hub',
  description: innovationHub.intro,
};

export default function InnovationHubPage() {
  return (
    <>
      <HubMasthead />
      <HubOverview />
      <HubPillars />
      <HubJourney />
      <HubFacilities />
      <HubClosing />
    </>
  );
}
