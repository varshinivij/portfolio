// src/components/Projects.jsx
import { useState, useEffect } from "react";

function ProjCard(props){
  return (
    <article className="card" tabIndex={0}>
      <div className="card-media">
        <img src={props.source} alt={props.description} loading="lazy" />
      </div>
      <h2 className="card-title">{props.description}</h2>
    </article>
  );
}

export default function Projects() {
  return (
    <section className="projects-section">
      <div className="projects-grid">
        <ProjCard source="assets/projects/proj-1" description="ZIMS Website"/>
        <ProjCard source="assets/projects/proj-2" description="Self-controlling robot"/>
        <ProjCard source="assets/projects/proj-3" description="OLAF:CLI tool for bioinformatics"/>
      </div>
    </section>
  );
}
