import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { LockIcon, XCircleIcon, ClockIcon } from './Icons';

export const ClosureNotice: React.FC = () => {
  return (
    <section className="section-spacing" id="notice">
      <div className="section-container">
        <div className="glass-card notice-main-card">
          <div className="notice-header">
            <div className="notice-badge-group">
              <span className="badge badge-retired">Platform Decommissioned</span>
              <span className="notice-timestamp">Notice Effective: {siteConfig.dates.effectiveDate}</span>
            </div>
            <h2 className="notice-title">Official Decommissioning Statement</h2>
          </div>

          <div className="notice-body">
            <p className="notice-lead">
              PrepVerse was built with a focused mission: to give candidates and aspiring engineers the tools,
              confidence, and interactive practice necessary to excel in technical interviews.
            </p>

            <p>
              Having supported over <strong>{siteConfig.metrics.registeredUsersCount} registered users</strong> through
              thousands of practice hours, interview simulations, and technical evaluations, the PrepVerse platform
              has formally concluded its operations. All active web infrastructure, mock interview engines, and user
              portals have been retired.
            </p>

            <div className="status-grid">
              <div className="status-item">
                <div className="status-item-header">
                  <div className="status-icon status-icon-inactive">
                    <XCircleIcon size={18} />
                  </div>
                  <h3>Web Dashboard & Logins</h3>
                </div>
                <p>
                  Interactive candidate portals, profile settings, and login endpoints have been permanently
                  decommissioned.
                </p>
              </div>

              <div className="status-item">
                <div className="status-item-header">
                  <div className="status-icon status-icon-inactive">
                    <XCircleIcon size={18} />
                  </div>
                  <h3>Interview Modules & Mock Tests</h3>
                </div>
                <p>
                  Technical simulations, coding challenge sandboxes, and AI-assisted interview bots have ceased active
                  execution.
                </p>
              </div>

              <div className="status-item">
                <div className="status-item-header">
                  <div className="status-icon status-icon-inactive">
                    <XCircleIcon size={18} />
                  </div>
                  <h3>Recurring Billing & Subscriptions</h3>
                </div>
                <p>
                  All subscription renewals and recurring payment schedules have been halted. No further billing will
                  occur.
                </p>
              </div>

              <div className="status-item">
                <div className="status-item-header">
                  <div className="status-icon status-icon-active">
                    <LockIcon size={18} />
                  </div>
                  <h3>Secure Data Isolation</h3>
                </div>
                <p>
                  All stored user records and database snapshots have been removed from public access and isolated in
                  secured vaults.
                </p>
              </div>
            </div>

            <div className="notice-callout">
              <div className="callout-icon">
                <ClockIcon size={22} />
              </div>
              <div className="callout-content">
                <h4>Notice and Inquiry Window</h4>
                <p>
                  This official notice, along with access to our dedicated transition support desk, will remain
                  available online through <strong>{siteConfig.dates.formattedArchiveDate}</strong> to assist former
                  users with any final account verification or data inquiries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .section-spacing {
          padding: 3rem 0;
        }

        .notice-main-card {
          padding: 2.75rem;
        }

        .notice-header {
          margin-bottom: 2rem;
          border-bottom: 1px solid var(--border-subtle);
          padding-bottom: 1.5rem;
        }

        .notice-badge-group {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.85rem;
          flex-wrap: wrap;
        }

        .notice-timestamp {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .notice-title {
          color: var(--text-primary);
        }

        .notice-body p {
          margin-bottom: 1.25rem;
          font-size: 1.05rem;
          line-height: 1.7;
        }

        .notice-lead {
          font-size: 1.15rem !important;
          color: var(--text-primary) !important;
          font-weight: 500;
        }

        .status-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
          margin: 2.25rem 0;
        }

        .status-item {
          background: var(--bg-surface-elevated);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 1.35rem;
          transition: border-color var(--transition-fast);
        }

        .status-item:hover {
          border-color: var(--border-highlight);
        }

        .status-item-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }

        .status-item h3 {
          font-size: 1.05rem;
          color: var(--text-primary);
        }

        .status-item p {
          font-size: 0.925rem !important;
          color: var(--text-secondary);
          margin-bottom: 0 !important;
          line-height: 1.55;
        }

        .status-icon {
          width: 32px;
          height: 32px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .status-icon-inactive {
          background: rgba(239, 68, 68, 0.12);
          color: #f87171;
          border: 1px solid rgba(239, 68, 68, 0.25);
        }

        .status-icon-active {
          background: rgba(124, 58, 237, 0.15);
          color: var(--pv-purple-400);
          border: 1px solid rgba(167, 139, 250, 0.25);
        }

        .notice-callout {
          display: flex;
          gap: 1.25rem;
          background: rgba(124, 58, 237, 0.08);
          border: 1px solid rgba(167, 139, 250, 0.25);
          border-radius: var(--radius-md);
          padding: 1.5rem;
          margin-top: 2rem;
          align-items: flex-start;
        }

        .callout-icon {
          color: var(--pv-purple-400);
          margin-top: 0.15rem;
          flex-shrink: 0;
        }

        .callout-content h4 {
          font-size: 1.05rem;
          color: var(--text-primary);
          margin-bottom: 0.4rem;
        }

        .callout-content p {
          margin-bottom: 0 !important;
          font-size: 0.95rem !important;
          color: var(--text-secondary);
        }

        @media (max-width: 768px) {
          .notice-main-card {
            padding: 1.75rem;
          }
          .status-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
