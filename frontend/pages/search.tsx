import type { NextPage } from 'next';

const suggestions = ['Startup insights', 'Trade policy', 'Creator stories', 'Market analytics'];
const results = [
  { title: 'Export Futures Lab', type: 'Series', detail: 'Live now • 3 episodes' },
  { title: 'Trade & Markets Daily', type: 'Clip', detail: '7m brief' },
  { title: 'Creator Studio Tour', type: 'Feature', detail: '12m doc' },
];

const SearchPage: NextPage = () => (
  <div className="page-wrapper">
    <section className="section-block">
      <p className="hero-kicker">Search</p>
      <h1>Find TradeXTV shows, clips, and news.</h1>
      <div className="search-box">
        <input placeholder="Search for shows, founders, or data" />
        <button className="primary-btn">Search</button>
      </div>
      <div className="chip-list">
        {suggestions.map((item) => (
          <span key={item} className="tag-pill">
            {item}
          </span>
        ))}
      </div>
    </section>

    <section className="section-block">
      <div className="section-heading">
        <h2>Results</h2>
        <p>Curated hits from recomms, business data, and creator dashboards.</p>
      </div>
      <div className="search-results">
        {results.map((result) => (
          <article className="card" key={result.title}>
            <h3>{result.title}</h3>
            <p className="meta-label">{result.type}</p>
            <p>{result.detail}</p>
          </article>
        ))}
      </div>
    </section>
  </div>
);

export default SearchPage;
