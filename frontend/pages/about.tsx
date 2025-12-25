import type { NextPage } from 'next';

const sisterCompanies = [
  {
    name: 'TradeEthiopia',
    focus: 'Trade facilitation, export readiness, and market intelligence across Addis and beyond.',
  },
  {
    name: 'TradeTech Labs',
    focus: 'Data-driven platforms that connect logistics, finance, and creator tools for Africa’s trade corridors.',
  },
  {
    name: 'Aú Studios',
    focus: 'High-end production studios for thought leadership, investor films, and TradeXTV originals.',
  },
];

const advertising = [
  'Banner + takeover suites for TradeX premium homepage slots.',
  'Sponsored briefs, native content, and event acceleration across Ethiopia and diaspora markets.',
  'Integrated TradeEthiopia campaigns that tie into export missions and investor roadshows.',
];

const partnerBenefits = [
  'Co-create programs that celebrate Ethiopian entrepreneurship with in-platform promotion.',
  'Share data, insights, and talent pipelines through TradeXTV community channels.',
  'Plug into TradeEthiopia B2B matchmaking and verified sponsorship options.',
];

const careers = [
  { role: 'Producer / Host', info: 'Lead story arcs, manage studio shoots, and shape TradeXTV originals.' },
  { role: 'Business Analyst', info: 'Surface export intelligence, metrics, and monetization signals.' },
  { role: 'Creator Success', info: 'Guide founders through uploads, watchlist growth, and revenue sharing.' },
];

const AboutPage: NextPage = () => (
  <div className="page-wrapper about-page">
    <section className="section-block about-hero">
      <div className="section-heading">
        <div>
          <p className="hero-kicker">About TradeXTV</p>
          <h1>Business streaming born from TradeEthiopia partnerships.</h1>
        </div>
      </div>
      <p className="section-subtext">
        TradeXTV is a media-first command center for startups, exporters, investors, and creators shaping Ethiopia’s trade
        future. We pair premium documentary storytelling with studio-grade content, analytics, and partner accelerators.
      </p>
    </section>

    <section className="section-block">
      <div className="section-heading">
        <h2>About TradeXTV</h2>
        <p>The streaming home for trade education, trade policy storytelling, and creator-first commerce.</p>
      </div>
      <div className="about-grid">
        <article>
          <h3>Vision</h3>
          <p>Empower every Ethiopian entrepreneur with curated knowledge, real-time policy context, and monetized visibility.</p>
        </article>
        <article>
          <h3>Studio Stack</h3>
          <p>Live, on-demand, and automated premieres recorded with TradeXTV’s creator studio, analytics, and promotion tools.</p>
        </article>
        <article>
          <h3>Community</h3>
          <p>Founders, investors, and partners collaborate through moderated feedback, watchlists, and TradeEthiopia cross-promotions.</p>
        </article>
      </div>
    </section>

    <section className="section-block">
      <div className="section-heading">
        <h2>Sister companies</h2>
        <p>TradeXTV sits inside an ecosystem backed by TradeEthiopia, creators, and innovation labs.</p>
      </div>
      <div className="sister-grid">
        {sisterCompanies.map((company) => (
          <article className="partner-card" key={company.name}>
            <h3>{company.name}</h3>
            <p>{company.focus}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="section-block row-section">
      <div className="section-heading">
        <h2>Advertise with us</h2>
        <p>Reach founders, executives, and export-minded viewers through cinematic programming.</p>
      </div>
      <ul className="list-card">
        {advertising.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>

    <section className="section-block row-section">
      <div className="section-heading">
        <h2>Partner with us</h2>
        <p>Co-create programs, sponsor categories, and integrate campaigns into TradeXTV + TradeEthiopia workflows.</p>
      </div>
      <ul className="list-card">
        {partnerBenefits.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>

    <section className="section-block row-section">
      <div className="section-heading">
        <h2>Careers</h2>
        <p>Join the TradeXTV family guiding creators, admins, and partners.</p>
      </div>
      <div className="careers-grid">
        {careers.map((career) => (
          <article className="career-card" key={career.role}>
            <h3>{career.role}</h3>
            <p>{career.info}</p>
          </article>
        ))}
      </div>
    </section>
  </div>
);

export default AboutPage;
