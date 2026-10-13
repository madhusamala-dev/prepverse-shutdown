import React, { useState, useMemo } from 'react';
import { siteConfig } from '../config/siteConfig';
import { ChevronDownIcon, SearchIcon, FileTextIcon } from './Icons';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredFaqs = useMemo(() => {
    return siteConfig.faqs.filter((faq) => {
      const matchesSearch =
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'general', label: 'General Closure' },
    { id: 'privacy', label: 'Data & Privacy' },
    { id: 'accounts', label: 'Accounts & Portals' },
    { id: 'billing', label: 'Billing & Subscriptions' },
  ];

  return (
    <section className="section-spacing" id="faq">
      <div className="section-container">
        <div className="section-header text-center">
          <span className="badge">
            <FileTextIcon size={14} />
            Frequently Asked Questions
          </span>
          <h2 className="section-title">Common Questions Regarding the Decommission</h2>
          <p className="section-lead">
            Find answers regarding account records, data stewardship, service timelines, and support inquiries.
          </p>
        </div>

        <div className="faq-wrapper">
          {/* Controls: Search and Filters */}
          <div className="faq-controls">
            <div className="faq-search-box">
              <SearchIcon size={18} className="search-icon" />
              <input
                type="text"
                placeholder="Search questions (e.g. data, backups, login, timeline)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="faq-search-input"
                aria-label="Search frequently asked questions"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="clear-search-btn"
                  aria-label="Clear search query"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="faq-category-filters" role="tablist" aria-label="FAQ Categories">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={selectedCategory === cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`category-pill ${selectedCategory === cat.id ? 'category-pill-active' : ''}`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Accordion List */}
          <div className="faq-list">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <div key={faq.id} className={`faq-card glass-card ${isOpen ? 'faq-card-open' : ''}`}>
                    <button
                      type="button"
                      className="faq-question-btn"
                      onClick={() => toggleAccordion(faq.id)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${faq.id}`}
                    >
                      <span className="faq-question-text">{faq.question}</span>
                      <span className={`faq-chevron ${isOpen ? 'faq-chevron-rotated' : ''}`}>
                        <ChevronDownIcon size={20} />
                      </span>
                    </button>
                    {isOpen && (
                      <div id={`faq-answer-${faq.id}`} className="faq-answer-container" role="region">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="glass-card faq-no-results text-center">
                <p>No questions matched your search query "{searchQuery}".</p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="btn btn-secondary btn-sm"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .faq-wrapper {
          max-width: 860px;
          margin: 0 auto;
        }

        .faq-controls {
          margin-bottom: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .faq-search-box {
          position: relative;
          display: flex;
          align-items: center;
          width: 100%;
        }

        .search-icon {
          position: absolute;
          left: 1.2rem;
          color: var(--text-muted);
          pointer-events: none;
        }

        .faq-search-input {
          width: 100%;
          padding: 0.85rem 1rem 0.85rem 3rem;
          background: var(--bg-surface-elevated);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          color: var(--text-primary);
          font-size: 0.95rem;
          transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
        }

        .faq-search-input:focus {
          outline: none;
          border-color: var(--pv-purple-500);
          box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.2);
        }

        .clear-search-btn {
          position: absolute;
          right: 1rem;
          background: none;
          border: none;
          color: var(--text-muted);
          font-size: 0.825rem;
          cursor: pointer;
          padding: 0.2rem 0.4rem;
        }

        .clear-search-btn:hover {
          color: var(--text-primary);
        }

        .faq-category-filters {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .category-pill {
          background: var(--bg-surface-elevated);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          padding: 0.45rem 1rem;
          border-radius: var(--radius-full);
          font-size: 0.85rem;
          font-weight: 500;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .category-pill:hover {
          background: var(--bg-surface-hover);
          color: var(--text-primary);
        }

        .category-pill-active {
          background: var(--pv-purple-700);
          border-color: var(--pv-purple-500);
          color: #ffffff;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .faq-card {
          transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
        }

        .faq-card-open {
          border-color: var(--border-highlight);
        }

        .faq-question-btn {
          width: 100%;
          text-align: left;
          background: none;
          border: none;
          padding: 1.5rem 1.75rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          cursor: pointer;
          color: var(--text-primary);
          font-size: 1.05rem;
          font-weight: 600;
        }

        .faq-question-btn:focus-visible {
          outline: 2px solid var(--pv-purple-500);
          border-radius: var(--radius-lg);
        }

        .faq-chevron {
          color: var(--pv-purple-400);
          transition: transform var(--transition-smooth);
          flex-shrink: 0;
          display: flex;
        }

        .faq-chevron-rotated {
          transform: rotate(180deg);
        }

        .faq-answer-container {
          padding: 0 1.75rem 1.5rem;
          border-top: 1px solid var(--border-subtle);
          margin-top: 0.25rem;
          padding-top: 1.25rem;
        }

        .faq-answer-container p {
          font-size: 0.975rem;
          line-height: 1.7;
          color: var(--text-secondary);
          margin: 0;
        }

        .faq-no-results {
          padding: 3rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .faq-no-results p {
          color: var(--text-secondary);
          font-size: 1rem;
        }
      `}</style>
    </section>
  );
};
