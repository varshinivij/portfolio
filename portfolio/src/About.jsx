// src/components/About.jsx
import InnovationDiagram from "./InnovationDiagram";

export default function About(){
  return (
    <section className="about-section">
      <div className="about-wrap">
        <div className="about-copy">
          <h1> Varshini Vijay </h1>
          <p>
            In pursuit of innovation — driving equitable solutions that reinvent, enhance, and rectify existing systems. Building a strong technical foundation with a deep understanding of the mathematical principles that underpin them. Small steps, repeated, create change.
          </p>
        </div>

        {/* purely decorative visual */}
        <div className="about-visual" aria-hidden="true">
          <InnovationDiagram />
        </div>
      </div>
    </section>
  );
}
