// Edit the arrays below with your actual stack.
// Keep labels short; the design will wrap them nicely.

const STACK = [
  {
    group: "Languages",
    items: [
      "Python",
      "JavaScript",
      "TypeScript",
      "C/C++",
      "Java",
      "SQL",
      "MATLAB",
    ],
  },
  {
    group: "Frameworks & Libraries",
    items: [
      "React",
      "Node.js",
      "Express",
      "Vite",
      "NumPy",
      "Pandas",
      "Tailwind",
    ],
  },
  {
    group: "Tools & Platforms",
    items: [
      "Git",
      "Linux",
      "Docker",
      "AWS",
      "Firebase",
      "PostgreSQL",
      "VS Code",
    ],
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="stack-section" aria-labelledby="stack-title">
      <header className="section-head">
        <h2>Tech Stack</h2>
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

        <div className="section-divider" aria-hidden="true">
          <div className="line"></div>
        </div>
      </div>
    </section>
  );
}