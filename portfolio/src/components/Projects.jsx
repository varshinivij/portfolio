function ProjCard({ source, description }){
  return (
    <article className="card">
      <div className="card-media">
        <img src={source} alt={description} loading="lazy" />
      </div>
      <h2 className="card-title">{description}</h2>
    </article>
  );
}

export default function Projects() {
  return (
    <section className="projects-section">
      <div className="projects-grid">
        <ProjCard source="src/assets/projects/proj-1.png" description="ZIMS Website" />
        <ProjCard source="src/assets/projects/proj-2.png" description="Self-controlling robot" />
        <ProjCard source="src/assets/projects/proj-3.png" description="OLAF:CLI tool for bioinformatics" />
      </div>
    </section>
  );
}
