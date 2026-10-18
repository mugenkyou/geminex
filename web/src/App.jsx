import React from 'react';
import BackgroundVideo from './components/BackgroundVideo';
import SiteHeader from './components/SiteHeader';
import HeroSection from './components/HeroSection';
import ProductMetrics from './components/ProductMetrics';
import ProblemSection from './components/ProblemSection';
import WorkflowDiagram from './components/WorkflowDiagram';
import InvariantsSection from './components/InvariantsSection';
import IntegrationsSection from './components/IntegrationsSection';
import EvidenceSection from './components/EvidenceSection';
import SecuritySection from './components/SecuritySection';
import DeveloperWorkflow from './components/DeveloperWorkflow';
import ResearchPreview from './components/ResearchPreview';
import ClosingCTA from './components/ClosingCTA';
import SiteFooter from './components/SiteFooter';

export default function App() {
  return (
    <div className="arch-landing-wrapper" id="top">
      {/* Background cinematic video layer */}
      <BackgroundVideo />

      {/* Main layout container */}
      <div className="arch-content-container">
        <SiteHeader />

        <main>
          <HeroSection />
          <ProductMetrics />
          <ProblemSection />
          <WorkflowDiagram />
          <InvariantsSection />
          <IntegrationsSection />
          <EvidenceSection />
          <SecuritySection />
          <DeveloperWorkflow />
          <ResearchPreview />
          <ClosingCTA />
        </main>

        <SiteFooter />
      </div>
    </div>
  );
}
