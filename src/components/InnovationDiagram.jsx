// 3–4–4–3 neural network:
// - vertical spacing uses a fixed step around center (so 3 < 4 height)
// - forward light: red (L0) → green (L1) → blue (L2) → blue (L3 pulse)
// - backward light: orange (L3) → purple (L2) → pink (L1)
// - white spark travels L→R then R→L along the columns

export default function InnovationDiagram() {
  // column x positions
  const cols = [
    { x: 40,  count: 3 },   // L0
    { x: 130, count: 4 },   // L1
    { x: 220, count: 4 },   // L2
    { x: 310, count: 3 },   // L3
  ];

  // fixed-step placement around a shared vertical center
  const centerY = 160;
  const stepY = 45; // distance between neighbors
  const yPositions = (count) => {
    if (count === 1) return [centerY];
    const start = centerY - ((count - 1) / 2) * stepY;
    return Array.from({ length: count }, (_, i) => start + i * stepY);
  };

  // nodes per column
  const nodes = cols.map((c, ci) =>
    yPositions(c.count).map((y) => ({ x: c.x, y, col: ci }))
  );

  // forward edge groups (0->1, 1->2, 2->3)
  const forwardEdges = [];
  for (let c = 0; c < nodes.length - 1; c++) {
    const group = [];
    for (const a of nodes[c]) for (const b of nodes[c + 1]) group.push([a.x, a.y, b.x, b.y]);
    forwardEdges.push({ colPair: c, lines: group });
  }

  return (
    <svg className="nn-glyph" viewBox="0 0 350 320" role="img" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="nnGlow" cx="52%" cy="50%">
          <stop offset="0%" stopColor="var(--f2)" stopOpacity="0.20" />
          <stop offset="70%" stopColor="var(--f2)" stopOpacity="0.06" />
          <stop offset="100%" stopColor="var(--f2)" stopOpacity="0" />
        </radialGradient>
        <filter id="soft"><feGaussianBlur in="SourceGraphic" stdDeviation="2" /></filter>
      </defs>

      {/* ambient glow */}
      <ellipse cx="175" cy={centerY} rx="165" ry="125" fill="url(#nnGlow)" />

      {/* base dim edges */}
      <g filter="url(#soft)" stroke="#1f1f1f" strokeWidth="1.2" strokeLinecap="round" opacity="0.35">
        {forwardEdges.flatMap(g => g.lines).map(([x1,y1,x2,y2], i) => (
          <line key={`base-${i}`} x1={x1} y1={y1} x2={x2} y2={y2}/>
        ))}
      </g>

      {/* forward color edges (RGB + output pulse) */}
      {forwardEdges.map((g, i) => (
        <g key={`f-${i}`} className={`nn-edges F${i}`} style={{ color: `var(--f${i})` }} filter="url(#soft)">
          {g.lines.map(([x1,y1,x2,y2], j) => (
            <line key={`fe-${i}-${j}`} x1={x1} y1={y1} x2={x2} y2={y2}/>
          ))}
        </g>
      ))}
      {/* output extra pulse for readability */}
      <g className="nn-edges F3" style={{ color: 'var(--f3)' }} filter="url(#soft)">
        {nodes[3].map((b, j) => {
          const a = nodes[2][j % nodes[2].length];
          return <line key={`fo-${j}`} x1={a.x} y1={a.y} x2={b.x} y2={b.y}/>;
        })}
      </g>

      {/* backprop edges (orange → purple → pink) */}
      <g className="nn-edges B3" style={{ color: 'var(--b0)' }} filter="url(#soft)">
        {forwardEdges[2].lines.map(([x1,y1,x2,y2], j) => <line key={`b3-${j}`} x1={x1} y1={y1} x2={x2} y2={y2}/>)}
      </g>
      <g className="nn-edges B2" style={{ color: 'var(--b1)' }} filter="url(#soft)">
        {forwardEdges[1].lines.map(([x1,y1,x2,y2], j) => <line key={`b2-${j}`} x1={x1} y1={y1} x2={x2} y2={y2}/>)}
      </g>
      <g className="nn-edges B1" style={{ color: 'var(--b2)' }} filter="url(#soft)">
        {forwardEdges[0].lines.map(([x1,y1,x2,y2], j) => <line key={`b1-${j}`} x1={x1} y1={y1} x2={x2} y2={y2}/>)}
      </g>

      {/* base nodes */}
      {nodes.flat().map((n, i) => (
        <circle key={`base-node-${i}`} className="nn-base" cx={n.x} cy={n.y} r="6" />
      ))}

      {/* forward node pulse (RGB) */}
      {nodes.map((col, ci) =>
        col.map((n, j) => (
          <g key={`nf-${ci}-${j}`} className={`nn-nodeF L${ci}`} style={{ color: `var(--f${ci})` }}>
            <circle className="nn-core" cx={n.x} cy={n.y} r="6" />
            <circle className="nn-halo" cx={n.x} cy={n.y} r="12" />
          </g>
        ))
      )}

      {/* backprop node pulse (orange→purple→pink) for L3/L2/L1 */}
      {nodes.map((col, ci) =>
        ci > 0
          ? col.map((n, j) => (
              <g key={`nb-${ci}-${j}`} className={`nn-nodeB L${ci}`}>
                <circle className="nn-core" cx={n.x} cy={n.y} r="6" />
                <circle className="nn-halo" cx={n.x} cy={n.y} r="12" />
              </g>
            ))
          : null
      )}

      {/* spark path across column centers and back (follows the timing loop) */}
      <path
        id="sparkPath"
        d={`M ${cols[0].x} ${centerY} 
           L ${cols[1].x} ${centerY} 
           L ${cols[2].x} ${centerY} 
           L ${cols[3].x} ${centerY} 
           L ${cols[2].x} ${centerY} 
           L ${cols[1].x} ${centerY} 
           L ${cols[0].x} ${centerY}`}
        fill="none"
        stroke="none"
      />
    </svg>
  );
}
