import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { fetchPlatformOverview, PlatformOverview } from '../services/platform';

interface Story {
  id: string;
  title: string;
  summary: string;
  timestamp: string;
  category: string;
  image?: string;
  isBreaking?: boolean;
}

interface TopicBlock {
  id: string;
  title: string;
  featuredStory: Story;
  stories: Story[];
}

interface VideoClip {
  id: string;
  title: string;
  duration: string;
  thumbnail: string;
  timestamp: string;
}

interface OpinionItem {
  id: string;
  author: string;
  title: string;
  summary: string;
  avatar: string;
}

interface CompanySpotlight {
  id: string;
  name: string;
  sector: string;
  ticker: string;
  logo: string;
}

const HomePage: NextPage = () => {
  const [platformOverview, setPlatformOverview] = useState<PlatformOverview | null>(null);
  const [platformLoading, setPlatformLoading] = useState(true);
  const [platformError, setPlatformError] = useState<string | null>(null);

  useEffect(() => {
    let isCanceled = false;

    const loadOverview = async () => {
      setPlatformLoading(true);

      try {
        const overview = await fetchPlatformOverview();
        if (!isCanceled) {
          setPlatformOverview(overview);
          setPlatformError(null);
        }
      } catch (error) {
        if (!isCanceled) {
          const message = error instanceof Error ? error.message : 'Unexpected error';
          setPlatformError(message);
        }
      } finally {
        if (!isCanceled) {
          setPlatformLoading(false);
        }
      }
    };

    loadOverview();

    return () => {
      isCanceled = true;
    };
  }, []);

  // Lead Story data
  const leadStory: Story = {
    id: 'lead-1',
    title: 'Global Markets Rally as Fed Signals Potential Policy Shift',
    summary: 'Major indices surge on expectations of more dovish monetary policy stance as inflation data shows signs of cooling.',
    timestamp: '5 min ago',
    category: 'Markets',
    image: 'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?auto=format&fit=crop&w=1200&q=80',
    isBreaking: true
  };

  const topStories: Story[] = [
    {
      id: 'top-1',
      title: 'Tech Giants Report Strong Q4 Earnings Despite Economic Headwinds',
      summary: 'Major tech companies beat expectations as cloud and AI investments drive growth',
      timestamp: '12 min ago',
      category: 'Technology'
    },
    {
      id: 'top-2',
      title: 'Oil Prices Jump After OPEC+ Announces Production Cuts',
      summary: 'Decision sends crude prices up 3% as supply concerns outweigh demand worries',
      timestamp: '24 min ago',
      category: 'Commodities'
    },
    {
      id: 'top-3',
      title: 'European Stocks Open Higher Amid ECB Policy Speculation',
      summary: 'FTSE and DAX lead gains as investors await key economic data releases',
      timestamp: '35 min ago',
      category: 'Europe'
    },
    {
      id: 'top-4',
      title: 'Bitcoin Surges Past $45K as Institutional Adoption Accelerates',
      summary: 'Major corporations add crypto to treasury reserves amid regulatory clarity',
      timestamp: '1 hour ago',
      category: 'Cryptocurrency'
    },
    {
      id: 'top-5',
      title: 'Fed Officials Signal Potential Rate Cut in Next Meeting',
      summary: 'Comments from regional bank presidents suggest policy pivot could be near',
      timestamp: '2 hours ago',
      category: 'Central Banks'
    },
    {
      id: 'top-6',
      title: 'Asian Markets Close Mixed as China Data Disappoints',
      summary: 'Shanghai index falls while Tokyo gains on tech sector strength',
      timestamp: '3 hours ago',
      category: 'Asia'
    },
    {
      id: 'top-7',
      title: 'Startups Raise $2.3B in Latest Funding Wave',
      summary: 'Venture capital activity remains robust despite market volatility',
      timestamp: '4 hours ago',
      category: 'Startups'
    },
  ];

  // Market Snapshot data
  const marketSnapshots = [
    {
      id: 'stocks',
      title: 'Stocks',
      data: [
        { symbol: 'S&P 500', value: '4,750.20', change: '+0.85%' },
        { symbol: 'NASDAQ', value: '15,212.14', change: '+1.24%' },
        { symbol: 'DOW', value: '35,124.50', change: '+0.62%' },
      ]
    },
    {
      id: 'fx',
      title: 'FX',
      data: [
        { symbol: 'EUR/USD', value: '1.0850', change: '-0.12%' },
        { symbol: 'GBP/USD', value: '1.2700', change: '+0.21%' },
        { symbol: 'USD/JPY', value: '149.25', change: '+0.08%' },
      ]
    },
    {
      id: 'rates',
      title: 'Rates',
      data: [
        { symbol: '10Y TSY', value: '4.25%', change: '-0.05%' },
        { symbol: '2Y TSY', value: '4.85%', change: '+0.03%' },
        { symbol: '3M TSY', value: '5.25%', change: '0.00%' },
      ]
    },
    {
      id: 'commodities',
      title: 'Commodities',
      data: [
        { symbol: 'Gold', value: '$2,024.50', change: '-0.18%' },
        { symbol: 'Oil', value: '$78.45', change: '+0.67%' },
        { symbol: 'Silver', value: '$22.80', change: '-0.42%' },
      ]
    },
    {
      id: 'crypto',
      title: 'Crypto',
      data: [
        { symbol: 'BTC', value: '$43,210.75', change: '+2.34%' },
        { symbol: 'ETH', value: '$2,750.30', change: '+1.87%' },
        { symbol: 'SOL', value: '$98.45', change: '+5.21%' },
      ]
    },
  {
    id: 'startups',
    title: 'Startups',
    data: [
      { symbol: 'Funding', value: '$2.3B', change: '+12%' },
      { symbol: 'IPOs', value: '18', change: '+8%' },
      { symbol: 'Valuations', value: 'Avg $1.2B', change: '+5%' },
    ]
  },
];

  const companySpotlights: CompanySpotlight[] = [
    {
      id: 'company-1',
      name: 'Global Exchange Systems',
      sector: 'Fintech Platform',
      ticker: 'GEXS',
      logo: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=240&q=80'
    },
    {
      id: 'company-2',
      name: 'Pan-African Energy',
      sector: 'Renewable Energy',
      ticker: 'PAE',
      logo: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=240&q=80'
    },
    {
      id: 'company-3',
      name: 'Harbor Logistics',
      sector: 'Supply Chain',
      ticker: 'HBLG',
      logo: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=240&q=80'
    },
    {
      id: 'company-4',
      name: 'NextGen Pharma',
      sector: 'Health Tech',
      ticker: 'NGPH',
      logo: 'https://images.unsplash.com/photo-1582711012124-a68ba48d9d6a?auto=format&fit=crop&w=240&q=80'
    },
    {
      id: 'company-5',
      name: 'Bridgewater Capital',
      sector: 'Private Markets',
      ticker: 'BWC',
      logo: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=240&q=80'
    },
  ];

  // Topic Blocks
  const topicBlocks: TopicBlock[] = [
    {
      id: 'tech',
      title: 'Technology',
      featuredStory: {
        id: 'tech-featured',
        title: 'AI Revolution Transforms Traditional Industries',
        summary: 'Companies across sectors leverage artificial intelligence to boost productivity and innovation',
        timestamp: '2 hours ago',
        category: 'Technology',
        image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80'
      },
      stories: [
        {
          id: 'tech-1',
          title: 'Big Tech Earnings Beat Expectations',
          summary: 'Cloud and AI divisions drive growth',
          timestamp: '4 hours ago',
          category: 'Earnings'
        },
        {
          id: 'tech-2',
          title: 'Semiconductor Shortage Eases',
          summary: 'Supply chain improvements boost chip availability',
          timestamp: '6 hours ago',
          category: 'Hardware'
        },
        {
          id: 'tech-3',
          title: 'Cybersecurity Threats Rise',
          summary: 'Companies increase security spending amid new threats',
          timestamp: '8 hours ago',
          category: 'Security'
        },
        {
          id: 'tech-4',
          title: 'Quantum Computing Milestone',
          summary: 'New breakthrough promises computational advances',
          timestamp: '10 hours ago',
          category: 'Innovation'
        },
        {
          id: 'tech-5',
          title: 'Regulatory Scrutiny Increases',
          summary: 'Governments worldwide examine tech giants',
          timestamp: '12 hours ago',
          category: 'Regulation'
        },
        {
          id: 'tech-6',
          title: 'Remote Work Trends Continue',
          summary: 'Hybrid models become permanent for many firms',
          timestamp: '14 hours ago',
          category: 'Work'
        },
      ]
    },
    {
      id: 'markets',
      title: 'Markets',
      featuredStory: {
        id: 'markets-featured',
        title: 'Global Markets Navigate Economic Uncertainty',
        summary: 'Investors monitor central bank policies and inflation data for guidance',
        timestamp: '3 hours ago',
        category: 'Markets',
        image: 'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?auto=format&fit=crop&w=800&q=80'
      },
      stories: [
        {
          id: 'markets-1',
          title: 'Bond Yields Fluctuate',
          summary: 'Treasury yields show volatility amid policy speculation',
          timestamp: '5 hours ago',
          category: 'Fixed Income'
        },
        {
          id: 'markets-2',
          title: 'Currency Markets React',
          summary: 'Dollar strength impacts emerging market currencies',
          timestamp: '7 hours ago',
          category: 'Forex'
        },
        {
          id: 'markets-3',
          title: 'Commodity Prices Stabilize',
          summary: 'Energy and agriculture sectors show resilience',
          timestamp: '9 hours ago',
          category: 'Commodities'
        },
        {
          id: 'markets-4',
          title: 'Emerging Markets Outlook',
          summary: 'Developing economies face mixed signals',
          timestamp: '11 hours ago',
          category: 'Emerging Markets'
        },
        {
          id: 'markets-5',
          title: 'Volatility Index Trends',
          summary: 'VIX reflects investor sentiment changes',
          timestamp: '13 hours ago',
          category: 'Volatility'
        },
        {
          id: 'markets-6',
          title: 'Sector Performance',
          summary: 'Technology leads while energy lags',
          timestamp: '15 hours ago',
          category: 'Sectors'
        },
      ]
    },
    {
      id: 'economics',
      title: 'Economics',
      featuredStory: {
        id: 'economics-featured',
        title: 'Global Economic Indicators Point to Slower Growth',
        summary: 'Mixed signals from major economies as central banks maintain cautious stance',
        timestamp: '4 hours ago',
        category: 'Economics',
        image: 'https://images.unsplash.com/photo-1441926489240-94f1b67b1c69?auto=format&fit=crop&w=800&q=80'
      },
      stories: [
        {
          id: 'economics-1',
          title: 'US Job Market Shows Resilience',
          summary: 'Employment data exceeds expectations',
          timestamp: '6 hours ago',
          category: 'Labor'
        },
        {
          id: 'economics-2',
          title: 'Eurozone Inflation Concerns',
          summary: 'Price pressures remain elevated in key sectors',
          timestamp: '8 hours ago',
          category: 'Inflation'
        },
        {
          id: 'economics-3',
          title: 'China Economic Rebound',
          summary: 'Manufacturing activity shows improvement',
          timestamp: '10 hours ago',
          category: 'China'
        },
        {
          id: 'economics-4',
          title: 'Trade Balance Updates',
          summary: 'Exports and imports show mixed performance',
          timestamp: '12 hours ago',
          category: 'Trade'
        },
        {
          id: 'economics-5',
          title: 'Consumer Spending Trends',
          summary: 'Retail sales data reflects changing patterns',
          timestamp: '14 hours ago',
          category: 'Consumption'
        },
        {
          id: 'economics-6',
          title: 'Housing Market Update',
          summary: 'Real estate shows signs of stabilization',
          timestamp: '16 hours ago',
          category: 'Housing'
        },
      ]
    }
  ];

  // Video clips
  const videoClips: VideoClip[] = [
    {
      id: 'live-1',
      title: 'Market Open: Trading Day Preview',
      duration: '12:45',
      thumbnail: 'https://images.unsplash.com/photo-1526304640516-5f2b2f6b300d?auto=format&fit=crop&w=400&q=80',
      timestamp: 'Live Now'
    },
    {
      id: 'clip-1',
      title: 'Tech Earnings Analysis',
      duration: '18:22',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80',
      timestamp: '2 hours ago'
    },
    {
      id: 'clip-2',
      title: 'Commodities Outlook',
      duration: '15:30',
      thumbnail: 'https://images.unsplash.com/photo-1464863979621-2588901e6f7a?auto=format&fit=crop&w=400&q=80',
      timestamp: '4 hours ago'
    },
    {
      id: 'clip-3',
      title: 'Crypto Market Update',
      duration: '22:15',
      thumbnail: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=400&q=80',
      timestamp: '6 hours ago'
    },
    {
      id: 'clip-4',
      title: 'Global Markets Wrap',
      duration: '25:40',
      thumbnail: 'https://images.unsplash.com/photo-1441926489240-94f1b67b1c69?auto=format&fit=crop&w=400&q=80',
      timestamp: '8 hours ago'
    },
    {
      id: 'clip-5',
      title: 'Economic Indicators Explained',
      duration: '19:55',
      thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80',
      timestamp: '10 hours ago'
    },
  ];

  // Opinion items
  const opinionItems: OpinionItem[] = [
    {
      id: 'opinion-1',
      author: 'Michael Chen',
      title: 'The Future of Central Banking',
      summary: 'Digital currencies will reshape monetary policy in the next decade',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80'
    },
    {
      id: 'opinion-2',
      author: 'Sarah Williams',
      title: 'Why Tech Stocks Are Still Overvalued',
      summary: 'Fundamental analysis reveals concerning valuations despite growth',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80'
    },
    {
      id: 'opinion-3',
      author: 'David Rodriguez',
      title: 'Climate Risk and Financial Markets',
      summary: 'Investors must account for environmental factors in portfolio decisions',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80'
      },
      {
        id: 'opinion-4',
        author: 'Priya Sharma',
        title: 'The Rise of DeFi: Opportunities and Risks',
        summary: 'Decentralized finance offers innovation but requires careful regulation',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=80&q=80'
      }
    ];

  const breakingHeadlines = [
    {
      id: 'hero-wide-1',
      time: '08:32 GMT',
      category: 'Markets',
      title: 'Coffee Index keeps climbing as roasters race to secure supply chains'
    },
    {
      id: 'hero-wide-2',
      time: '07:50 GMT',
      category: 'Trade',
      title: 'USD/ETB volatility eases after new liquidity injection from the central bank'
    },
    {
      id: 'hero-wide-3',
      time: '07:05 GMT',
      category: 'Commodities',
      title: 'Gold dips slightly while oil stays resilient ahead of OPEC+ meeting'
    },
    {
      id: 'hero-wide-4',
      time: '06:40 GMT',
      category: 'Energy',
      title: 'Renewable investors eye African infrastructure as demand for clean power surges'
    },
  ];

  return (
    <div className="homepage-container">
      <section className="lead-story-module hero-bright">
        <div className="hero-spotlight hero-card">
          <div className="hero-video-panel">
            <div className="video-card">
              <div className="live-badge">LIVE</div>
              <div className="video-frame">
                <img
                  className="hero-video-bg"
                  src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=80"
                  alt="Featured content"
                />
                <button className="play-btn" aria-label="Play featured video">
                  <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="16" r="15.25" stroke="black" strokeOpacity="0.15" strokeWidth="1.5" />
                    <path d="M14 11.5L21.5 16L14 20.5V11.5Z" fill="#0E2A47" />
                  </svg>
                </button>
              </div>
              <div className="video-copy">
                <span className="video-tag">Featured Video</span>
                <h1>Where Business, Markets & Innovation Meet Africa</h1>
                <p className="hero-subhead">Premium financial insights and market analysis for African business leaders</p>
              </div>
            </div>
          </div>
          <div className="hero-headlines">
            <div className="hero-headlines-header">
              <span>Breaking Headlines</span>
              <p>Time • Category</p>
            </div>
            {breakingHeadlines.map((headline) => (
              <article key={headline.id} className="headline-item">
                <div className="headline-meta">
                  <span className="headline-time">{headline.time}</span>
                  <span className="headline-tag">{headline.category}</span>
                </div>
                <p>{headline.title}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="platform-overview-section">
        <div className="section-heading">
          <span className="eyebrow">Platform Intelligence</span>
          <h2>Live backend configuration</h2>
          <p>Data from <code>/api/platform/overview</code> keeps the TradeXTV stack in sync.</p>
        </div>
        {platformLoading && <p className="platform-status">Loading platform data...</p>}
        {platformError && (
          <p className="platform-error">Unable to reach the backend: {platformError}</p>
        )}
        {platformOverview && (
          <>
            <div className="platform-grid categories-grid">
              {platformOverview.categories.map((category) => (
                <article key={category.id} className="overview-card">
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                </article>
              ))}
            </div>

            <div className="platform-grid pillars-grid">
              {platformOverview.featurePillars.map((pillar) => (
                <article key={pillar.id} className="overview-card pillar-card">
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                  <ul>
                    {pillar.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="platform-programs">
              {platformOverview.programs.map((program) => (
                <article key={program.title} className="overview-card program-card">
                  <h3>{program.title}</h3>
                  <p>{program.description}</p>
                </article>
              ))}
            </div>

            <div className="platform-roles">
              {platformOverview.roles.map((role) => (
                <div key={role.name} className="role-row">
                  <span className="role-name">{role.name}</span>
                  <span className="role-access">{role.access}</span>
                </div>
              ))}
            </div>
          </>
        )}
      </section>

      {/* B. Market Snapshot Row */}
      <section className="market-snapshot-row">
        <div className="responsive-grid">
          {marketSnapshots.map((snapshot) => (
            <div key={snapshot.id} className="grid-item cols-2 mobile-cols-4">
              <div className="market-card">
                <h3>{snapshot.title}</h3>
                <div className="market-data">
                  {snapshot.data.map((item, index) => (
                    <div key={index} className="market-item">
                      <div className="market-symbol">{item.symbol}</div>
                      <div className="market-value">{item.value}</div>
                      <div className={`market-change ${item.change.startsWith('+') ? 'positive' : 'negative'}`}>
                        {item.change}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="company-strip-section">
        <div className="responsive-grid">
          <div className="grid-item cols-12">
            <div className="section-header">
              <h2>Company Spotlights</h2>
              <button className="more-btn">Explore partners</button>
            </div>
          </div>
        </div>
        <div className="company-strip">
          {companySpotlights.map((company) => (
            <article key={company.id} className="company-card">
              <div className="company-logo">
                <img src={company.logo} alt={`Logo of ${company.name}`} />
              </div>
              <div className="company-info">
                <h3>{company.name}</h3>
                <p>{company.sector}</p>
                <span>{company.ticker}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* C. Topic Blocks */}
      <section className="topic-blocks">
        {topicBlocks.map((block) => (
          <div key={block.id} className="topic-block">
            <div className="responsive-grid">
              <div className="grid-item cols-12">
                <div className="section-header">
                  <h2>{block.title}</h2>
                  <button className="more-btn">More</button>
                </div>
              </div>
            </div>
            <div className="responsive-grid">
              <div className="grid-item cols-8 mobile-cols-4">
                <div className="featured-story">
                  <div className="featured-story-content">
                    <h3>{block.featuredStory.title}</h3>
                    <p>{block.featuredStory.summary}</p>
                    <div className="featured-story-meta">
                      <span className="featured-story-category">{block.featuredStory.category}</span>
                      <span className="featured-story-timestamp">{block.featuredStory.timestamp}</span>
                    </div>
                  </div>
                  <div className="featured-story-image">
                    <img src={block.featuredStory.image} alt={block.featuredStory.title} />
                  </div>
                </div>
              </div>
              <div className="grid-item cols-4 mobile-cols-4">
                <div className="small-stories-list">
                  {block.stories.map((story) => (
                    <article key={story.id} className="small-story-item">
                      <h4>{story.title}</h4>
                      <p>{story.summary}</p>
                      <div className="small-story-meta">
                        <span className="small-story-category">{story.category}</span>
                        <span className="small-story-timestamp">{story.timestamp}</span>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* D. Video / Live */}
      <section className="video-live-section">
        <div className="responsive-grid">
          <div className="grid-item cols-12">
            <div className="section-header">
              <h2>Video & Live</h2>
              <button className="more-btn">More</button>
            </div>
          </div>
        </div>
        <div className="responsive-grid">
          <div className="grid-item cols-4 mobile-cols-4">
            <div className="live-tv-tile">
              <div className="live-badge">LIVE</div>
              <h3>TradeXTV Live</h3>
              <p>Market Open: Trading Day Preview</p>
              <button className="watch-btn">▶ Watch Now</button>
            </div>
          </div>
          <div className="grid-item cols-8 mobile-cols-4">
            <div className="latest-clips">
              <div className="responsive-grid">
                {videoClips.slice(1).map((clip) => (
                  <div key={clip.id} className="grid-item cols-3 mobile-cols-4">
                    <div className="clip-card">
                      <div className="clip-thumbnail">
                        <img src={clip.thumbnail} alt={clip.title} />
                        <div className="clip-duration">{clip.duration}</div>
                        {clip.timestamp === 'Live Now' && <div className="clip-live-badge">LIVE</div>}
                      </div>
                      <h4>{clip.title}</h4>
                      <div className="clip-timestamp">{clip.timestamp}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E. Opinion + Magazine Brand */}
      <section className="opinion-magazine-section">
        <div className="responsive-grid">
          <div className="grid-item cols-12">
            <div className="section-header">
              <h2>Opinion & Magazine</h2>
              <button className="more-btn">More</button>
            </div>
          </div>
        </div>
        <div className="responsive-grid">
          <div className="grid-item cols-4 mobile-cols-4">
            <div className="opinion-section">
              <h3>Opinion</h3>
              <div className="opinion-list">
                {opinionItems.map((item) => (
                  <article key={item.id} className="opinion-item">
                    <div className="opinion-author">
                      <img src={item.avatar} alt={item.author} />
                      <div>
                        <h4>{item.author}</h4>
                        <p>{item.title}</p>
                      </div>
                    </div>
                    <p className="opinion-summary">{item.summary}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
          <div className="grid-item cols-8 mobile-cols-4">
            <div className="magazine-grid">
              <div className="magazine-header">
                <h3>Businessweek</h3>
                <p>Featured Stories</p>
              </div>
              <div className="responsive-grid">
                <div className="grid-item cols-6 mobile-cols-4">
                  <div className="magazine-card featured">
                    <img src="https://images.unsplash.com/photo-1450293595442-3c0ca8704d90?auto=format&fit=crop&w=600&q=80" alt="Magazine cover" />
                    <div className="magazine-content">
                      <h4>The New Economy: What to Expect in 2025</h4>
                      <p>Expert analysis of upcoming economic trends and opportunities</p>
                    </div>
                  </div>
                </div>
                <div className="grid-item cols-3 mobile-cols-4">
                  <div className="magazine-card">
                    <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80" alt="Magazine article" />
                    <div className="magazine-content">
                      <h5>Global Supply Chains: A New Model</h5>
                    </div>
                  </div>
                </div>
                <div className="grid-item cols-3 mobile-cols-4">
                  <div className="magazine-card">
                    <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=400&q=80" alt="Magazine article" />
                    <div className="magazine-content">
                      <h5>AI in Financial Services</h5>
                    </div>
                  </div>
                </div>
                <div className="grid-item cols-3 mobile-cols-4">
                  <div className="magazine-card">
                    <img src="https://images.unsplash.com/photo-1526304640516-5f2b2f6b300d?auto=format&fit=crop&w=400&q=80" alt="Magazine article" />
                    <div className="magazine-content">
                      <h5>Sustainable Investing Trends</h5>
                    </div>
                  </div>
                </div>
                <div className="grid-item cols-3 mobile-cols-4">
                  <div className="magazine-card">
                    <img src="https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?auto=format&fit=crop&w=400&q=80" alt="Magazine article" />
                    <div className="magazine-content">
                      <h5>Startup Funding Landscape</h5>
                    </div>
                  </div>
                </div>
                <div className="grid-item cols-3 mobile-cols-4">
                  <div className="magazine-card">
                    <img src="https://images.unsplash.com/photo-1464863979621-2588901e6f7a?auto=format&fit=crop&w=400&q=80" alt="Magazine article" />
                    <div className="magazine-content">
                      <h5>Cryptocurrency Regulation Outlook</h5>
                    </div>
                  </div>
                </div>
                <div className="grid-item cols-3 mobile-cols-4">
                  <div className="magazine-card">
                    <img src="https://images.unsplash.com/photo-1450293595442-3c0ca8704d90?auto=format&fit=crop&w=400&q=80" alt="Magazine article" />
                    <div className="magazine-content">
                      <h5>Global Trade Patterns Shift</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* F. Newsletters / Subscribe CTA */}
      <section className="newsletter-subscribe-section">
        <div className="responsive-grid">
          <div className="grid-item cols-12">
            <div className="newsletter-promo">
              <div className="newsletter-content">
                <h2>Stay Ahead of the Markets</h2>
                <p>Get our premium financial insights, market analysis, and exclusive reports delivered to your inbox daily.</p>
                <div className="newsletter-form">
                  <input type="email" placeholder="Enter your email" />
                  <button className="subscribe-cta">Subscribe Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
