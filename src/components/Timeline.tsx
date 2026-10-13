import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { ClockIcon, CheckIcon } from './Icons';

export const Timeline: React.FC = () => {
  return (
    <section className="section-spacing" id="timeline">
      <div className="section-container">
        <div className="section-header text-center">
          <span className="badge">
            <ClockIcon size={14} />
            Lifecycle Schedule
          </span>
          <h2 className="section-title">Decommissioning & Transition Milestones</h2>
          <p className="section-lead">
            Tracking key dates and transitional phases for PrepVerse users and services.
          </p>
        </div>

        <div className="timeline-container">
          {/* Milestone 1 */}
          <div className="timeline-item past-item">
            <div className="timeline-marker">
              <div className="marker-dot">
                <CheckIcon size={14} />
              </div>
              <div className="timeline-line" />
            </div>
            <div className="timeline-content glass-card">
              <div className="timeline-badge-row">
                <span className="badge badge-retired">Completed</span>
                <span className="timeline-date">{siteConfig.dates.effectiveDate}</span>
              </div>
              <h3>Platform Service Shutdown</h3>
              <p>
                All web dashboards, user login systems, practice test suites, and mock interview engines were formally
                powered down. Recurring subscription processing and automated renewals were terminated.
              </p>
            </div>
          </div>

          {/* Milestone 2 */}
          <div className="timeline-item active-item">
            <div className="timeline-marker">
              <div className="marker-dot pulse">
                <ClockIcon size={14} />
              </div>
              <div className="timeline-line" />
            </div>
            <div className="timeline-content glass-card">
              <div className="timeline-badge-row">
                <span className="badge badge-active">
                  <span className="badge-pulse-dot" />
                  Current Active Phase
                </span>
                <span className="timeline-date">Through October 2026</span>
              </div>
              <h3>Data Inquiries & Transition Support Window</h3>
              <p>
                Dedicated support desk is active to assist registered users with account status verifications, data
                inquiries, and transitional questions. Encrypted archival storage is maintained in secure isolation.
              </p>
            </div>
          </div>

          {/* Milestone 3 */}
          <div className="timeline-item future-item">
            <div className="timeline-marker">
              <div className="marker-dot" />
            </div>
            <div className="timeline-content glass-card">
              <div className="timeline-badge-row">
                <span className="badge">Scheduled Conclusion</span>
                <span className="timeline-date">{siteConfig.dates.formattedArchiveDate}</span>
              </div>
              <h3>Final Notice Archival & Support Conclusion</h3>
              <p>
                This static shutdown website notice concludes its public availability period. Archival transition
                backups reach the end of their designated retention cycle and undergo final cryptographic purging in
                accordance with data governance protocols.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .timeline-container {
          max-width: 820px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .timeline-item {
          display: flex;
          gap: 2rem;
          position: relative;
          padding-bottom: 2.5rem;
        }

        .timeline-item:last-child {
          padding-bottom: 0;
        }

        .timeline-marker {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-shrink: 0;
        }

        .marker-dot {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-surface-elevated);
          border: 2px solid var(--border-subtle);
          color: var(--text-muted);
          z-index: 2;
          transition: all var(--transition-fast);
        }

        .timeline-line {
          width: 2px;
          flex: 1;
          background: var(--border-subtle);
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .past-item .marker-dot {
          background: rgba(124, 58, 237, 0.2);
          border-color: var(--pv-purple-500);
          color: var(--pv-purple-300);
        }

        .active-item .marker-dot {
          background: rgba(16, 185, 129, 0.2);
          border-color: #10b981;
          color: #34d399;
          box-shadow: 0 0 16px rgba(16, 185, 129, 0.35);
        }

        .active-item .timeline-content {
          border-color: rgba(16, 185, 129, 0.3);
        }

        .future-item .marker-dot {
          border-style: dashed;
        }

        .timeline-content {
          flex: 1;
          padding: 1.75rem 2rem;
        }

        .timeline-badge-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.85rem;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .timeline-date {
          font-size: 0.875rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .timeline-content h3 {
          font-size: 1.25rem;
          margin-bottom: 0.6rem;
          color: var(--text-primary);
        }

        .timeline-content p {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 640px) {
          .timeline-item {
            gap: 1.25rem;
          }
          .timeline-content {
            padding: 1.25rem;
          }
        }
      `}</style>
    </section>
  );
};
