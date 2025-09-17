import { useRef, useState, useEffect } from "react";

function ProjCard({ title, href, image, description }) {
  return (
    <article className="proj-card" aria-label={title}>
      <header className="proj-card__header">
        <h3 className="proj-card__title">{title}</h3>
        {href && (
          <a
            className="proj-card__arrow"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${title}`}
            title={`Open ${title}`}
          >
            ↗
          </a>
        )}
      </header>

      <div className="proj-card__media">
        <img src={image} alt={title} loading="lazy" />
      </div>

      <p className="proj-card__desc">{description}</p>
    </article>
  );
}

export default function Projects() {
  // Add/adjust your projects here.
  const projects = [
    {
      title: "OLAF: CLI Tool for Bioinformatics",
      href: "https://github.com/OpenTechBio/Olaf",
      image: "/assets/proj-1.png",
      description: "Achieved 20% error reduction with RAG; developed a CLI tool that iteratively improves bioinformatics code w/ Docker/Singularity.",
    },
    {
      title: "PCOSitive AI Assistant",
      href: "https://pcos-positive-app.vercel.app/",
      image: "/assets/proj-2.png",
      description: "15k+ in funding. Reached 85% projected satisfaction with an AI-powered assistant using SVD++ recommendation and fine-tuned BERT sentiment analysis.",
    },
    {
      title: "Zotbotics Website & Auth System",
      href: "http://zotbotics-uci.github.io/", // replace with real link if you want
      image: "/assets/proj-3.png",
      description: "Built club website and authentication system with SQL DB + custom STL hasher, securing data for 1000+ use cases.",
    },
    {
      title: "Utility Patent – Communication System for Deaf Athletes",
      href: "https://patents.google.com/patent/US20240416212A1/en?oq=US+20240416212+A1",
      image: "/assets/proj-4.png",
      description: "Secured US Patent (US 20240416212 A1) and won $10K Lemelson MIT grant for a communication system for deaf basketball athletes.",
    },
    {
      title: "Tic-Tac-Toe with Reinforcement Learning",
      href: "https://github.com/varshinivij/tic-tac-toe-rl",
      image: "/assets/proj-5.png",
      description: "Built with 3 reinforcement learning methods (Q-Learning, DQN, MCTS) and deployed with FastAPI + React.",
    },
  ];


  const trackRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  // Update arrow enable/disable on scroll/resize
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const update = () => {
      const { scrollLeft, scrollWidth, clientWidth } = el;
      setAtStart(scrollLeft <= 2);
      setAtEnd(scrollLeft + clientWidth >= scrollWidth - 2);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollByView = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const amount = el.clientWidth; // show 2 at a time → jump by one "view"
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section id="projects" className="projects-section">
      <header className="section-head">
        <h2>Projects</h2>
      </header>
      <div className="carousel">
        <button
          className="carousel-btn prev"
          onClick={() => scrollByView(-1)}
          disabled={atStart}
          aria-label="Previous projects"
        >
          ‹
        </button>

        <div className="carousel-track" ref={trackRef}>
          {projects.map((p, i) => (
            <ProjCard
              key={i}
              title={p.title}
              href={p.href}
              image={p.image}
              description={p.description}
            />
          ))}
        </div>

        <button
          className="carousel-btn next"
          onClick={() => scrollByView(1)}
          disabled={atEnd}
          aria-label="Next projects"
        >
          ›
        </button>

        {/* subtle edge fades to hint scroll */}
        <div className="carousel-fade left" aria-hidden="true"></div>
        <div className="carousel-fade right" aria-hidden="true"></div>
      </div>
    </section>
  );
}
