import InnovationDiagram from "./InnovationDiagram.jsx";

export default function About(){
  return (
    <section className="about-section">
      <div className="about-wrap">
        <div className="about-copy">
          <h1>Varshini Vijay</h1>
          <div className="about-divider" aria-hidden="true"></div>
          <p>
            In pursuit of innovation — driving equitable solutions that reinvent, enhance, and rectify existing systems.
            Building a strong technical foundation with a deep understanding of the mathematical principles that underpin them.
            Small steps, repeated, create change.
          </p>
        </div>

        <div className="about-visual" aria-hidden="true">
          <InnovationDiagram />
        </div>
      </div>

      {/* thin hairline to separate About and Projects, no label */}
      <div className="section-divider" aria-hidden="true">
        <div className="rule">
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </section>
  );
}
