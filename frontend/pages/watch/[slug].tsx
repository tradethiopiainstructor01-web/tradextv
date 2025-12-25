import type { NextPage } from 'next';

const episodes = [
  {
    title: 'Episode 1 – Launch Field Notes',
    description: 'Founder diaries showing early product-market fit testing.',
    duration: '21m',
    status: 'Available',
  },
  {
    title: 'Episode 2 – Export Ready Brief',
    description: 'Steps to align packaging, compliance, and logistics.',
    duration: '18m',
    status: 'Streaming soon',
  },
  {
    title: 'Episode 3 – Funding Pulse',
    description: 'Investor reflections and pitch reboot templates.',
    duration: '27m',
    status: 'Premiering',
  },
];

const relatedContent = [
  { title: 'Global Trade Launchpad', subtitle: 'Cross-border studios and policy 101', meta: '34m • Business Insight' },
  { title: 'TradeXTV Creator Lab', subtitle: 'Watchlist favorites + edits', meta: '16m • Creator Studio' },
  { title: 'Supply Chain Ready', subtitle: 'Blue economy + corridors recap', meta: '29m • Industry Special' },
];

const ContentDetail: NextPage = () => (
  <div className="detail-page">
    <section className="detail-hero">
      <div className="detail-media">
        <video
          className="detail-video"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80"
        >
          <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4" />
        </video>
        <div className="media-overlay">
          <span>Auto-preview enabled</span>
        </div>
      </div>
      <div className="detail-info">
        <div className="tag-row">
          {['Startup', 'Finance', 'Export', 'Tech'].map((tag) => (
            <span className="tag-pill" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <h1>Unlocking TradeX Ecosystems</h1>
        <p>
          A flagship TradeXTV feature that blends founder storytelling with trade policy analysis, export readiness
          playbooks, and creator-led short-form insight.
        </p>
        <div className="detail-meta">
          <div>
            <span className="meta-label">Duration</span>
            <strong>47m total</strong>
          </div>
          <div>
            <span className="meta-label">Views</span>
            <strong>128K</strong>
          </div>
          <div>
            <span className="meta-label">Rating</span>
            <strong>4.9/5</strong>
          </div>
        </div>
        <div className="detail-actions">
          <button className="primary-btn large">▶ Play</button>
          <button className="secondary-btn large">➕ Watchlist</button>
          <button className="ghost-btn large">🔗 Share</button>
        </div>
      </div>
    </section>

    <section className="episodes-section">
      <div className="section-heading">
        <div>
          <h2>Episodes / Parts</h2>
          <p>Follow the series arc or jump to the topic that matters today.</p>
        </div>
      </div>
      <div className="episode-list">
        {episodes.map((episode) => (
          <article className="episode-card" key={episode.title}>
            <div>
              <h3>{episode.title}</h3>
              <p>{episode.description}</p>
            </div>
            <div className="episode-meta">
              <span>{episode.duration}</span>
              <span className="episode-status">{episode.status}</span>
            </div>
          </article>
        ))}
      </div>
    </section>

    <section className="related-section section-block">
      <div className="section-heading">
        <h2>Related content</h2>
        <p>Handpicked drops that keep the TradeX conversation moving.</p>
      </div>
      <div className="slider-row">
        <div className="slider-track">
          {relatedContent.map((item) => (
            <article className="show-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
              <p className="card-meta">{item.meta}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default ContentDetail;
