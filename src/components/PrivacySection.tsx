import React from 'react';
import { siteConfig } from '../config/siteConfig';
import {
  ShieldIcon,
  DatabaseIcon,
  LockIcon,
  UserCheckIcon,
  FileTextIcon,
  AlertTriangleIcon,
} from './Icons';

export const PrivacySection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'lock':
        return <LockIcon size={20} />;
      case 'database':
        return <DatabaseIcon size={20} />;
      case 'userCheck':
        return <UserCheckIcon size={20} />;
      case 'shield':
        return <ShieldIcon size={20} />;
      case 'fileText':
      default:
        return <FileTextIcon size={20} />;
    }
  };

  return (
    <section className="section-spacing" id="privacy">
      <div className="section-container">
        <div className="section-header text-center">
          <span className="badge">
            <ShieldIcon size={14} />
            PrepVerse Data Governance
          </span>
          <h2 className="section-title">{siteConfig.privacy.statusHeadline}</h2>
          <p className="section-lead">{siteConfig.privacy.statusSubhead}</p>
        </div>

        {/* Mandatory Transparency Disclaimer Box */}
        <div className="transparency-callout glass-card">
          <div className="transparency-icon">
            <AlertTriangleIcon size={24} />
          </div>
          <div className="transparency-content">
            <h3>Commitment to Verified Accuracy</h3>
            <p>{siteConfig.privacy.unverifiedDeletionDisclaimer}</p>
          </div>
        </div>

        {/* Data Handling Principles Grid */}
        <div className="privacy-grid">
          {siteConfig.privacy.dataHandlingPoints.map((point, index) => (
            <div key={index} className="glass-card privacy-card">
              <div className="privacy-card-icon">{getIcon(point.icon)}</div>
              <h3>{point.title}</h3>
              <p>{point.description}</p>
            </div>
          ))}
        </div>

        {/* User Rights & Inquiries Detailed Card */}
        <div className="glass-card user-rights-card">
          <div className="rights-content">
            <h3>Your Rights as a Registered User</h3>
            <p>
              Under PrepVerse data governance policies, all 40,000+ registered candidates maintain specific rights
              throughout the decommissioning window ending on{' '}
              <strong>{siteConfig.dates.formattedArchiveDate}</strong>:
            </p>

            <ul className="rights-list">
              <li>
                <strong>Account Record Inquiries:</strong> You may verify the status of any account information or
                practice records previously associated with your registered email address.
              </li>
              <li>
                <strong>Data Summary Requests:</strong> You may request a summary of the personal details stored in our
                secure transition archives prior to the final scheduled purge.
              </li>
              <li>
                <strong>Expedited Deletion Confirmation:</strong> You may request priority manual removal of your primary
                user account records from transition repositories by verifying ownership through our dedicated support
                desk.
              </li>
            </ul>

            <div className="rights-action">
              <span>To exercise any of these rights, contact our support desk:</span>
              <a href="#support" className="btn btn-secondary btn-sm">
                Go to Support Details
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .transparency-callout {
          display: flex;
          gap: 1.25rem;
          padding: 1.75rem 2rem;
          margin-bottom: 2.5rem;
          background: rgba(245, 158, 11, 0.08);
          border: 1px solid rgba(245, 158, 11, 0.28);
          border-radius: var(--radius-lg);
          align-items: flex-start;
        }

        .transparency-icon {
          color: var(--pv-amber-400);
          flex-shrink: 0;
          margin-top: 0.2rem;
        }

        .transparency-content h3 {
          font-size: 1.15rem;
          color: var(--pv-amber-400);
          margin-bottom: 0.5rem;
        }

        .transparency-content p {
          color: var(--text-primary);
          font-size: 0.975rem;
          line-height: 1.65;
          margin: 0;
        }

        .privacy-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .privacy-grid > :last-child:nth-child(odd) {
          grid-column: span 2;
        }

        .privacy-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
        }

        .privacy-card-icon {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: rgba(124, 58, 237, 0.15);
          border: 1px solid rgba(167, 139, 250, 0.25);
          color: var(--pv-purple-400);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
        }

        .privacy-card h3 {
          font-size: 1.2rem;
          margin-bottom: 0.75rem;
          color: var(--text-primary);
        }

        .privacy-card p {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
        }

        .user-rights-card {
          padding: 2.25rem 2.5rem;
        }

        .rights-content h3 {
          font-size: 1.3rem;
          margin-bottom: 0.85rem;
        }

        .rights-content > p {
          font-size: 1rem;
          color: var(--text-secondary);
          margin-bottom: 1.25rem;
        }

        .rights-list {
          list-style: none;
          margin-bottom: 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .rights-list li {
          position: relative;
          padding-left: 1.5rem;
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .rights-list li::before {
          content: '•';
          position: absolute;
          left: 0.35rem;
          color: var(--pv-purple-400);
          font-size: 1.35rem;
          line-height: 1;
        }

        .rights-list strong {
          color: var(--text-primary);
        }

        .rights-action {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-subtle);
          flex-wrap: wrap;
          gap: 1rem;
          font-size: 0.925rem;
          color: var(--text-muted);
        }

        @media (max-width: 768px) {
          .privacy-grid {
            grid-template-columns: 1fr;
          }
          .privacy-grid > :last-child:nth-child(odd) {
            grid-column: span 1;
          }
          .user-rights-card {
            padding: 1.75rem;
          }
        }
      `}</style>
    </section>
  );
};
