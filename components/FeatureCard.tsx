type FeatureCardProps = {
  icon: string;
  title: string;
  copy: string;
};

export function FeatureCard({ icon, title, copy }: FeatureCardProps) {
  return (
    <article className="card">
      <span className="icon-badge" aria-hidden="true">{icon}</span>
      <h3>{title}</h3>
      <p>{copy}</p>
    </article>
  );
}
