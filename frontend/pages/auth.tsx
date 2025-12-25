import type { NextPage } from 'next';

const interests = ['Startups', 'Finance', 'Export', 'Tech', 'Creator Tools', 'Trade Policy'];
const roles = ['Viewer', 'Creator', 'Business'];

const AuthPage: NextPage = () => (
  <div className="page-wrapper auth-page">
    <section className="section-block auth-hero">
      <div>
        <p className="hero-kicker">TradeXTV access</p>
        <h1>Login or register to unlock curated recommendations.</h1>
        <p className="dashboard-subhead">
          Choose your interests and role to tune a dashboard-first experience, curated playlists, and content notifications.
        </p>
      </div>
    </section>

    <section className="auth-forms">
      <article className="auth-card">
        <h2>Login</h2>
        <p className="meta-label">Returning to TradeXTV? Enter your credentials.</p>
        <form className="auth-form">
          <label>
            Email
            <input type="email" placeholder="you@tradextv.com" />
          </label>
          <label>
            Password
            <input type="password" placeholder="••••••••" />
          </label>
          <button type="button" className="primary-btn">
            Log in
          </button>
        </form>
      </article>

      <article className="auth-card">
        <h2>Register</h2>
        <p className="meta-label">New to TradeXTV? Build your profile in seconds.</p>
        <form className="auth-form">
          <label>
            Full name
            <input type="text" placeholder="Name" />
          </label>
          <label>
            Email
            <input type="email" placeholder="you@tradextv.com" />
          </label>
          <label>
            Password
            <input type="password" placeholder="Choose a secure password" />
          </label>

          <div className="interest-block">
            <p>Choose interests</p>
            <div className="interest-grid">
              {interests.map((interest) => (
                <label className="interest-pill" key={interest}>
                  <input type="checkbox" name="interests" value={interest} />
                  <span>{interest}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="role-block">
            <p>Role selection</p>
            <div className="role-grid">
              {roles.map((role) => (
                <label key={role}>
                  <input type="radio" name="role" value={role} defaultChecked={role === 'Viewer'} />
                  <span>{role}</span>
                </label>
              ))}
            </div>
          </div>

          <button type="button" className="secondary-btn full-width">
            Register
          </button>
        </form>
      </article>
    </section>
  </div>
);

export default AuthPage;
