const STACK = [
  {
    group: "Languages",
    items: [
      "Python",
      "C/C++",
      "JavaScript",
      "R",
      "HTML",
      "CSS",
      "MIPS Assembly",
    ],
  },
  {
    group: "Frameworks & Libraries",
    items: [
      "React.js",
      "Redux.js",
      "Flask",
      "Tailwind CSS",
      "Material UI",
      "Flutter",
      "FastAPI",
      "PyTorch",
      "TensorFlow",
      "Node.js",
      "ChromaDB"
    ],
  },
  {
    group: "Tools & Platforms",
    items: [
      "Linux/Ubuntu",
      "Docker",
      "Singularity",
      "AWS Cloud",
      "Git",
      "VS Code"
    ],
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="stack-section" aria-labelledby="stack-title">
      <header className="section-head">
        <h2>Tech Stack</h2>
        <p className="stack-sub">The tools I reach for most often across research, product, and build work.</p>
      </header>

      <div className="stack-wrap">
        <div className="stack-groups">
          {STACK.map(({ group, items }) => (
            <section key={group} className="stack-group" aria-label={group}>
              <h3>{group}</h3>
              <ul className="stack-badges">
                {items.map((t) => (
                  <li key={t} className="stack-badge">
                    {t}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}