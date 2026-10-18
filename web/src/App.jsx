import React, { useEffect } from 'react';
import BackgroundVideo from './components/BackgroundVideo';
import SiteHeader from './components/SiteHeader';
import HeroSection from './components/HeroSection';
import StatisticsFooter from './components/StatisticsFooter';

export default function App() {
  useEffect(() => {
    // Safety fallback: ensure all animated elements become fully visible
    // even if animation events or styles are interrupted.
    const timer = setTimeout(() => {
      document.documentElement.classList.add('animations-complete');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="landing-viewport" id="top">
      <BackgroundVideo />

      <div className="landing-content-layer">
        <SiteHeader />

        <main className="landing-main-area">
          <HeroSection />
        </main>

        <StatisticsFooter />
      </div>
    </div>
  );
}
