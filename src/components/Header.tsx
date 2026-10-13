import React, { useState, useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';
import { SunIcon, MoonIcon, PrinterIcon, ClockIcon } from './Icons';

interface HeaderProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ theme, onToggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="site-header">
      {/* Top Banner Notice */}
      <div className="top-banner">
        <div className="section-container top-banner-inner">
          <div className="banner-left">
            <span className="badge badge-retired">
              <span className="badge-pulse-dot" />
              Official Notice
            </span>
            <span className="banner-text">
              PrepVerse operations have officially concluded. This notice remains active until{' '}
              <strong>{siteConfig.dates.formattedArchiveDate}</strong>.
            </span>
          </div>
          <div className="banner-right">
            <span className="archive-pill">
              <ClockIcon size={14} />
              Active Archive Period
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`main-nav ${scrolled ? 'nav-scrolled' : ''}`} aria-label="Main Navigation">
        <div className="section-container nav-container">
          <a href="#" className="brand-link" aria-label="PrepVerse Home">
            <img
              src={siteConfig.brand.logoUrl}
              alt={siteConfig.brand.logoAlt}
              className="brand-logo"
              width="170"
              height="40"
            />
          </a>

          <div className="nav-links">
            <a href="#notice" className="nav-item">
              Notice
            </a>
            <a href="#community" className="nav-item">
              Community
            </a>
            <a href="#privacy" className="nav-item">
              Privacy & Data
            </a>
            <a href="#timeline" className="nav-item">
              Timeline
            </a>
            <a href="#faq" className="nav-item">
              FAQ
            </a>
            <a href="#support" className="nav-item">
              Support
            </a>
          </div>

          <div className="nav-actions">
            <button
              type="button"
              onClick={handlePrint}
              className="btn btn-secondary btn-sm print-btn"
              title="Print or save this notice as PDF for your records"
              aria-label="Print or save this notice as PDF"
            >
              <PrinterIcon size={16} />
              <span className="btn-label">Print Notice</span>
            </button>

            <button
              type="button"
              onClick={onToggleTheme}
              className="theme-toggle-btn"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <SunIcon size={18} /> : <MoonIcon size={18} />}
            </button>
          </div>
        </div>
      </nav>

      <style>{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 100;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .top-banner {
          background: linear-gradient(90deg, rgba(76, 29, 149, 0.45) 0%, rgba(30, 24, 54, 0.85) 100%);
          border-bottom: 1px solid var(--border-subtle);
          padding: 0.5rem 0;
          font-size: 0.825rem;
          color: var(--text-secondary);
        }

        .top-banner-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .banner-left {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .banner-text strong {
          color: var(--text-primary);
        }

        .archive-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.775rem;
          font-weight: 500;
          color: var(--pv-amber-400);
          background: rgba(245, 158, 11, 0.1);
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-full);
          border: 1px solid rgba(245, 158, 11, 0.25);
        }

        .main-nav {
          background: var(--topbar-bg);
          border-bottom: 1px solid var(--border-subtle);
          transition: background-color var(--transition-base), box-shadow var(--transition-base), padding var(--transition-base);
          padding: 0.75rem 0;
        }

        .nav-scrolled {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.18);
          padding: 0.55rem 0;
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
        }

        .brand-link {
          display: flex;
          align-items: center;
          text-decoration: none;
          outline: none;
        }

        .brand-logo {
          height: 38px;
          width: auto;
          max-width: 175px;
          object-fit: contain;
          display: block;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .nav-item {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          transition: color var(--transition-fast);
          padding: 0.3rem 0.2rem;
          position: relative;
        }

        .nav-item:hover {
          color: var(--pv-purple-400);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .theme-toggle-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: var(--radius-md);
          background: var(--bg-surface-elevated);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .theme-toggle-btn:hover {
          background: var(--bg-surface-hover);
          color: var(--text-primary);
          border-color: var(--border-highlight);
        }

        @media (max-width: 820px) {
          .nav-links {
            display: none;
          }
          .btn-label {
            display: none;
          }
          .print-btn {
            padding: 0.45rem 0.6rem;
          }
        }
      `}</style>
    </header>
  );
};
