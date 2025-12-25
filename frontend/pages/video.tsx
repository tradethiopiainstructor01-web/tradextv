import type { NextPage } from 'next';

const clipCategories = ['Spotlight', 'Launches', 'Policy', 'Creator Studio'];
const clips = [
  { title: 'Export Futures Lab Clip', length: '4m', stat: '12K views' },
  { title: 'Studio Session: Founder Q&A', length: '9m', stat: '21K views' },
  { title: 'Business Data Flash Brief', length: '3m', stat: '35K views' },
];

const VideoPage: NextPage = () => (
  <div className="page-wrapper">
    <section className="section-block">
      <p className="hero-kicker">Clips hub</p>
      <h1>Quick takes, creator cuts, and policy bites.</h1>
      <p className="hero-subhead">Mini films and highlight reels for when you need insight on the fly.</p>
    </section>

    <section className="section-block">
      <div className="chip-list">
        {clipCategories.map((category) => (
          <span key={category} className="tag-pill">
            {category}
          </span>
        ))}
      </div>
      <div className="clip-grid">
        {clips.map((clip) => (
          <article className="clip-card" key={clip.title}>
            <div className="clip-thumb" />
            <div>
              <h3>{clip.title}</h3>
              <p className="card-meta">
                {clip.length} • {clip.stat}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  </div>
);

export default VideoPage;
