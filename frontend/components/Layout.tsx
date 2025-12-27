import React, { ReactNode } from 'react';
import Link from 'next/link';

interface LayoutProps {
  children: ReactNode;
}

const navLinks = [
  { label: 'Markets', href: '/markets' },
  { label: 'Trade', href: '/trade' },
  { label: 'Startups', href: '/startups' },
  { label: 'Economy', href: '/economy' },
  { label: 'Africa', href: '/africa' },
  { label: 'Coffee', href: '/coffee' },
  { label: 'Energy', href: '/energy' },
];

const footerSections = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
      { label: 'Team', href: '/team' },
    ],
  },
  {
    title: 'Products',
    links: [
      { label: 'Live TV', href: '/live' },
      { label: 'Video', href: '/video' },
      { label: 'Newsletters', href: '/newsletters' },
      { label: 'Programs', href: '/programs' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Center', href: '/help' },
      { label: 'Support', href: '/support' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Cookie Policy', href: '/cookies' },
      { label: 'Compliance', href: '/compliance' },
    ],
  },
  {
    title: 'Newsletters',
    links: [
      { label: 'Daily Brief', href: '/daily' },
      { label: 'Weekly Wrap', href: '/weekly' },
      { label: 'Markets Report', href: '/markets' },
      { label: 'Tech Trends', href: '/tech' },
    ],
  },
  {
    title: 'Social',
    links: [
      { label: 'Twitter', href: 'https://twitter.com/tradextv' },
      { label: 'LinkedIn', href: 'https://linkedin.com/company/tradextv' },
      { label: 'YouTube', href: 'https://youtube.com/tradextv' },
      { label: 'Instagram', href: 'https://instagram.com/tradextv' },
    ],
  },
  {
    title: 'Apps',
    links: [
      { label: 'iOS App', href: '/app/ios' },
      { label: 'Android App', href: '/app/android' },
      { label: 'TV App', href: '/app/tv' },
      { label: 'Desktop App', href: '/app/desktop' },
    ],
  },
];

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout-container">
      <header className="primary-header">
        <div className="header-left">
          <Link href="/" className="brand-logo">
            <span>TradeXTV</span>
          </Link>
          <nav className="header-nav">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className="nav-link">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="header-right">
          <button className="icon-btn" aria-label="Search">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          <button className="icon-btn" aria-label="Notifications">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path
                d="M14 2C12.3431 2 11 3.34315 11 5C11 7.042 10.283 8.996 9.098 10.45L8.5 11.25V13L5 16.5V17H19V16.5L15.5 13V11.25L14.902 10.45C13.717 8.996 13 7.042 13 5C13 3.34315 11.6569 2 10 2H14Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle cx="11" cy="19" r="2" fill="currentColor" />
            </svg>
          </button>

          <Link href="/auth" className="header-link login">
            Login
          </Link>

          <Link href="/subscribe" className="header-btn">
            Subscribe
          </Link>
        </div>
      </header>

      <div className="top-data-bar">
        <div className="live-pill">
          <span className="live-dot" />
          <span className="live-label">LIVE</span>
          <span className="live-detail">Coffee Index ↑</span>
        </div>
        <span className="data-separator" />
        <div className="data-pill">
          <span>USD/ETB 54.82</span>
        </div>
        <span className="data-separator" />
        <div className="data-pill">
          <span>Gold ↓ $2,024.50</span>
        </div>
        <span className="data-separator" />
        <div className="data-pill">
          <span>Oil ↑ $78.45</span>
        </div>
      </div>

      <main className="main-content">{children}</main>

      <footer className="global-footer">
        <div className="footer-content">
          {footerSections.map((section) => (
            <div className="footer-section" key={section.title}>
              <h3>{section.title}</h3>
              <ul>
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} TradeXTV. All rights reserved.</p>
        </div>
      </footer>

      <Link href="/live" className="live-tv-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="23 7 16 12 23 17 23 7" />
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
        </svg>
        Live TV
      </Link>
    </div>
  );
};

export default Layout;
