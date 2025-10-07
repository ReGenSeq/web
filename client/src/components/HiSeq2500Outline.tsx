export function HiSeq2500Outline() {
  return (
    <svg
      viewBox="0 0 800 600"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main instrument cabinet */}
      <rect
        x="100"
        y="150"
        width="400"
        height="400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        rx="8"
      />
      
      {/* Base platform */}
      <rect
        x="80"
        y="540"
        width="440"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        rx="4"
      />
      
      {/* Front panel */}
      <rect
        x="120"
        y="180"
        width="360"
        height="80"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        rx="4"
      />
      
      {/* Ventilation grills - top */}
      <g>
        {[...Array(8)].map((_, i) => (
          <line
            key={`vent-top-${i}`}
            x1={140 + i * 40}
            y1="190"
            x2={140 + i * 40}
            y2="250"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.6"
          />
        ))}
      </g>
      
      {/* Control panel display */}
      <rect
        x="140"
        y="280"
        width="120"
        height="80"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        rx="3"
      />
      
      {/* Display screen indicator */}
      <rect
        x="150"
        y="290"
        width="100"
        height="60"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.4"
      />
      
      {/* Control buttons */}
      <g>
        {[0, 1, 2].map((i) => (
          <circle
            key={`button-${i}`}
            cx={280 + i * 30}
            cy="320"
            r="8"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        ))}
      </g>
      
      {/* Flow cell chamber indicator */}
      <rect
        x="140"
        y="380"
        width="320"
        height="80"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        rx="4"
      />
      
      {/* Flow cell slots */}
      <g>
        <rect
          x="180"
          y="400"
          width="100"
          height="40"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          rx="2"
        />
        <rect
          x="320"
          y="400"
          width="100"
          height="40"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          rx="2"
        />
      </g>
      
      {/* Side panel details */}
      <line
        x1="500"
        y1="200"
        x2="500"
        y2="540"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.3"
      />
      
      {/* Ventilation slots - side */}
      <g>
        {[...Array(6)].map((_, i) => (
          <line
            key={`vent-side-${i}`}
            x1="120"
            y1={480 + i * 10}
            x2="180"
            y2={480 + i * 10}
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.4"
          />
        ))}
      </g>
      
      {/* Monitor arm mount */}
      <rect
        x="480"
        y="250"
        width="30"
        height="200"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        rx="4"
      />
      
      {/* Monitor arm */}
      <line
        x1="510"
        y1="300"
        x2="580"
        y2="250"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      
      <line
        x1="580"
        y1="250"
        x2="650"
        y2="250"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      
      {/* Monitor screen */}
      <rect
        x="550"
        y="120"
        width="180"
        height="140"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        rx="6"
      />
      
      {/* Monitor display area */}
      <rect
        x="565"
        y="135"
        width="150"
        height="110"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.4"
      />
      
      {/* Monitor base/stand */}
      <rect
        x="620"
        y="260"
        width="40"
        height="10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        rx="2"
      />
      
      {/* Logo area placeholder */}
      <text
        x="300"
        y="220"
        fontFamily="sans-serif"
        fontSize="24"
        fontWeight="bold"
        fill="currentColor"
        textAnchor="middle"
        opacity="0.5"
      >
        HiSeq 2500
      </text>
      
      {/* Power indicator */}
      <circle
        cx="460"
        cy="200"
        r="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      
      {/* USB/Port indicators */}
      <g>
        {[0, 1].map((i) => (
          <rect
            key={`port-${i}`}
            x={400 + i * 25}
            y="510"
            width="15"
            height="8"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            rx="1"
          />
        ))}
      </g>
    </svg>
  );
}
