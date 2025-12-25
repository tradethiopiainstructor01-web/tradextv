import React, { ReactNode, useState, useEffect } from 'react';
import Link from 'next/link';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="layout-container">
      {/* Top Utility Bar */}
      <div className="top-utility-bar">
        <div className="utility-content">
          <div className="logo-container">
            <Link href="/" className="logo-link">
              <span className="logo-text">TradeXTV</span>
            </Link>
          </div>
          
          <nav className="primary-nav">
            <Link href="/markets" className="nav-link">Markets</Link>
            <Link href="/economics" className="nav-link">Economics</Link>
            <Link href="/industries" className="nav-link">Industries</Link>
            <Link href="/tech" className="nav-link">Tech</Link>
            <Link href="/politics" className="nav-link">Politics</Link>
            <Link href="/opinion" className="nav-link">Opinion</Link>
            <div className="nav-dropdown">
              <span className="nav-link">Businessweek</span>
              <div className="dropdown-content">
                <Link href="/businessweek">Businessweek</Link>
                <Link href="/citylab">CityLab/Green</Link>
              </div>
            </div>
          </nav>
          
          <div className="right-actions">
            <button className="search-btn" onClick={() => setIsSearchOpen(!isSearchOpen)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
            
            <Link href="/auth" className="nav-link">Sign in</Link>
            <Link href="/subscribe" className="subscribe-btn">Subscribe</Link>
            
            <div className="nav-dropdown">
              <button className="watchlist-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </button>
              <div className="dropdown-content watchlist-dropdown">
                <h3>Watchlist</h3>
                <p>Your tracked assets</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Markets Data Strip */}
      <div className="markets-data-strip">
        <div className="ticker-container">
          <div className="ticker-item">
            <div className="ticker-hover-container">
              <span className="ticker-symbol">S&P</span>
              <span className="ticker-price">4,750.20</span>
              <span className="ticker-change positive">+0.85%</span>
              <div className="ticker-hover-card">
                <div className="ticker-header">
                  <span className="ticker-symbol-large">S&P 500</span>
                  <span className="ticker-price-large">4,750.20</span>
                </div>
                <div className="ticker-change-large positive">+0.85%</div>
                <div className="ticker-sparkline">
                  <svg width="120" height="40" viewBox="0 0 120 40">
                    <polyline points="0,30 10,25 20,28 30,22 40,25 50,20 60,22 70,18 80,20 90,15 100,18 110,15 120,18" fill="none" stroke="#34d399" strokeWidth="2" />
                  </svg>
                </div>
                <div className="ticker-details">
                  <div>Open: 4,725.30</div>
                  <div>High: 4,758.40</div>
                  <div>Low: 4,715.20</div>
                </div>
              </div>
            </div>
          </div>
          <div className="ticker-item">
            <div className="ticker-hover-container">
              <span className="ticker-symbol">Nasdaq</span>
              <span className="ticker-price">15,212.14</span>
              <span className="ticker-change positive">+1.24%</span>
              <div className="ticker-hover-card">
                <div className="ticker-header">
                  <span className="ticker-symbol-large">Nasdaq</span>
                  <span className="ticker-price-large">15,212.14</span>
                </div>
                <div className="ticker-change-large positive">+1.24%</div>
                <div className="ticker-sparkline">
                  <svg width="120" height="40" viewBox="0 0 120 40">
                    <polyline points="0,35 10,32 20,30 30,28 40,25 50,22 60,20 70,18 80,15 90,18 100,15 110,12 120,10" fill="none" stroke="#34d399" strokeWidth="2" />
                  </svg>
                </div>
                <div className="ticker-details">
                  <div>Open: 15,150.20</div>
                  <div>High: 15,225.40</div>
                  <div>Low: 15,140.30</div>
                </div>
              </div>
            </div>
          </div>
          <div className="ticker-item">
            <div className="ticker-hover-container">
              <span className="ticker-symbol">DXY</span>
              <span className="ticker-price">104.25</span>
              <span className="ticker-change negative">-0.32%</span>
              <div className="ticker-hover-card">
                <div className="ticker-header">
                  <span className="ticker-symbol-large">DXY</span>
                  <span className="ticker-price-large">104.25</span>
                </div>
                <div className="ticker-change-large negative">-0.32%</div>
                <div className="ticker-sparkline">
                  <svg width="120" height="40" viewBox="0 0 120 40">
                    <polyline points="0,15 10,18 20,20 30,22 40,25 50,28 60,30 70,28 80,25 90,22 100,20 110,18 120,15" fill="none" stroke="#f87171" strokeWidth="2" />
                  </svg>
                </div>
                <div className="ticker-details">
                  <div>Open: 104.50</div>
                  <div>High: 104.75</div>
                  <div>Low: 104.10</div>
                </div>
              </div>
            </div>
          </div>
          <div className="ticker-item">
            <div className="ticker-hover-container">
              <span className="ticker-symbol">Oil</span>
              <span className="ticker-price">$78.45</span>
              <span className="ticker-change positive">+0.67%</span>
              <div className="ticker-hover-card">
                <div className="ticker-header">
                  <span className="ticker-symbol-large">Crude Oil</span>
                  <span className="ticker-price-large">$78.45</span>
                </div>
                <div className="ticker-change-large positive">+0.67%</div>
                <div className="ticker-sparkline">
                  <svg width="120" height="40" viewBox="0 0 120 40">
                    <polyline points="0,25 10,22 20,20 30,18 40,20 50,22 60,20 70,18 80,15 90,18 100,20 110,22 120,25" fill="none" stroke="#34d399" strokeWidth="2" />
                  </svg>
                </div>
                <div className="ticker-details">
                  <div>Open: $77.90</div>
                  <div>High: $78.80</div>
                  <div>Low: $77.60</div>
                </div>
              </div>
            </div>
          </div>
          <div className="ticker-item">
            <div className="ticker-hover-container">
              <span className="ticker-symbol">Gold</span>
              <span className="ticker-price">$2,024.50</span>
              <span className="ticker-change negative">-0.18%</span>
              <div className="ticker-hover-card">
                <div className="ticker-header">
                  <span className="ticker-symbol-large">Gold</span>
                  <span className="ticker-price-large">$2,024.50</span>
                </div>
                <div className="ticker-change-large negative">-0.18%</div>
                <div className="ticker-sparkline">
                  <svg width="120" height="40" viewBox="0 0 120 40">
                    <polyline points="0,20 10,22 20,25 30,28 40,30 50,32 60,30 70,28 80,25 90,22 100,20 110,18 120,20" fill="none" stroke="#f87171" strokeWidth="2" />
                  </svg>
                </div>
                <div className="ticker-details">
                  <div>Open: $2,028.30</div>
                  <div>High: $2,032.40</div>
                  <div>Low: $2,018.20</div>
                </div>
              </div>
            </div>
          </div>
          <div className="ticker-item">
            <div className="ticker-hover-container">
              <span className="ticker-symbol">BTC</span>
              <span className="ticker-price">$43,210.75</span>
              <span className="ticker-change positive">+2.34%</span>
              <div className="ticker-hover-card">
                <div className="ticker-header">
                  <span className="ticker-symbol-large">Bitcoin</span>
                  <span className="ticker-price-large">$43,210.75</span>
                </div>
                <div className="ticker-change-large positive">+2.34%</div>
                <div className="ticker-sparkline">
                  <svg width="120" height="40" viewBox="0 0 120 40">
                    <polyline points="0,30 10,25 20,28 30,22 40,25 50,20 60,22 70,18 80,20 90,15 100,18 110,15 120,10" fill="none" stroke="#34d399" strokeWidth="2" />
                  </svg>
                </div>
                <div className="ticker-details">
                  <div>Open: $42,200.50</div>
                  <div>High: $43,450.20</div>
                  <div>Low: $42,100.30</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content Area */}
      <main className="main-content">
        {children}
      </main>
      
      {/* Footer */}
      <footer className="global-footer">
        <div className="footer-content">
          {[
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
          ].map((section) => (
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
      
      {/* Live TV Button */}
      <Link href="/live" className="live-tv-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="23 7 16 12 23 17 23 7"></polygon>
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
        </svg>
        Live TV
      </Link>
    </div>
  );
};

export default Layout;
