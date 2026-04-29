import { Screenshot } from './types';
import { ScreenshotMockup } from './ScreenshotMockup';

type HowItWorksProps = {
  screenshots: Screenshot[];
};

const stepKeys = ['household', 'income', 'medical-costs', 'results'];

const stepText = [
  'Select household size and benefit year',
  'Enter monthly income',
  'Add allowable medical costs',
  'Review your estimate and request help'
];

export function HowItWorks({ screenshots }: HowItWorksProps) {
  const stepShots = stepKeys.map((key) => screenshots.find((s) => s.id === key)).filter(Boolean) as Screenshot[];

  return (
    <section aria-labelledby="how-it-works-heading">
      <h2 id="how-it-works-heading">How It Works</h2>
      <ol className="steps">
        {stepText.map((step, index) => (
          <li key={step}>
            <div>
              <span className="step-num">{index + 1}</span>
              <p>{step}</p>
            </div>
            {stepShots[index] ? <ScreenshotMockup src={stepShots[index].src} alt={stepShots[index].alt} caption={stepShots[index].caption} /> : null}
          </li>
        ))}
      </ol>
    </section>
  );
}
