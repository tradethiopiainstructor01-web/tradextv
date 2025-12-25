import type { NextPage } from 'next';

const newsletters = [
  { name: 'Daily Trade Signal', detail: 'Market bullets, policy alerts, and export intel every morning.' },
  { name: 'Startup Dispatch', detail: 'Founder diaries, growth hacks, and creator highlights weekly.' },
  { name: 'Creator Studio Notes', detail: 'Behind-the-scenes of TradeXTV production & monetization.' },
];

const NewslettersPage: NextPage = () => (
  <div className="page-wrapper">
    <section className="section-block">
      <p className="hero-kicker">Newsletters</p>
      <h1>Actionable intelligence delivered to your inbox.</h1>
      <p className="hero-subhead">Subscribe to TradeXTV and TradeEthiopia bulletins.</p>
    </section>

    <section className="section-block">
      <div className="newsletter-grid">
        {newsletters.map((newsletter) => (
          <article className="card" key={newsletter.name}>
            <h3>{newsletter.name}</h3>
            <p>{newsletter.detail}</p>
            <button className="secondary-btn full-width">Subscribe</button>
          </article>
        ))}
      </div>
    </section>
  </div>
);

export default NewslettersPage;
