import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://app.noshareofcost.com'),
  title: 'NSOC Estimator | California Medi-Cal Share of Cost Estimate App',
  description:
    'Use the NSOC Estimator to estimate your California Medi-Cal Share of Cost, understand possible deductions, and request a benefits review.',
  openGraph: {
    title: 'NSOC Estimator | California Medi-Cal Share of Cost Estimate App',
    description:
      'Use the NSOC Estimator to estimate your California Medi-Cal Share of Cost, understand possible deductions, and request a benefits review.',
    images: [
      {
        url: '/screenshots/welcome-screen.svg',
        width: 1170,
        height: 2532,
        alt: 'NSOC Estimator welcome screen preview'
      }
    ]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body><a className="skip-link" href="#main-content">Skip to main content</a>{children}</body>
    </html>
  );
}
