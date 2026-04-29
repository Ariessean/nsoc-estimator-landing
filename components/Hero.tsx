import { ScreenshotMockup } from './ScreenshotMockup';

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div>
        <p className="eyebrow">No Share of Cost · California Medi-Cal Estimator</p>
        <h1 id="hero-heading">Estimate Your Medi-Cal Share of Cost in Minutes</h1>
        <p className="subhead">
          A simple California Medi-Cal estimator that helps you understand your possible Share of Cost before speaking with a benefits specialist.
        </p>
        <div className="button-row">
          {/* TODO: Replace with final app/store URL. */}
          <a className="btn btn-primary" href="/estimate">Start Estimate</a>
          {/* TODO: Replace with final contact/booking URL. */}
          <a className="btn btn-secondary" href="/contact">Request Eligibility Review</a>
        </div>
        <p className="trust-text">Estimate only. Final eligibility and Share of Cost are determined by your county.</p>
      </div>
      <ScreenshotMockup src="/screenshots/welcome-screen.svg" alt="NSOC Estimator welcome screen" priority />
    </section>
  );
}
