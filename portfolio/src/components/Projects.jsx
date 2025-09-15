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
      title: "ZIMS Website",
      href: "https://example.com/zims", // put your link
      image: ".public/assets/proj-1.png",
      description: "A modern web portal for ZIMS with streamlined UX and robust backend.",
    },
    {
      title: "Self-controlling robot",
      href: "https://example.com/robot", // put your link
      image: "public/assets/proj-2.png",
      description: "Autonomous rover with sensor fusion and PID control.",
    },
    {
      title: "OLAF: CLI tool for bioinformatics",
      href: "https://example.com/olaf", // put your link
      image: "public/assets/proj-3.png",
      description: "Command-line suite for fast sequence analysis and pipelines.",
    },
    // add more objects to show more slides
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
