import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { UsersIcon, AwardIcon, ShieldIcon } from './Icons';

export const CommunityMilestones: React.FC = () => {
  return (
    <section className="section-spacing" id="community">
      <div className="section-container">
        <div className="section-header text-center">
          <span className="badge">
            <UsersIcon size={14} />
            Our Community Journey
          </span>
          <h2 className="section-title">Honoring Our {siteConfig.metrics.registeredUsersCount} Learners &amp; Aspirants</h2>
          <p className="section-lead">
            Every practice interview, algorithmic challenge, and mock evaluation was driven by our community's ambition
            to excel in competitive tech careers.
          </p>
        </div>

        <div className="impact-grid">
          <div className="glass-card impact-card">
            <div className="impact-badge-num">{siteConfig.metrics.registeredUsersCount}</div>
            <h3>Registered Community Members</h3>
            <p>
              Engineers, students, and career transitioners who prepared for technical rounds, systems design interviews,
              and behavioral assessments.
            </p>
          </div>

          <div className="glass-card impact-card">
            <div className="impact-icon-wrapper">
              <AwardIcon size={32} />
            </div>
            <h3>Countless Career Milestones</h3>
            <p>
              Candidates who gained confidence, mastered rigorous technical concepts, and secured roles across global
              technology organizations.
            </p>
          </div>

          <div className="glass-card impact-card">
            <div className="impact-icon-wrapper">
              <ShieldIcon size={32} />
            </div>
            <h3>Uncompromised User Trust</h3>
            <p>
              From day one through our final decommissioning phase, our commitment has been absolute respect for candidate
              privacy and data integrity.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .text-center {
          text-align: center;
        }

        .section-header {
          max-width: 720px;
          margin: 0 auto 3rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .section-header .badge {
          margin-bottom: 1rem;
        }

        .section-title {
          margin-bottom: 1rem;
        }

        .section-lead {
          font-size: 1.1rem;
          color: var(--text-secondary);
        }

        .impact-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .impact-card {
          padding: 2.25rem 1.75rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .impact-badge-num {
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--pv-amber-400);
          letter-spacing: -0.02em;
          margin-bottom: 0.75rem;
          line-height: 1.1;
        }

        .impact-icon-wrapper {
          color: var(--pv-purple-400);
          margin-bottom: 1rem;
        }

        .impact-card h3 {
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
          color: var(--text-primary);
        }

        .impact-card p {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 860px) {
          .impact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
