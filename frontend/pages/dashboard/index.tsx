import type { NextPage } from 'next';

const analyticsStats = [
  { label: 'Total Views', value: '482K' },
  { label: 'Avg Watch Time', value: '14m 23s' },
  { label: 'Subscriber Watchlist', value: '12.3K' },
];

const revenueEvents = [
  { label: 'Sponsorship + dom. ads', amount: '$14,800', status: 'Settled' },
  { label: 'Premium drops', amount: '$6,250', status: 'Pending' },
  { label: 'Creator incentives', amount: '$3,400', status: 'Review' },
];

const comments = [
  { user: 'Edenbey', text: 'Loved the export readiness steps—very clear!', sentiment: 'positive' },
  { user: 'Kiara', text: 'Can you share deeper metrics for the logistics series?', sentiment: 'neutral' },
  { user: 'Lemlem', text: 'The audio edit is choppy around 12:40', sentiment: 'needs action' },
];

const commandLog = [
  'sync analytics --source live',
  'queue upload Export Futures Lab',
  'pin featured show "Trade & Markets"',
];

const highlightSlides = [
  {
    title: 'Marketplace Field Notes',
    description: 'On-site dispatches that pair founder interviews with macro export beats.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    tag: 'Field Report',
  },
  {
    title: 'Creator Blocks Studio',
    description: 'Studio cut for recurring creator drops and quick edit breakdowns.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
    tag: 'Studio',
  },
  {
    title: 'Logistics Pulse',
    description: 'Live coverage of shipping corridors and export readiness labs.',
    image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80',
    tag: 'Live',
  },
];

const CreatorDashboard: NextPage = () => (
  <div className="dashboard-page terminal">
    <header className="dashboard-hero">
      <div>
        <p className="hero-kicker">Creator Terminal</p>
        <h1>Real-time command center for TradeXTV creators.</h1>
        <p className="dashboard-subhead">
          Tailor uploads, analytics, revenue, and community in terminal-like panes with gold/blue highlights.
        </p>
      </div>
      <div className="command-log">
        <p className="meta-label">Command log</p>
        <div>
          {commandLog.map((command) => (
            <p key={command}>{command}</p>
          ))}
        </div>
      </div>
    </header>

    <section className="highlight-slider section-block">
      <div className="slider-heading">
        <div>
          <h2>Recent visual drops</h2>
          <p>Swipe horizontally to preview creators currently broadcasting across TradeXTV.</p>
        </div>
        <p className="meta-label">Pinned for you</p>
      </div>
      <div className="slider-row">
        <div className="slider-track">
          {highlightSlides.map((slide) => (
            <article className="highlight-card" key={slide.title}>
              <img src={slide.image} alt={slide.title} loading="lazy" />
              <div className="highlight-card-body">
                <span className="meta-label">{slide.tag}</span>
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <div className="terminal-grid">
      <section className="upload-panel terminal-panel section-block">
        <h2>Upload content</h2>
        <form className="upload-form">
          <label>
            File
            <input type="file" />
          </label>
          <label>
            Category
            <select defaultValue="startup">
              <option value="startup">Startup</option>
              <option value="finance">Finance</option>
              <option value="export">Export</option>
              <option value="tech">Tech</option>
            </select>
          </label>
          <label>
            Premiere
            <input type="date" />
          </label>
          <button type="button" className="primary-btn">
            Upload
          </button>
        </form>
      </section>

      <section className="analytics-panel terminal-panel section-block">
        <h2>Analytics</h2>
        <div className="analytics-grid">
          {analyticsStats.map((stat) => (
            <article className="analytics-card" key={stat.label}>
              <p className="meta-label">{stat.label}</p>
              <strong>{stat.value}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="revenue-panel terminal-panel section-block">
        <h2>Revenue</h2>
        <div className="revenue-grid">
          {revenueEvents.map((event) => (
            <article className="revenue-card" key={event.label}>
              <div>
                <p className="meta-label">{event.label}</p>
                <strong>{event.amount}</strong>
              </div>
              <span className={`status-pill status-${event.status.replace(/\s+/g, '-').toLowerCase()}`}>
                {event.status}
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="comments-panel terminal-panel section-block">
        <h2>Comments</h2>
        <div className="comment-list">
          {comments.map((comment) => (
            <article className="comment-card" key={comment.user}>
              <div>
                <strong>{comment.user}</strong>
                <p>{comment.text}</p>
              </div>
              <span className={`status-pill status-${comment.sentiment.replace(/\s+/g, '-')}`}>
                {comment.sentiment}
              </span>
            </article>
          ))}
        </div>
      </section>
    </div>
  </div>
);

export default CreatorDashboard;
