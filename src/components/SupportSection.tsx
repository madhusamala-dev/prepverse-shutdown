import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { MailIcon, CopyIcon, CheckIcon, ClockIcon, FileTextIcon } from './Icons';

export const SupportSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.support.emailPlaceholder);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = siteConfig.support.emailPlaceholder;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const mailtoHref = `mailto:${siteConfig.support.emailPlaceholder}?subject=${encodeURIComponent(
    siteConfig.support.subjectTemplate
  )}`;

  return (
    <section className="section-spacing" id="support">
      <div className="section-container">
        <div className="support-wrapper glass-card">
          <div className="support-content">
            <span className="badge">
              <MailIcon size={14} />
              Dedicated Transition Desk
            </span>

            <h2 className="support-title">Contact Support & Transition Inquiries</h2>

            <p className="support-lead">
              For any questions regarding your former PrepVerse account, verification of records, or data handling,
              our transition desk is available to assist you.
            </p>

            {/* Email Address Display Box with Copy Button */}
            <div className="email-display-container">
              <div className="email-display-inner">
                <span className="email-icon">
                  <MailIcon size={20} />
                </span>
                <span className="email-text" id="support-email-text">
                  {siteConfig.support.emailPlaceholder}
                </span>
              </div>

              <div className="email-actions">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="btn btn-secondary btn-sm copy-btn"
                  aria-label="Copy support email address to clipboard"
                >
                  {copied ? (
                    <>
                      <CheckIcon size={16} />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <CopyIcon size={16} />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <a href={mailtoHref} className="btn btn-primary btn-sm send-email-btn">
                  <MailIcon size={16} />
                  <span>Send Email</span>
                </a>
              </div>
            </div>

            {/* Placeholder Note Banner */}
            {siteConfig.support.isPlaceholder && (
              <div className="placeholder-note-banner">
                <FileTextIcon size={16} />
                <span>
                  <strong>Configuration Note:</strong> {siteConfig.support.helperNote}
                </span>
              </div>
            )}

            {/* Guidance on Inquiries */}
            <div className="inquiry-tips-grid">
              <div className="tip-item">
                <div className="tip-header">
                  <ClockIcon size={16} />
                  <h4>Response Window</h4>
                </div>
                <p>{siteConfig.support.responseWindow}</p>
              </div>

              <div className="tip-item">
                <div className="tip-header">
                  <FileTextIcon size={16} />
                  <h4>Helpful Inquiry Details</h4>
                </div>
                <p>
                  Please send your inquiry from your originally registered email address or provide your registration
                  email to facilitate verification.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .support-wrapper {
          padding: 3rem;
          max-width: 860px;
          margin: 0 auto;
          position: relative;
        }

        .support-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .support-content .badge {
          margin-bottom: 1.25rem;
        }

        .support-title {
          margin-bottom: 1rem;
        }

        .support-lead {
          max-width: 680px;
          font-size: 1.05rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .email-display-container {
          width: 100%;
          max-width: 600px;
          background: var(--bg-surface-elevated);
          border: 1px solid var(--border-highlight);
          border-radius: var(--radius-md);
          padding: 1rem 1.25rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
          box-shadow: 0 4px 20px rgba(124, 58, 237, 0.12);
        }

        .email-display-inner {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .email-icon {
          color: var(--pv-purple-400);
          display: flex;
        }

        .email-text {
          font-family: var(--font-mono);
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--text-primary);
          letter-spacing: -0.01em;
        }

        .email-actions {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .placeholder-note-banner {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 0.85rem;
          color: var(--text-muted);
          background: var(--bg-surface-subtle);
          border: 1px dashed var(--border-subtle);
          padding: 0.65rem 1rem;
          border-radius: var(--radius-sm);
          max-width: 600px;
          width: 100%;
          text-align: left;
          margin-bottom: 2rem;
          line-height: 1.5;
        }

        .placeholder-note-banner strong {
          color: var(--text-secondary);
        }

        .inquiry-tips-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
          width: 100%;
          max-width: 680px;
          text-align: left;
        }

        .tip-item {
          background: var(--bg-surface-elevated);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 1.25rem;
        }

        .tip-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--pv-purple-400);
          margin-bottom: 0.5rem;
        }

        .tip-header h4 {
          font-size: 0.95rem;
          color: var(--text-primary);
        }

        .tip-item p {
          font-size: 0.875rem;
          color: var(--text-secondary);
          margin: 0;
          line-height: 1.5;
        }

        @media (max-width: 680px) {
          .support-wrapper {
            padding: 2rem 1.25rem;
          }
          .email-display-container {
            flex-direction: column;
            align-items: stretch;
            text-align: center;
          }
          .email-display-inner {
            justify-content: center;
          }
          .email-actions {
            justify-content: center;
          }
          .inquiry-tips-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
