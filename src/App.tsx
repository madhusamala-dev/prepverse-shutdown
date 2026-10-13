import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ClosureNotice } from './components/ClosureNotice';
import { CommunityMilestones } from './components/CommunityMilestones';
import { PrivacySection } from './components/PrivacySection';
import { Timeline } from './components/Timeline';
import { FAQ } from './components/FAQ';
import { SupportSection } from './components/SupportSection';
import { Footer } from './components/Footer';

export function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="app-container">
      {/* Subtle Ambient Background Lighting */}
      <div className="ambient-background" aria-hidden="true">
        <div className="ambient-orb ambient-orb-primary" />
        <div className="ambient-orb ambient-orb-secondary" />
        <div className="ambient-orb ambient-orb-tertiary" />
      </div>

      {/* Main Page Header */}
      <Header theme={theme} onToggleTheme={toggleTheme} />

      {/* Main Content Sections */}
      <main className="main-content" id="main-content">
        <Hero />
        <ClosureNotice />
        <CommunityMilestones />
        <PrivacySection />
        <Timeline />
        <FAQ />
        <SupportSection />
      </main>

      {/* Page Footer */}
      <Footer />
    </div>
  );
}

export default App;
