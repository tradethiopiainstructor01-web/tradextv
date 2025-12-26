import type { NextPage } from 'next';
import { ResponsiveGrid, GridItem } from '../components/ResponsiveGrid';

const marketBlocks = [
  { title: 'Export Volume', value: '+12% YoY', detail: 'Textiles, agri tech, leather' },
  { title: 'Currency Watch', value: '1 USD = 55.4 ETB', detail: 'Stable vs. yesterday' },
  { title: 'Trade Finance', value: '$42M insured', detail: 'Letters of credit & insurance' },
  { title: 'Logistics Index', value: '92', detail: 'Up 3 points on corridor speed' },
];

const MarketsPage: NextPage = () => (
  <div className="page-wrapper">
    <ResponsiveGrid>
      <GridItem desktopCols={12} tabletCols={4} mobileCols={4}>
        <section className="section-block">
          <p className="hero-kicker">Trade & Markets</p>
          <h1>Business data for founders and investors.</h1>
          <p className="hero-subhead">Live indicators, export corridors, and investor telemetry in one feed.</p>
        </section>
      </GridItem>

      <GridItem desktopCols={12} tabletCols={4} mobileCols={4}>
        <section className="section-block">
          <div className="market-grid">
            {marketBlocks.map((block) => (
              <article className="market-card" key={block.title}>
                <h3>{block.title}</h3>
                <p className="card-meta">{block.detail}</p>
                <strong>{block.value}</strong>
              </article>
            ))}
          </div>
        </section>
      </GridItem>
    </ResponsiveGrid>
  </div>
);

export default MarketsPage;
