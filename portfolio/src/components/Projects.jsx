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
    <section id="projects" className="projects-section">
      <div className="projects-grid">
        <ProjCard source="/assets/projects/proj-3.jpg" description="ZIMS Website" />
        <ProjCard source="/assets/projects/proj-2.jpg" description="Self-controlling robot" />
        <ProjCard source="/assets/projects/proj-1.jpg" description="OLAF:CLI tool for bioinformatics" />
      </div>
    </section>
  );
}
