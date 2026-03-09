import { NAVY, GOLD, GOLD_L, W } from "@/lib/theme";

export default function Logo({
  size = 1,
  dark = false,
}: {
  size?: number;
  dark?: boolean;
}) {
  const c1 = dark ? W : NAVY;
  const c2 = dark ? GOLD_L : GOLD;
  const h = 36 * size;
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <svg height={h} viewBox="0 0 200 50" fill="none" aria-hidden="true">
        <line x1="0" y1="2" x2="200" y2="2" stroke={c2} strokeWidth="0.75" />
        <text
          x="100"
          y="35"
          textAnchor="middle"
          fontFamily="'Cormorant Garamond', serif"
          fontSize="38"
          fontWeight="600"
          letterSpacing="10"
          fill={c1}
        >
          DDT
        </text>
        <line x1="0" y1="42" x2="200" y2="42" stroke={c2} strokeWidth="0.75" />
        <text
          x="100"
          y="49.5"
          textAnchor="middle"
          fontFamily="'Outfit', sans-serif"
          fontSize="6.5"
          fontWeight="400"
          letterSpacing="5"
          fill={c2}
        >
          ALTERATIONS
        </text>
      </svg>
    </div>
  );
}
