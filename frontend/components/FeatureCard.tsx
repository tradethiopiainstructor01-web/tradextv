type FeatureCardProps = {
  title: string;
  description: string;
  points: string[];
};

export default function FeatureCard({ title, description, points }: FeatureCardProps) {
  return (
    <article className="feature-card">
      <span className="chip">Core Pillar</span>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </article>
  );
}
