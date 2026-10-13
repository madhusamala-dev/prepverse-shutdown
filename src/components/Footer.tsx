import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { ShieldIcon, ClockIcon } from './Icons';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="section-container">
        <div className="footer-top">
          <div className="footer-brand">
            <img
              src={siteConfig.brand.logoUrl}
              alt={siteConfig.brand.logoAlt}
              className="footer-logo"
              width="150"
              height="35"
            />
            <p className="footer-tagline">{siteConfig.brand.tagline}</p>
          </div>

          <div className="footer-nav">
            <span className="footer-heading">Quick Links</span>
            <div className="footer-links-list">
              <a href="#notice">Closure Notice</a>
              <a href="#community">40,000+ Community</a>
              <a href="#privacy">Data & Privacy Policy</a>
              <a href="#timeline">Timeline & Milestones</a>
              <a href="#faq">FAQ</a>
              <a href="#support">Transition Support</a>
            </div>
          </div>

          <div className="footer-retention">
            <span className="footer-heading">Notice Availability</span>
            <div className="retention-badge-box">
              <ClockIcon size={16} />
              <span>
                Available through <strong>{siteConfig.dates.formattedArchiveDate}</strong>
              </span>
            </div>
            <p className="retention-note">
              This static website is preserved to provide transparency and transition support for all former PrepVerse
              members.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-guarantees">
            <span className="guarantee-item">
              <ShieldIcon size={14} />
              Zero Cookies Used
            </span>
            <span className="guarantee-item">
              <ShieldIcon size={14} />
              Zero Third-Party Trackers
            </span>
            <span className="guarantee-item">
              <ShieldIcon size={14} />
              Pure Static Architecture
            </span>
          </div>

          <div className="footer-copyright">
            <p>© {new Date().getFullYear()} {siteConfig.brand.name}. All rights reserved.</p>
          </div>
        </div>
      </div>

      <style>{`
        .site-footer {
          background: var(--bg-surface-solid);
          border-top: 1px solid var(--border-subtle);
          padding: 3.5rem 0 2rem;
          margin-top: 3rem;
          position: relative;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1.25fr;
          gap: 2.5rem;
          margin-bottom: 2.5rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid var(--border-subtle);
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.85rem;
        }

        .footer-logo {
          height: 34px;
          width: auto;
          object-fit: contain;
        }

        .footer-tagline {
          font-size: 0.9rem;
          color: var(--text-muted);
          max-width: 320px;
          line-height: 1.5;
        }

        .footer-heading {
          font-size: 0.825rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-primary);
          margin-bottom: 1rem;
          display: block;
        }

        .footer-links-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.5rem 1rem;
        }

        .footer-links-list a {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.875rem;
          transition: color var(--transition-fast);
        }

        .footer-links-list a:hover {
          color: var(--pv-purple-400);
        }

        .retention-badge-box {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(124, 58, 237, 0.12);
          border: 1px solid rgba(167, 139, 250, 0.25);
          padding: 0.5rem 0.85rem;
          border-radius: var(--radius-sm);
          font-size: 0.85rem;
          color: var(--pv-purple-300);
          margin-bottom: 0.75rem;
        }

        .retention-badge-box strong {
          color: #ffffff;
        }

        .retention-note {
          font-size: 0.825rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .footer-guarantees {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          flex-wrap: wrap;
        }

        .guarantee-item {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .footer-copyright p {
          font-size: 0.825rem;
          color: var(--text-muted);
          margin: 0;
        }

        @media (max-width: 860px) {
          .footer-top {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </footer>
  );
};
