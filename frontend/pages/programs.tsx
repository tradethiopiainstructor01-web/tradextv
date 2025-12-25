import type { NextPage } from 'next';

const programs = [
  { title: 'Businessweek Live', focus: 'Global trade, policy, and export leadership weekly', airtime: 'Wednesdays • 8 PM ET' },
  { title: 'Trade Tech Brief', focus: 'Deep tech, fintech, and creator studio updates', airtime: 'Fridays • 6 PM ET' },
  { title: 'Market Pulse Forum', focus: 'Investor townhall with analysts + founders', airtime: 'Mondays • 7 AM ET' },
];

const ProgramsPage: NextPage = () => (
  <div className="page-wrapper">
    <section className="section-block">
      <p className="hero-kicker">Programs</p>
      <h1>Businessweek-style features and studio pillars.</h1>
      <p className="hero-subhead">Flagship series crafted with TradeEthiopia partners, research, and guests.</p>
    </section>

    <section className="section-block">
      <div className="programs-grid">
        {programs.map((program) => (
          <article className="card" key={program.title}>
            <h3>{program.title}</h3>
            <p className="card-meta">{program.focus}</p>
            <span className="meta-label">{program.airtime}</span>
          </article>
        ))}
      </div>
    </section>
  </div>
);

export default ProgramsPage;
