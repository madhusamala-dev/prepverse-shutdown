/**
 * PrepVerse Shutdown Website Configuration
 *
 * Central configuration file for all closure notices, support placeholders,
 * metrics, dates, and privacy specifications.
 *
 * NOTE: Strictly standalone PrepVerse decommissioning notice.
 */

export interface FAQItem {
  id: string;
  category: 'general' | 'privacy' | 'accounts' | 'billing';
  question: string;
  answer: string;
}

export interface SiteConfig {
  brand: {
    name: string;
    tagline: string;
    logoUrl: string;
    logoAlt: string;
  };
  metrics: {
    registeredUsersCount: string;
    registeredUsersDescription: string;
  };
  dates: {
    effectiveDate: string;
    noticeArchiveDate: string;
    formattedArchiveDate: string;
  };
  support: {
    emailPlaceholder: string;
    isPlaceholder: boolean;
    helperNote: string;
    responseWindow: string;
    subjectTemplate: string;
  };
  privacy: {
    statusHeadline: string;
    statusSubhead: string;
    unverifiedDeletionDisclaimer: string;
    dataHandlingPoints: Array<{
      title: string;
      description: string;
      icon: 'shield' | 'database' | 'userCheck' | 'fileText' | 'lock';
    }>;
  };
  faqs: FAQItem[];
}

export const siteConfig: SiteConfig = {
  brand: {
    name: 'PrepVerse',
    tagline: 'Technical Career Preparation & Interview Readiness Platform',
    logoUrl: './prepverse-logo.png',
    logoAlt: 'PrepVerse Official Logo',
  },
  metrics: {
    registeredUsersCount: '40,000+',
    registeredUsersDescription:
      '40,000+ registered learners, job seekers, and career aspirants empowered across our preparation journey.',
  },
  dates: {
    effectiveDate: 'October 2026',
    noticeArchiveDate: '2026-10-21',
    formattedArchiveDate: '21st October 2026',
  },
  support: {
    emailPlaceholder: 'madhu@hyrecruitai.com',
    isPlaceholder: false,
    helperNote:
      'Dedicated transition support mailbox for PrepVerse decommissioning inquiries.',
    responseWindow: 'Typically 3-5 business days during the decommissioning transition window',
    subjectTemplate: 'PrepVerse Decommissioning - Account & Data Inquiry',
  },
  privacy: {
    statusHeadline: 'User Data Governance & Privacy Protections',
    statusSubhead:
      'A transparent, rigorous approach to data isolation, retention limits, and scheduled deletion.',
    unverifiedDeletionDisclaimer:
      'In accordance with enterprise data stewardship standards, we do not claim that all personal data or backup records have been instantaneously erased. Instead, all systems and data sets follow a strictly audited, phased decommission schedule outlined below.',
    dataHandlingPoints: [
      {
        title: 'Production Infrastructure Detached',
        description:
          'All public application endpoints, user login portals, interactive interview bots, and practice scoring clusters have been formally powered down and detached from public network routing.',
        icon: 'lock',
      },
      {
        title: 'Archival Backups & Phased Decommissioning',
        description:
          'Historical database snapshots and operational backups are maintained in an isolated, encrypted vault strictly for statutory tax, legal compliance, and transition resolution purposes. These will undergo automated, cryptographically irreversible purging following the prescribed retention window.',
        icon: 'database',
      },
      {
        title: 'User Data Access & Deletion Requests',
        description:
          'Registered users retain the right to inquire about their account records, request verification of their stored profile summary, or submit an expedited deletion request prior to final archive purging by reaching out to our dedicated support address.',
        icon: 'userCheck',
      },
      {
        title: 'Zero Third-Party Data Monetization',
        description:
          'PrepVerse has never sold, leased, rented, or distributed candidate information, resumes, or interview recordings to third-party data brokers or marketing platforms.',
        icon: 'shield',
      },
      {
        title: 'Zero Cookies, Zero Analytics on this Notice',
        description:
          'This static notice website is completely self-contained. It operates with zero advertising cookies, zero analytics trackers, zero local storage tracking, and zero external third-party API dependencies.',
        icon: 'fileText',
      },
    ],
  },
  faqs: [
    {
      id: 'faq-1',
      category: 'general',
      question: 'Why has PrepVerse concluded operations?',
      answer:
        'After an extraordinary chapter serving over 40,000+ registered candidates on their career journey, PrepVerse has officially ceased operations. While the platform has powered down, we are deeply grateful to every candidate who trusted us for their interview readiness and technical skill preparation.',
    },
    {
      id: 'faq-2',
      category: 'privacy',
      question: 'Has all my personal data and backup information been deleted immediately?',
      answer:
        'No, and we believe in total transparency: we do not claim that all personal data or backups have already been wiped. In accordance with data stewardship principles, customer databases are immediately decoupled from public networks, while archival backups undergo a secure, phased retention lifecycle. These backups will be cryptographically purged according to regulatory and accounting retention limits.',
    },
    {
      id: 'faq-3',
      category: 'accounts',
      question: 'Can I still log in to my PrepVerse account or practice modules?',
      answer:
        'No. All interactive user logins, mock interview simulators, coding playgrounds, and assessment score dashboards have been permanently decommissioned and are no longer accessible.',
    },
    {
      id: 'faq-4',
      category: 'accounts',
      question: 'Can I request an export of my account data or submit an early deletion request?',
      answer:
        'Yes. Registered users may contact our dedicated transition support desk to request verification of their registered account profile, request a data summary, or request early removal from active transition queues.',
    },
    {
      id: 'faq-5',
      category: 'billing',
      question: 'Will my subscription renew or will I be charged?',
      answer:
        'All recurring subscriptions and billing pipelines have been suspended. No further charges will occur under any PrepVerse product or service.',
    },
    {
      id: 'faq-6',
      category: 'general',
      question: 'How long will this closure notice and support desk remain available?',
      answer:
        'This official static closure portal and the dedicated transition support channel will remain fully accessible online through 21st October 2026.',
    },
  ],
};
