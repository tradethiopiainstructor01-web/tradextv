import type { NextPage } from 'next';

const livePrograms = [
  { title: 'TradeX Morning Pulse', hosts: 'Analyst Desk', status: 'Live' },
  { title: 'In-Studio Roundtable', hosts: 'Founders & Partners', status: 'Starting soon' },
  { title: 'Global Markets Brief', hosts: 'Economists', status: 'Replay' },
];

const LivePage: NextPage = () => (
  <div className="page-wrapper">
    <section className="section-block live-hero">
      <p className="hero-kicker">Live TV</p>
      <h1>TradeXTV Live Stream</h1>
      <p className="hero-subhead">Real-time telecasts bridging TradeEthiopia policy, creator news, and global deals.</p>
      <div className="live-actions">
        <button className="primary-btn">▶ Watch Live</button>
        <button className="secondary-btn">▶ Upcoming Lineup</button>
      </div>
    </section>

    <section className="section-block">
      <div className="section-heading">
        <h2>Live Now</h2>
        <p>Switch between TradeX newsroom, studio visits, and investor streams.</p>
      </div>
      <div className="live-grid">
        {livePrograms.map((program) => (
          <article className="card" key={program.title}>
            <h3>{program.title}</h3>
            <p>{program.hosts}</p>
            <span className="status-pill status-live">{program.status}</span>
          </article>
        ))}
      </div>
    </section>
  </div>
);

export default LivePage;
