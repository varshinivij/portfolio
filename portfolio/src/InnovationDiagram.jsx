// src/components/InnovationDiagram.jsx
export default function InnovationDiagram() {
  return (
    <svg className="idea-glyph" viewBox="0 0 320 320" role="img" aria-label="" focusable="false">
      <defs>
        <radialGradient id="glow" cx="50%" cy="50%">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.45" />
          <stop offset="60%" stopColor="var(--accent)" stopOpacity="0.12" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>
        <filter id="soft"><feGaussianBlur in="SourceGraphic" stdDeviation="2" /></filter>
      </defs>

      <circle cx="160" cy="160" r="110" fill="url(#glow)" />

      {[[80,140],[120,80],[210,95],[240,160],[180,205],[110,210],[75,185],[150,140],[200,145]]
        .map(([x,y],i)=>(
          <g key={i} className={`node node-${i}`}>
            <circle cx={x} cy={y} r="5.5" />
            <circle cx={x} cy={y} r="12" className="halo" />
          </g>
      ))}

      <g className="edges" filter="url(#soft)">
        {[[80,140,120,80],[120,80,210,95],[210,95,240,160],[240,160,180,205],[180,205,110,210],
          [110,210,75,185],[75,185,80,140],[150,140,200,145],[150,140,110,210],[200,145,180,205]]
          .map(([x1,y1,x2,y2],i)=>(
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}/>
        ))}
      </g>

      <circle className="spark" cx="160" cy="120" r="2.5" />
    </svg>
  );
}
