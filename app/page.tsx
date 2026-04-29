import { Hero } from '@/components/Hero';
import { FeatureCard } from '@/components/FeatureCard';
import { HowItWorks } from '@/components/HowItWorks';
import { PrivacySection } from '@/components/PrivacySection';
import { DisclaimerCard } from '@/components/DisclaimerCard';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';
import { ScreenshotMockup } from '@/components/ScreenshotMockup';
import { Screenshot } from '@/components/types';

const screenshots: Screenshot[] = [
  { id: 'welcome', src: '/screenshots/welcome-screen.svg', alt: 'Welcome screen in NSOC Estimator app', caption: 'Welcome screen' },
  { id: 'household', src: '/screenshots/household-screen.svg', alt: 'Household size and benefit year selection screen', caption: 'Household setup' },
  { id: 'income', src: '/screenshots/income-screen.svg', alt: 'Monthly income entry screen', caption: 'Income details' },
  { id: 'medical-costs', src: '/screenshots/medical-costs-screen.svg', alt: 'Medical costs entry screen', caption: 'Medical costs' },
  { id: 'results', src: '/screenshots/results-screen.svg', alt: 'Estimate results summary screen', caption: 'Estimated result' },
  { id: 'review-modal', src: '/screenshots/review-contact-modal.svg', alt: 'Review request and contact modal screen', caption: 'Request review modal' }
];

export default function HomePage() {
  return (
    <main id="main-content">
      <Hero />

      <section aria-labelledby="benefits-heading">
        <h2 id="benefits-heading">What the App Helps With</h2>
        <div className="grid-4">
          <FeatureCard icon="📊" title="Estimate monthly Share of Cost" copy="Quickly estimate your possible monthly amount based on household and income inputs." />
          <FeatureCard icon="🧾" title="Understand deduction impact" copy="See how allowable medical expenses may adjust your estimate." />
          <FeatureCard icon="🏥" title="Plan for care costs" copy="Review how care-related expenses can influence your out-of-pocket planning." />
          <FeatureCard icon="🤝" title="Request specialist review" copy="Share your estimate with a benefits specialist when you are ready for support." />
        </div>
      </section>

      <HowItWorks screenshots={screenshots} />

      <section aria-labelledby="showcase-heading">
        <h2 id="showcase-heading">Screenshot Showcase</h2>
        <div className="showcase-grid">
          {screenshots.map((shot) => (
            <ScreenshotMockup key={shot.id} src={shot.src} alt={shot.alt} caption={shot.caption} />
          ))}
        </div>
      </section>

      <PrivacySection />
      <DisclaimerCard />

      <section aria-labelledby="audience-heading">
        <h2 id="audience-heading">Who This Is For</h2>
        <div className="grid-5">
          {['California seniors', 'Family caregivers', 'Adults helping a parent or loved one', 'People paying out-of-pocket for care', 'Community-based Medi-Cal applicants'].map((person) => (
            <article className="card" key={person}><h3>{person}</h3></article>
          ))}
        </div>
        <p className="note">For community-based Medi-Cal programs only. Long-Term Care cases may use different rules.</p>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
