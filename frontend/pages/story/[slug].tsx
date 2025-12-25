import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const StoryPage: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className="page-wrapper">
      <section className="section-block story-hero">
        <p className="hero-kicker">Story {slug || 'detail'}</p>
        <h1>TradeXTV long-form spotlight</h1>
        <p className="hero-subhead">Deep dive with visuals, transcripts, and partner context.</p>
      </section>

      <section className="section-block story-body">
        <div className="story-video" />
        <div className="story-text">
          <h2>Episode synopsis</h2>
          <p>
            This story follows TradeEthiopia-backed founders navigating export corridors, balancing supply chain intelligence,
            and sharing lessons from premium partnerships.
          </p>
          <p>
            Use the dashboard and commands to flag quotes, add to watchlist, or share directly with creator partners.
          </p>
        </div>
      </section>
    </div>
  );
};

export default StoryPage;
