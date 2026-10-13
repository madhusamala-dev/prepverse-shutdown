import React, { useState, useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';
import { SunIcon, MoonIcon, PrinterIcon } from './Icons';

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
          <div className="banner-badge-wrapper">
            <span className="badge badge-retired">
              <span className="badge-pulse-dot" />
              Official Notice
            </span>
          </div>
          <div className="banner-content-text">
            <span className="banner-notice-line">
              PrepVerse has officially ceased operations. This notice will remain available until{' '}
              <strong>{siteConfig.dates.formattedArchiveDate}</strong>.
            </span>
            <span className="banner-contact-line">
              For any questions, concerns, or complaints, please contact{' '}
              <a
                href={`mailto:${siteConfig.support.emailPlaceholder}`}
                className="banner-contact-link"
              >
                {siteConfig.support.emailPlaceholder}
              </a>
              .
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
          background: linear-gradient(90deg, rgba(76, 29, 149, 0.5) 0%, rgba(30, 24, 54, 0.9) 100%);
          border-bottom: 1px solid var(--border-subtle);
          padding: 0.65rem 0;
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.45;
        }

        [data-theme='light'] .top-banner {
          background: linear-gradient(90deg, rgba(237, 233, 254, 0.85) 0%, rgba(245, 243, 255, 0.95) 100%);
          border-bottom: 1px solid rgba(109, 40, 217, 0.18);
        }

        .top-banner-inner {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          text-align: center;
        }

        .banner-badge-wrapper {
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
        }

        .banner-content-text {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.35rem 0.65rem;
        }

        .banner-notice-line {
          color: var(--text-primary);
        }

        .banner-notice-line strong {
          color: var(--pv-purple-300);
          font-weight: 600;
        }

        [data-theme='light'] .banner-notice-line strong {
          color: var(--pv-purple-800);
        }

        .banner-contact-line {
          color: var(--text-secondary);
        }

        .banner-contact-link {
          color: var(--pv-amber-400);
          text-decoration: underline;
          text-underline-offset: 3px;
          font-weight: 600;
          transition: color var(--transition-fast), background-color var(--transition-fast);
          padding: 0.1rem 0.3rem;
          border-radius: var(--radius-sm);
        }

        [data-theme='light'] .banner-contact-link {
          color: var(--pv-amber-600);
        }

        .banner-contact-link:hover {
          color: #ffffff;
          background: rgba(245, 158, 11, 0.25);
        }

        [data-theme='light'] .banner-contact-link:hover {
          color: var(--pv-amber-700);
          background: rgba(245, 158, 11, 0.15);
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

        @media (max-width: 860px) {
          .top-banner-inner {
            flex-direction: column;
            gap: 0.45rem;
            padding-top: 0.25rem;
            padding-bottom: 0.25rem;
          }

          .banner-content-text {
            flex-direction: column;
            gap: 0.25rem;
          }
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
