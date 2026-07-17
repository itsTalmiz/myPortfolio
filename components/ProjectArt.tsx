'use client';

import { useId } from 'react';

// Hand-built line-art illustrations for projects that have no real photo.
// Theme-aware: uses currentColor / CSS variables so they adapt to light & dark mode
// automatically, matching the Signal Dark/Light palette instead of a static asset.

const wrapperClass = 'w-full h-full';
const gridFill = 'hsl(var(--foreground) / 0.06)';
const lineColor = 'hsl(var(--foreground) / 0.25)';
const accent = '#10b981';
const accent2 = '#38bdf8';

function Frame({ children }: { children: React.ReactNode }) {
  const patternId = `art-dots-${useId()}`;
  return (
    <svg viewBox="0 0 400 200" className={wrapperClass} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id={patternId} width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill={gridFill} />
        </pattern>
      </defs>
      <rect width="400" height="200" fill={`url(#${patternId})`} />
      {children}
    </svg>
  );
}

export function FpgaConvolutionArt() {
  return (
    <Frame>
      {/* source pixel grid */}
      {[0, 1, 2].map((r) =>
        [0, 1, 2].map((c) => (
          <rect
            key={`s${r}${c}`}
            x={60 + c * 22}
            y={70 + r * 22}
            width={18}
            height={18}
            rx={2}
            fill={r === 1 && c === 1 ? accent : 'hsl(var(--foreground) / 0.12)'}
          />
        ))
      )}
      {/* arrow */}
      <path d="M150 100 H190" stroke={lineColor} strokeWidth={2} />
      <path d="M184 94 L192 100 L184 106" stroke={lineColor} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      {/* kernel matrix */}
      <rect x="205" y="75" width="60" height="50" rx="6" stroke={accent} strokeWidth={1.5} />
      {[0, 1, 2].map((r) =>
        [0, 1, 2].map((c) => (
          <circle key={`k${r}${c}`} cx={215 + c * 20} cy={85 + r * 15} r={2} fill={accent} opacity={0.7} />
        ))
      )}
      {/* arrow */}
      <path d="M270 100 H310" stroke={lineColor} strokeWidth={2} />
      <path d="M304 94 L312 100 L304 106" stroke={lineColor} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      {/* output pixel grid */}
      {[0, 1, 2].map((r) =>
        [0, 1, 2].map((c) => (
          <rect key={`o${r}${c}`} x={320 + c * 20} y={70 + r * 20} width={16} height={16} rx={2} fill={accent2} opacity={0.5} />
        ))
      )}
      <text x="200" y="165" textAnchor="middle" fontSize="11" fill="hsl(var(--muted-foreground))" fontFamily="monospace">
        VERILOG · XILINX FPGA · VGA OUT
      </text>
    </Frame>
  );
}

export function DecimalCounterArt() {
  const seg = (x: number) => (
    <g key={x} transform={`translate(${x},0)`}>
      <rect x="0" y="60" width="34" height="80" rx="4" fill="hsl(var(--foreground) / 0.06)" stroke={lineColor} strokeWidth={1.5} />
      {/* 7-segment strokes */}
      <path
        d="M6 66 H28 M6 100 H28 M6 134 H28 M6 66 V100 M28 66 V100 M6 100 V134 M28 100 V134"
        stroke={accent}
        strokeWidth={3}
        strokeLinecap="round"
        opacity={0.85}
      />
    </g>
  );
  return (
    <Frame>
      <g transform="translate(58,10)">
        {[0, 48, 96, 144].map((x) => seg(x))}
      </g>
      <text x="200" y="175" textAnchor="middle" fontSize="11" fill="hsl(var(--muted-foreground))" fontFamily="monospace">
        PARAMETRIZED VERILOG · NEXYS2
      </text>
    </Frame>
  );
}

export function PlantMonitorArt() {
  return (
    <Frame>
      {/* pot */}
      <path d="M170 150 L180 120 H220 L230 150 Z" stroke={lineColor} strokeWidth={2} fill="hsl(var(--foreground) / 0.05)" />
      {/* stem */}
      <path d="M200 120 V80" stroke={accent} strokeWidth={3} strokeLinecap="round" />
      {/* leaves */}
      <path d="M200 100 C170 90 160 60 175 45 C195 55 200 80 200 100 Z" fill={accent} opacity={0.7} />
      <path d="M200 90 C230 80 240 55 225 40 C205 50 198 75 200 90 Z" fill={accent2} opacity={0.6} />
      {/* soil moisture wave */}
      <path d="M120 150 Q140 140 160 150 T200 150" stroke={accent2} strokeWidth={2} fill="none" opacity={0.7} />
      {/* wifi arcs */}
      <g transform="translate(280,60)" stroke={accent} strokeWidth={2} fill="none" strokeLinecap="round">
        <path d="M-14 10 A20 20 0 0 1 14 10" opacity={0.4} />
        <path d="M-8 15 A12 12 0 0 1 8 15" opacity={0.7} />
        <circle cx="0" cy="20" r="2" fill={accent} />
      </g>
      <text x="200" y="180" textAnchor="middle" fontSize="11" fill="hsl(var(--muted-foreground))" fontFamily="monospace">
        NODEMCU · SOIL / TEMP / HUMIDITY
      </text>
    </Frame>
  );
}

export function NetworkArchitectureArt() {
  const node = (x: number, y: number, r = 8, fill = accent) => <circle cx={x} cy={y} r={r} fill={fill} />;
  return (
    <Frame>
      <g stroke={lineColor} strokeWidth={1.5}>
        <line x1="200" y1="60" x2="120" y2="110" />
        <line x1="200" y1="60" x2="200" y2="110" />
        <line x1="200" y1="60" x2="280" y2="110" />
        <line x1="120" y1="110" x2="90" y2="150" />
        <line x1="120" y1="110" x2="150" y2="150" />
        <line x1="280" y1="110" x2="250" y2="150" />
        <line x1="280" y1="110" x2="310" y2="150" />
      </g>
      {node(200, 60, 10, accent2)}
      {node(120, 110)}
      {node(200, 110)}
      {node(280, 110)}
      {node(90, 150, 6, 'hsl(var(--foreground) / 0.4)')}
      {node(150, 150, 6, 'hsl(var(--foreground) / 0.4)')}
      {node(250, 150, 6, 'hsl(var(--foreground) / 0.4)')}
      {node(310, 150, 6, 'hsl(var(--foreground) / 0.4)')}
      <text x="200" y="35" textAnchor="middle" fontSize="11" fill="hsl(var(--muted-foreground))" fontFamily="monospace">
        GATEWAY (NAT)
      </text>
      <text x="200" y="185" textAnchor="middle" fontSize="11" fill="hsl(var(--muted-foreground))" fontFamily="monospace">
        VLSM · RIPv2 / OSPF · VLANs
      </text>
    </Frame>
  );
}

export function PowerSupplyArt() {
  return (
    <Frame>
      {/* AC sine wave */}
      <path d="M50 100 Q65 70 80 100 T110 100 T140 100" stroke={accent2} strokeWidth={2.5} fill="none" />
      <text x="90" y="130" textAnchor="middle" fontSize="10" fill="hsl(var(--muted-foreground))" fontFamily="monospace">220V AC</text>
      {/* transformer block */}
      <rect x="160" y="80" width="40" height="40" rx="4" stroke={lineColor} strokeWidth={1.5} fill="hsl(var(--foreground) / 0.06)" />
      <path d="M170 90 V110 M180 88 V112 M190 90 V110" stroke={lineColor} strokeWidth={1.5} />
      {/* DC flat line */}
      <path d="M220 100 H260" stroke={accent} strokeWidth={2.5} />
      {/* output rails */}
      {[
        { y: 55, label: '12V' },
        { y: 80, label: '9V' },
        { y: 105, label: '5V' },
        { y: 130, label: 'VAR' },
      ].map((rail, i) => (
        <g key={rail.label}>
          <path d={`M270 100 H300 V${rail.y} H330`} stroke={accent} strokeWidth={1.5} opacity={0.5 + i * 0.12} fill="none" />
          <text x="345" y={rail.y + 4} fontSize="10" fill="hsl(var(--muted-foreground))" fontFamily="monospace">
            {rail.label}
          </text>
        </g>
      ))}
      <text x="200" y="175" textAnchor="middle" fontSize="11" fill="hsl(var(--muted-foreground))" fontFamily="monospace">
        AC‑DC CONVERSION · REGULATION
      </text>
    </Frame>
  );
}

export function DiceRollArt() {
  const pip = (cx: number, cy: number) => <circle cx={cx} cy={cy} r={5} fill={accent} />;
  return (
    <Frame>
      <rect x="150" y="50" width="100" height="100" rx="14" stroke={lineColor} strokeWidth={2} fill="hsl(var(--foreground) / 0.05)" />
      {pip(175, 75)}
      {pip(225, 75)}
      {pip(175, 100)}
      {pip(225, 100)}
      {pip(175, 125)}
      {pip(225, 125)}
      {/* motion squiggle */}
      <path d="M60 100 Q75 80 90 100 T120 100" stroke={accent2} strokeWidth={2} fill="none" opacity={0.7} />
      <path d="M280 100 Q295 120 310 100 T340 100" stroke={accent2} strokeWidth={2} fill="none" opacity={0.7} />
      <text x="200" y="180" textAnchor="middle" fontSize="11" fill="hsl(var(--muted-foreground))" fontFamily="monospace">
        ARDUINO · OLED · VIBRATION SENSOR
      </text>
    </Frame>
  );
}

export function MultiRobotArt() {
  return (
    <Frame>
      {/* dashed path */}
      <path d="M40 150 Q120 110 200 150 T360 150" stroke={lineColor} strokeWidth={2} strokeDasharray="6 6" fill="none" />
      {/* chassis */}
      <rect x="160" y="90" width="80" height="40" rx="10" stroke={accent} strokeWidth={2} fill="hsl(var(--foreground) / 0.06)" />
      {/* wheels */}
      <circle cx="175" cy="135" r="10" fill="hsl(var(--foreground) / 0.3)" />
      <circle cx="225" cy="135" r="10" fill="hsl(var(--foreground) / 0.3)" />
      {/* sensor eye */}
      <circle cx="200" cy="85" r="6" fill={accent2} />
      <path d="M200 79 V65" stroke={accent2} strokeWidth={2} />
      {/* bluetooth glyph */}
      <path
        d="M290 80 L305 90 L297 95 L305 100 L290 110 V95 L282 100 M290 80 V95 M282 90 L290 95"
        stroke={accent}
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <text x="200" y="180" textAnchor="middle" fontSize="11" fill="hsl(var(--muted-foreground))" fontFamily="monospace">
        LINE FOLLOW · AVOID · BLUETOOTH
      </text>
    </Frame>
  );
}

export function BillingSystemArt() {
  return (
    <Frame>
      <path
        d="M140 40 H260 V150 L245 160 L230 150 L215 160 L200 150 L185 160 L170 150 L155 160 L140 150 Z"
        stroke={lineColor}
        strokeWidth={2}
        fill="hsl(var(--foreground) / 0.05)"
      />
      {[60, 78, 96, 114].map((y) => (
        <line key={y} x1="155" y1={y} x2="245" y2={y} stroke="hsl(var(--foreground) / 0.25)" strokeWidth={1.5} />
      ))}
      <line x1="155" y1="130" x2="210" y2="130" stroke={accent} strokeWidth={2} />
      <text x="245" y="134" textAnchor="end" fontSize="12" fill={accent} fontFamily="monospace">
        $
      </text>
      <text x="200" y="180" textAnchor="middle" fontSize="11" fill="hsl(var(--muted-foreground))" fontFamily="monospace">
        C++ · OOP · CUSTOMER RECORDS
      </text>
    </Frame>
  );
}
