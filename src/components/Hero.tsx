import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { ShieldIcon, MailIcon, UsersIcon, ClockIcon, DatabaseIcon } from './Icons';

export const Hero: React.FC = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="section-container">
        <div className="hero-content">
          <div className="hero-badge-wrapper">
            <span className="badge badge-retired">
              <span className="badge-pulse-dot" />
              Service Retired
            </span>
            <span className="badge">
              Notice Active Until {siteConfig.dates.formattedArchiveDate}
            </span>
          </div>

          <h1 className="hero-title">
            PrepVerse Operations Have Concluded
          </h1>

          <p className="hero-subtitle">
            A heartfelt thank you to our remarkable community of{' '}
            <strong className="text-highlight">{siteConfig.metrics.registeredUsersCount} registered users</strong>{' '}
            who trusted PrepVerse for technical interview preparation, skill development, and career growth.
          </p>

          <div className="hero-cta-group">
            <a href="#privacy" className="btn btn-primary">
              <ShieldIcon size={18} />
              Privacy & Data Policy
            </a>
            <a href="#support" className="btn btn-secondary">
              <MailIcon size={18} />
              Transition Support
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="metrics-grid">
            <div className="metric-card glass-card">
              <div className="metric-icon metric-icon-purple">
                <UsersIcon size={24} />
              </div>
              <div className="metric-value">{siteConfig.metrics.registeredUsersCount}</div>
              <div className="metric-label">Registered Candidates & Learners</div>
              <div className="metric-subtext">Empowered on their career readiness journey</div>
            </div>

            <div className="metric-card glass-card">
              <div className="metric-icon metric-icon-amber">
                <ClockIcon size={24} />
              </div>
              <div className="metric-value">{siteConfig.dates.formattedArchiveDate}</div>
              <div className="metric-label">Notice Availability Date</div>
              <div className="metric-subtext">Support portal & records inquiry window</div>
            </div>

            <div className="metric-card glass-card">
              <div className="metric-icon metric-icon-purple">
                <DatabaseIcon size={24} />
              </div>
              <div className="metric-value">Phased Lifecycle</div>
              <div className="metric-label">Data Retention & Governance</div>
              <div className="metric-subtext">Encrypted, scheduled decommission schedule</div>
            </div>

            <div className="metric-card glass-card">
              <div className="metric-icon metric-icon-amber">
                <ShieldIcon size={24} />
              </div>
              <div className="metric-value">100% Static</div>
              <div className="metric-label">Zero Cookies or Tracking</div>
              <div className="metric-subtext">Private, self-contained closure notice</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          padding: 3.5rem 0 2rem;
          position: relative;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .hero-badge-wrapper {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .hero-title {
          max-width: 820px;
          margin-bottom: 1.25rem;
          background: linear-gradient(135deg, var(--text-primary) 0%, var(--pv-purple-300) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: -0.03em;
        }

        .hero-subtitle {
          max-width: 720px;
          font-size: clamp(1.05rem, 2vw, 1.25rem);
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }

        .text-highlight {
          color: var(--pv-amber-400);
          font-weight: 700;
        }

        .hero-cta-group {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 3.5rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
          width: 100%;
        }

        .metric-card {
          padding: 1.5rem 1.25rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .metric-icon {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
        }

        .metric-icon-purple {
          background: rgba(124, 58, 237, 0.15);
          color: var(--pv-purple-400);
          border: 1px solid rgba(167, 139, 250, 0.25);
        }

        .metric-icon-amber {
          background: rgba(245, 158, 11, 0.15);
          color: var(--pv-amber-400);
          border: 1px solid rgba(245, 158, 11, 0.25);
        }

        .metric-value {
          font-size: 1.45rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.35rem;
          letter-spacing: -0.01em;
        }

        .metric-label {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 0.35rem;
        }

        .metric-subtext {
          font-size: 0.775rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        @media (max-width: 992px) {
          .metrics-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 580px) {
          .metrics-grid {
            grid-template-columns: 1fr;
          }
          .hero-cta-group {
            width: 100%;
          }
          .hero-cta-group .btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};
