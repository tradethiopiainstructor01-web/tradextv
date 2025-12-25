type CategoryCardProps = {
  title: string;
  description: string;
};

export default function CategoryCard({ title, description }: CategoryCardProps) {
  return (
    <article className="category-card">
      <span className="chip">{title}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
