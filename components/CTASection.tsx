export function CTASection() {
  return (
    <section className="cta" aria-labelledby="cta-heading">
      <h2 id="cta-heading">Need help understanding your estimate?</h2>
      <p>Our team can review your situation and help you understand next steps.</p>
      <div className="button-row">
        {/* TODO: Replace with final contact/booking URL. */}
        <a className="btn btn-secondary" href="/contact">Request Eligibility Review</a>
        {/* TODO: Replace with production support line. */}
        <a className="btn btn-green" href="tel:+1XXXXXXXXXX">Call for Help</a>
      </div>
    </section>
  );
}
