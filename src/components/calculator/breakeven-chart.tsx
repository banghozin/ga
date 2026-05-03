"use client";

import { useMemo } from "react";
import { calcAll, type IndustryKey } from "@/lib/tax-calc";
import { formatKRWCompact } from "@/lib/utils";

interface Props {
  industry: IndustryKey;
  customExpenseRate: number | null;
  dependents: number;
  currentRevenue: number;
}

const SAMPLES = 60;
const MIN_REVENUE = 0;
const MAX_REVENUE = 300_000_000;

const COLORS = {
  freelance: "var(--color-leaf)",
  simple_vat: "var(--color-mustard)",
  general_vat: "var(--color-navy)",
} as const;

const LABELS = {
  freelance: "프리랜서",
  simple_vat: "간이",
  general_vat: "일반",
} as const;

interface SeriesPoint {
  revenue: number;
  net: number;
  eligible: boolean;
}

interface Series {
  key: keyof typeof COLORS;
  points: SeriesPoint[];
}

export function BreakevenChart({
  industry,
  customExpenseRate,
  dependents,
  currentRevenue,
}: Props) {
  const series = useMemo<Series[]>(() => {
    const samples: number[] = [];
    for (let i = 0; i <= SAMPLES; i++) {
      samples.push(MIN_REVENUE + ((MAX_REVENUE - MIN_REVENUE) * i) / SAMPLES);
    }

    const f: SeriesPoint[] = [];
    const s: SeriesPoint[] = [];
    const g: SeriesPoint[] = [];

    for (const r of samples) {
      const out = calcAll({
        annualRevenue: r,
        industry,
        customExpenseRate: customExpenseRate ?? undefined,
        dependents,
      });
      f.push({ revenue: r, net: out.freelance.netIncome, eligible: out.freelance.eligible });
      s.push({ revenue: r, net: out.simpleVat.netIncome, eligible: out.simpleVat.eligible });
      g.push({ revenue: r, net: out.generalVat.netIncome, eligible: out.generalVat.eligible });
    }

    return [
      { key: "freelance", points: f },
      { key: "simple_vat", points: s },
      { key: "general_vat", points: g },
    ];
  }, [industry, customExpenseRate, dependents]);

  // Compute Y range
  const allEligibleNet = series.flatMap((sr) =>
    sr.points.filter((p) => p.eligible).map((p) => p.net)
  );
  const yMax = Math.max(...allEligibleNet, 1) * 1.05;
  const yMin = 0;

  // Detect breakeven crossings (where two eligible series swap rank)
  const breakevens: { revenue: number; label: string }[] = [];
  for (let i = 1; i < series[0].points.length; i++) {
    const prev = series.map((s) => s.points[i - 1]);
    const cur = series.map((s) => s.points[i]);

    const prevElig = prev.filter((p) => p.eligible);
    const curElig = cur.filter((p) => p.eligible);
    if (prevElig.length < 2 || curElig.length < 2) continue;

    // top scenario by net
    const prevTop = prev
      .map((p, idx) => ({ p, key: series[idx].key }))
      .filter((x) => x.p.eligible)
      .sort((a, b) => b.p.net - a.p.net)[0].key;
    const curTop = cur
      .map((p, idx) => ({ p, key: series[idx].key }))
      .filter((x) => x.p.eligible)
      .sort((a, b) => b.p.net - a.p.net)[0].key;

    if (prevTop !== curTop) {
      breakevens.push({
        revenue: cur[0].revenue,
        label: `${LABELS[prevTop]} → ${LABELS[curTop]}`,
      });
    }
  }

  // SVG dimensions (viewBox, scales with container)
  const W = 800;
  const H = 320;
  const PAD = { l: 8, r: 8, t: 16, b: 32 };
  const innerW = W - PAD.l - PAD.r;
  const innerH = H - PAD.t - PAD.b;

  const xScale = (rev: number) =>
    PAD.l + ((rev - MIN_REVENUE) / (MAX_REVENUE - MIN_REVENUE)) * innerW;
  const yScale = (n: number) =>
    PAD.t + innerH - ((n - yMin) / (yMax - yMin)) * innerH;

  // Path strings
  const buildPath = (pts: SeriesPoint[]) => {
    let d = "";
    let started = false;
    for (const p of pts) {
      if (!p.eligible) {
        started = false;
        continue;
      }
      const x = xScale(p.revenue);
      const y = yScale(p.net);
      d += started ? ` L ${x.toFixed(1)} ${y.toFixed(1)}` : `M ${x.toFixed(1)} ${y.toFixed(1)}`;
      started = true;
    }
    return d;
  };

  // Gridlines (horizontal: every 5천만)
  const yTicks: number[] = [];
  for (let v = 0; v <= yMax; v += 50_000_000) yTicks.push(v);

  // X ticks (every 5천만)
  const xTicks: number[] = [];
  for (let v = 0; v <= MAX_REVENUE; v += 50_000_000) xTicks.push(v);

  return (
    <div className="w-full">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto"
        preserveAspectRatio="none"
        role="img"
        aria-label="매출 변화에 따른 시나리오별 실수령 그래프"
      >
        {/* Grid */}
        {yTicks.map((y) => (
          <line
            key={`gy-${y}`}
            x1={PAD.l}
            x2={W - PAD.r}
            y1={yScale(y)}
            y2={yScale(y)}
            stroke="var(--color-rule)"
            strokeWidth="0.5"
            strokeDasharray="2 3"
          />
        ))}
        {xTicks.map((x) => (
          <line
            key={`gx-${x}`}
            x1={xScale(x)}
            x2={xScale(x)}
            y1={PAD.t}
            y2={H - PAD.b}
            stroke="var(--color-rule)"
            strokeWidth="0.5"
            strokeDasharray="2 3"
          />
        ))}

        {/* Series */}
        {series.map((sr) => (
          <path
            key={sr.key}
            d={buildPath(sr.points)}
            fill="none"
            stroke={COLORS[sr.key]}
            strokeWidth={sr.key === "freelance" ? 2.5 : 2}
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        ))}

        {/* Current revenue marker */}
        <line
          x1={xScale(currentRevenue)}
          x2={xScale(currentRevenue)}
          y1={PAD.t}
          y2={H - PAD.b}
          stroke="var(--color-stamp)"
          strokeWidth="1.5"
          strokeDasharray="3 2"
        />
        <circle
          cx={xScale(currentRevenue)}
          cy={PAD.t + 6}
          r="3.5"
          fill="var(--color-stamp)"
        />
        <text
          x={xScale(currentRevenue)}
          y={PAD.t - 4}
          fontSize="10"
          fontFamily="var(--font-mono)"
          fill="var(--color-stamp)"
          textAnchor="middle"
        >
          현재
        </text>

        {/* Breakeven marks */}
        {breakevens.map((be, idx) => (
          <g key={idx}>
            <line
              x1={xScale(be.revenue)}
              x2={xScale(be.revenue)}
              y1={H - PAD.b}
              y2={H - PAD.b - 8}
              stroke="var(--color-ink)"
              strokeWidth="1"
            />
            <text
              x={xScale(be.revenue)}
              y={H - PAD.b - 12}
              fontSize="9"
              fontFamily="var(--font-mono)"
              fill="var(--color-ink-soft)"
              textAnchor="middle"
            >
              {be.label}
            </text>
          </g>
        ))}

        {/* X-axis labels */}
        {xTicks.map((x) => (
          <text
            key={`xl-${x}`}
            x={xScale(x)}
            y={H - PAD.b + 14}
            fontSize="10"
            fontFamily="var(--font-mono)"
            fill="var(--color-ink-faint)"
            textAnchor="middle"
          >
            {x === 0 ? "0" : `${x / 100_000_000}억`}
          </text>
        ))}

        {/* Y-axis labels (right-aligned, top of grid) */}
        {yTicks.filter((y) => y > 0).map((y) => (
          <text
            key={`yl-${y}`}
            x={PAD.l + 4}
            y={yScale(y) - 3}
            fontSize="9"
            fontFamily="var(--font-mono)"
            fill="var(--color-ink-faint)"
          >
            {formatKRWCompact(y)}
          </text>
        ))}

        {/* Border */}
        <line
          x1={PAD.l}
          x2={W - PAD.r}
          y1={H - PAD.b}
          y2={H - PAD.b}
          stroke="var(--color-ink)"
          strokeWidth="1"
        />
      </svg>

      {/* Legend */}
      <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-xs">
        <Legend color={COLORS.freelance} label="프리랜서 (3.3%)" />
        <Legend color={COLORS.simple_vat} label="간이과세" />
        <Legend color={COLORS.general_vat} label="일반과세" />
        <span className="text-(--color-stamp) flex items-center gap-1.5">
          <span className="inline-block w-3 h-px border-t-2 border-dashed border-(--color-stamp)" />
          현재 매출
        </span>
      </div>

      {breakevens.length > 0 && (
        <div className="mt-2 text-[11px] text-(--color-ink-soft) tnum">
          손익분기점: {breakevens.map((be, i) => (
            <span key={i} className="mr-3">
              {formatKRWCompact(be.revenue)} <span className="text-(--color-ink-faint)">({be.label})</span>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <span className="flex items-center gap-1.5 text-(--color-ink-soft)">
      <span
        className="inline-block w-3 h-0.5"
        style={{ backgroundColor: color }}
      />
      {label}
    </span>
  );
}
