# TradeXTV Platform Blueprint

## Brand Positioning
- Business · Startups · Trade · Innovation · Media
- Purpose-built streaming and editorial brand that educates, promotes, and connects startups, trade professionals, and creators across Africa and beyond.
- Companion to TradeEthiopia, extending its B2B ecosystem into media, education, and promotion.

## Core Architecture
1. **Frontend (Next.js)**
   - SEO-optimized Next.js pages powered by Tailwind CSS or Chakra UI.
   - Media player integration via Video.js or Shaka Player.
   - State managed through Redux Toolkit or Zustand with JWT + role-aware auth flows.
2. **Backend (Node.js + Express)**
   - REST API for phase 1 plus GraphQL readiness for phase 2.
   - MongoDB Atlas persistence with models/controllers under `backend/src`.
   - Media uploads via signed URLs to AWS S3 or Cloudflare R2.
3. **Infrastructure**
   - Frontend on AWS Amplify or Vercel, backend on App Runner or Render, CDN via CloudFront or Cloudflare.
   - Phase 1: On-demand (VOD), Phase 2: Live streaming powered by AWS IVS or Mux.

## Platform Feature Pillars
1. **Public Website**
   - Landing sections for featured shows, trending, and key categories such as Startups, Trade & Export, Business News, Interviews, and Documentaries.
   - Static pages for About TradeXTV and Contact & Partnerships.
2. **Streaming & Media**
   - Creator-driven uploads, series/episode structure, watch progress, likes/views/comments, channel subscriptions.
3. **Creator Studio**
   - Creator roles with tools for uploads, shows, analytics, monetization readiness, and multi-role workflows (Admin, Producer, Host, Editor, Guest).
4. **Business & Startup Programs**
   - Sections for pitch shows, founder interviews, training, trade education, incubator content aligned with TradeEthiopia.
5. **Promotion & Campaigns**
   - Sponsored videos, featured business promos, banner/video ads, and TradeEthiopia cross-promotion.
6. **Admin Dashboard**
   - Content approvals, creator management, category/show curation, homepage layout controls, analytics, and ad management.

## Roles & Permissions
| Role     | Access                                                                           |
|----------|----------------------------------------------------------------------------------|
| Viewer   | Watch, comment, subscribe                                                        |
| Creator  | Upload and manage owned content                                                  |
| Producer | Curate shows/episodes, coordinate releases                                      |
| Admin    | Full control (users, content, layout, analytics, ads)                           |
| Partner  | Access for sponsored content and promotions                                     |

## MongoDB Core Models
- **User** – centralized auth, profile, and role metadata (Viewer / Creator / Producer / Admin / Partner).
- **CreatorProfile** – creator-specific metadata, monetization settings, linked analytics, and channel configuration.
- **Video** – metadata, category, signed-media references, watch progress, and analytics hooks.
- **Series** – grouping for shows, seasons, and episodes along with featured show metadata.
- **Category** – editorial taxonomy that feeds the frontend homepage and filters.
- **Comment** – viewer engagement with moderation flags and threaded replies.
- **ViewHistory** – watch progress, last-watched timestamp, and device/session info for personalization.
- **Promotion** – sponsored videos, banners, campaign scheduling, and payment metadata.
- **Analytics** – aggregated metrics (views, watch time, engagement) for dashboards and creator insights.

## Next Steps
- Build out Next.js landing pages following the category/feature map.
- Wire up backend with REST scaffolding and the backend folder convention.
- Document auth flows and channel ownership with shared constants under `shared/constants`.
