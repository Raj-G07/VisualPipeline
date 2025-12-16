export const EdgeDefs = () => (
  <defs>
    <linearGradient id="edge-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="oklch(0.46 0.07 98)" stopOpacity="0.6" />
      <stop offset="100%" stopColor="oklch(0.82 0.03 96)" stopOpacity="0.8" />
    </linearGradient>

    <marker
      id="edge-arrow-chevron"
      viewBox="0 0 12 12"
      refX="6"
      refY="7"
      markerWidth="10"
      markerHeight="10"
      markerUnits="strokeWidth"
    >
      <polyline
        points="2,2 10,6 2,10"
        fill="none"
        stroke="#b6a5a5ff"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </marker>
  </defs>
);
