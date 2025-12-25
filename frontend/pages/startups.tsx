import type { NextPage } from 'next';

const startupStories = [
  { title: 'AgriTech Pulse', description: 'Founder journeys from Addis to Cairo with export-ready tech.' },
  { title: 'Carbon Corridor', description: 'Clean energy + logistics innovations for Ethiopian exporters.' },
  { title: 'Finance Lattice', description: 'How micro-investors fund the next trade moons.' },
];

const StartupsPage: NextPage = () => (
  <div className="page-wrapper">
    <section className="section-block">
      <p className="hero-kicker">Startups</p>
      <h1>Founders, acceleration, and launch diaries.</h1>
      <p className="hero-subhead">Weekly founder spotlights and investor calls curated for bold teams.</p>
    </section>

    <section className="section-block">
      <div className="card-grid">
        {startupStories.map((story) => (
          <article className="card accent" key={story.title}>
            <h3>{story.title}</h3>
            <p>{story.description}</p>
          </article>
        ))}
      </div>
    </section>
  </div>
);

export default StartupsPage;
