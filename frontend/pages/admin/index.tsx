import type { NextPage } from 'next';

const approvals = [
  { title: 'Diaspora Connect: Trade Mission', creator: 'Lensa Media', length: '26m', status: 'Pending' },
  { title: 'Logistics Forward Weekly', creator: 'Kassa Studios', length: '34m', status: 'Approved' },
  { title: 'Creator Playbook Workshop', creator: 'TradeXTV Lab', length: '24m', status: 'Changes Requested' },
];

const categories = [
  { name: 'Startup Stories', active: true },
  { name: 'Export Guides', active: true },
  { name: 'Policy Briefings', active: false },
  { name: 'Creator Studio', active: true },
];

const users = [
  { name: 'Amanuel', role: 'Admin', lastActive: '2m ago' },
  { name: 'Maya', role: 'Producer', lastActive: '12m ago' },
  { name: 'Firehiwot', role: 'Creator', lastActive: '1h ago' },
];

const ads = [
  { campaign: 'TradeEthiopia Expo 2030', status: 'Live', budget: '$18K' },
  { campaign: 'Export Accelerator', status: 'Queued', budget: '$9K' },
];

const featured = [
  { title: 'Export Futures Lab', priority: 'High', live: true },
  { title: 'Creator Highlights', priority: 'Medium', live: false },
  { title: 'Market Pulse', priority: 'Medium', live: true },
];

const AdminDashboard: NextPage = () => (
  <div className="dashboard-page admin-page">
    <header className="dashboard-hero">
      <div>
        <p className="hero-kicker">Admin Command Center</p>
        <h1>Curate TradeXTV, manage users, and approve every premium drop.</h1>
        <p className="dashboard-subhead">
          Control what airs, who publishes, and how promotions roll out from a single, high-trust rail.
        </p>
      </div>
    </header>

    <section className="section-block approvals-section">
      <div className="section-heading">
        <h2>Content approval</h2>
        <p>Approve, reject, or request changes before anything reaches the homepage.</p>
      </div>
      <div className="approval-grid">
        {approvals.map((item) => (
          <article className="approval-card" key={item.title}>
            <div>
              <h3>{item.title}</h3>
              <p className="meta-label">{item.creator}</p>
              <p className="approval-length">{item.length}</p>
            </div>
            <button className={`status-pill status-${item.status.replace(/\s+/g, '-').toLowerCase()}`}>
              {item.status}
            </button>
          </article>
        ))}
      </div>
    </section>

    <section className="section-block row-section">
      <div className="section-heading">
        <h2>Categories</h2>
        <p>Toggle which hubs appear on the front page or add new editorial labels.</p>
      </div>
      <div className="chip-list">
        {categories.map((category) => (
          <span
            key={category.name}
            className={`tag-pill ${category.active ? 'tag-pill-active' : ''}`}
          >
            {category.name}
          </span>
        ))}
      </div>
    </section>

    <section className="section-block row-section">
      <div className="section-heading">
        <h2>Users & roles</h2>
        <p>Admins, producers, creators, and guests all managed in one place.</p>
      </div>
      <div className="user-list">
        {users.map((user) => (
          <article className="user-card" key={user.name}>
            <div>
              <strong>{user.name}</strong>
              <p className="meta-label">{user.role}</p>
            </div>
            <p className="meta-label">{user.lastActive}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="section-block row-section">
      <div className="section-heading">
        <h2>Ads & promotions</h2>
        <p>Schedule banners, sponsors, and cross-promotions alongside featured slots.</p>
      </div>
      <div className="ad-list">
        {ads.map((item) => (
          <article className="ad-card" key={item.campaign}>
            <h3>{item.campaign}</h3>
            <p className="meta-label">{item.status}</p>
            <strong>{item.budget}</strong>
          </article>
        ))}
      </div>
    </section>

    <section className="section-block row-section">
      <div className="section-heading">
        <h2>Featured content control</h2>
        <p>Pin series, surface premieres, or retire campaigns with a click.</p>
      </div>
      <div className="featured-grid">
        {featured.map((item) => (
          <article className="featured-card" key={item.title}>
            <div>
              <h3>{item.title}</h3>
              <p className="meta-label">Priority: {item.priority}</p>
            </div>
            <button className={`status-pill ${item.live ? 'status-settled' : 'status-pending'}`}>
              {item.live ? 'Live' : 'Off air'}
            </button>
          </article>
        ))}
      </div>
    </section>
  </div>
);

export default AdminDashboard;
