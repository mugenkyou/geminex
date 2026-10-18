import React, { useEffect } from 'react';
import BackgroundVideo from './components/BackgroundVideo';
import SiteHeader from './components/SiteHeader';
import HeroSection from './components/HeroSection';
import StatisticsFooter from './components/StatisticsFooter';
import HowItWorksSection from './components/HowItWorksSection';
import InvariantsExplorer from './components/InvariantsExplorer';
import InstallationSection from './components/InstallationSection';
import InteractiveShellClassifier from './components/InteractiveShellClassifier';
import EvidenceAndWhyNow from './components/EvidenceAndWhyNow';

export default function App() {
  useEffect(() => {
    // Safety fallback: ensure all animated elements become fully visible
    const timer = setTimeout(() => {
      document.documentElement.classList.add('animations-complete');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="landing-viewport" id="top">
      <BackgroundVideo />

      <div className="landing-content-layer">
        {/* Single-screen Hero Viewport */}
        <div className="hero-screen-wrapper">
          <SiteHeader />

          <main className="landing-main-area">
            <HeroSection />
          </main>

          <StatisticsFooter />
        </div>

        {/* Interactive Deep-Dive Sections */}
        <div className="interactive-sections-layer">
          <HowItWorksSection />
          <InvariantsExplorer />
          <InstallationSection />
          <InteractiveShellClassifier />
          <EvidenceAndWhyNow />
        </div>
      </div>
    </div>
  );
}
