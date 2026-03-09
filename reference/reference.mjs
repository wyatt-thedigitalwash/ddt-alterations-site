import { useState, useEffect } from "react";

/* ═══ PALETTE — warm ivory + deep navy + gold thread ═══ */
const IVORY = "#FAF8F3";
const CREAM = "#F3EFE6";
const NAVY = "#1B2A3D";
const NAVY_L = "#2A3D55";
const CHARCOAL = "#3A3A3A";
const WARM = "#6B5E4F";
const GOLD = "#B8976A";
const GOLD_L = "#CEAD82";
const GOLD_D = "#9A7D55";
const W = "#FFFFFF";
const BLK = "#111111";
const LINE = "#E0DAD0";

/* ═══ FONTS ═══ */
const SERIF = "'Cormorant Garamond',serif";
const SANS = "'Outfit',sans-serif";

/* ═══ LOGO — clean DDT monogram ═══ */
const Logo = ({ size = 1, dark = false }) => {
  const c1 = dark ? W : NAVY;
  const c2 = dark ? GOLD_L : GOLD;
  const h = 36 * size;
  return (
    <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
      <svg height={h} viewBox="0 0 200 50" fill="none">
        {/* Top thin line */}
        <line x1="0" y1="2" x2="200" y2="2" stroke={c2} strokeWidth="0.75" />
        {/* DDT letters — elegant high-contrast serif */}
        <text
          x="100"
          y="35"
          textAnchor="middle"
          fontFamily="'Cormorant Garamond',serif"
          fontSize="38"
          fontWeight="600"
          letterSpacing="10"
          fill={c1}
        >
          DDT
        </text>
        {/* Bottom thin line */}
        <line x1="0" y1="42" x2="200" y2="42" stroke={c2} strokeWidth="0.75" />
        {/* ALTERATIONS below */}
        <text
          x="100"
          y="49.5"
          textAnchor="middle"
          fontFamily="'Outfit',sans-serif"
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
};

/* ═══ ICONS ═══ */
const Ic = {
  scissors: (c = GOLD) => (
    <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
      <circle cx="14" cy="36" r="5" stroke={c} strokeWidth="2" />
      <circle cx="14" cy="12" r="5" stroke={c} strokeWidth="2" />
      <path
        d="M18 33L38 8M18 15L38 40"
        stroke={c}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  needle: (c = GOLD) => (
    <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
      <line
        x1="8"
        y1="40"
        x2="40"
        y2="8"
        stroke={c}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <ellipse
        cx="38"
        cy="10"
        rx="2.5"
        ry="3.5"
        stroke={c}
        strokeWidth="1.5"
        transform="rotate(-45 38 10)"
      />
      <path
        d="M10 38c-2-4 0-10 6-14"
        stroke={c}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeDasharray="2 3"
      />
    </svg>
  ),
  ruler: (c = GOLD) => (
    <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
      <rect
        x="6"
        y="16"
        width="36"
        height="16"
        rx="2"
        stroke={c}
        strokeWidth="2"
      />
      <path
        d="M14 16v6M22 16v8M30 16v6M38 16v4M10 16v4M18 16v4M26 16v4M34 16v4"
        stroke={c}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  dress: (c = GOLD) => (
    <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
      <path
        d="M18 4h12M20 4l-2 16-8 8v12h28V28l-8-8-2-16"
        stroke={c}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 4c0 4 2 8 4 8s4-4 4-8"
        stroke={c}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  shirt: (c = GOLD) => (
    <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
      <path
        d="M16 4l-10 8 6 6 4-4v26h16V14l4 4 6-6-10-8"
        stroke={c}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 4c0 4 4 8 8 8s8-4 8-8"
        stroke={c}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  zipper: (c = GOLD) => (
    <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
      <path
        d="M20 6v36M28 6v36"
        stroke={c}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M20 14l8 4-8 4 8 4-8 4"
        stroke={c}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  pin: (c = GOLD) => (
    <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
      <path
        d="M24 42s12-10 12-20a12 12 0 10-24 0c0 10 12 20 12 20z"
        stroke={c}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="22" r="4" stroke={c} strokeWidth="1.5" />
    </svg>
  ),
  clock: (c = GOLD) => (
    <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="16" stroke={c} strokeWidth="2" />
      <path
        d="M24 14v10l7 5"
        stroke={c}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  star: (c = GOLD) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill={c}>
      <path d="M12 2l2.9 6.3L22 9.2l-5 4.8L18.2 22 12 18.3 5.8 22 7 14l-5-4.8 7.1-.9z" />
    </svg>
  ),
  thread: (c = GOLD) => (
    <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="20" r="12" stroke={c} strokeWidth="2" />
      <circle cx="24" cy="20" r="6" stroke={c} strokeWidth="1" opacity="0.4" />
      <path d="M24 32v12" stroke={c} strokeWidth="2" strokeLinecap="round" />
      <path d="M20 44h8" stroke={c} strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
};

/* ═══ DECORATIVE STITCH LINE ═══ */
const Stitch = ({ color = GOLD, style: s = {} }) => (
  <div
    style={{
      width: "100%",
      height: 1,
      position: "relative",
      margin: "0 auto",
      ...s,
    }}
  >
    <svg width="100%" height="8" viewBox="0 0 600 8" preserveAspectRatio="none">
      <line
        x1="0"
        y1="4"
        x2="600"
        y2="4"
        stroke={color}
        strokeWidth="1"
        strokeDasharray="8 6"
        opacity="0.4"
      />
    </svg>
  </div>
);

export default function DDTAlterations() {
  const [sec, setSec] = useState("top");

  const scrollTo = (id) => () => {
    const el = document.querySelector(`[data-s="${id}"]`);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setSec(id);
  };

  return (
    <div
      style={{
        fontFamily: SANS,
        color: CHARCOAL,
        background: IVORY,
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Outfit:wght@300;400;500;600&display=swap');
        *{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}
        .btn-p{padding:14px 36px;background:${NAVY};color:${W};font-family:${SANS};font-size:12px;font-weight:500;letter-spacing:2px;text-transform:uppercase;border:none;border-radius:2px;cursor:pointer;transition:all 0.3s}
        .btn-p:hover{background:${NAVY_L};box-shadow:0 4px 16px rgba(27,42,61,0.2)}
        .btn-g{padding:14px 36px;background:${GOLD};color:${W};font-family:${SANS};font-size:12px;font-weight:500;letter-spacing:2px;text-transform:uppercase;border:none;border-radius:2px;cursor:pointer;transition:all 0.3s}
        .btn-g:hover{background:${GOLD_L}}
        .btn-o{padding:12px 32px;background:transparent;color:${NAVY};font-family:${SANS};font-size:12px;font-weight:500;letter-spacing:2px;text-transform:uppercase;border:1px solid ${LINE};border-radius:2px;cursor:pointer;transition:all 0.3s}
        .btn-o:hover{border-color:${NAVY};background:rgba(27,42,61,0.03)}
        .rg2{display:grid;grid-template-columns:1fr 1fr;gap:32px}
        .rg3{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
        @media(max-width:768px){.rg2,.rg3{grid-template-columns:1fr!important}.hero-grid{grid-template-columns:1fr!important}}
      `}</style>

      {/* NAV */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: "16px 32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: `${IVORY}f0`,
          backdropFilter: "blur(12px)",
          borderBottom: `1px solid ${LINE}`,
        }}
      >
        <div onClick={scrollTo("top")}>
          <Logo size={0.85} />
        </div>
        <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {[
            ["services", "Services"],
            ["about", "About"],
            ["contact", "Visit"],
          ].map(([id, l]) => (
            <span
              key={id}
              onClick={scrollTo(id)}
              style={{
                fontFamily: SANS,
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: CHARCOAL,
                cursor: "pointer",
                transition: "color 0.2s",
              }}
            >
              {l}
            </span>
          ))}
          <a
            href="https://share.google/60BPgy3hkRSLbjISU"
            target="_blank"
            rel="noopener"
          >
            <button className="btn-p" style={{ padding: "10px 24px" }}>
              Directions
            </button>
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section data-s="top" style={{ paddingTop: 80 }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "80px 32px 60px",
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: 48,
            alignItems: "center",
          }}
          className="hero-grid"
        >
          <div>
            <div
              style={{
                fontFamily: SANS,
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: 4,
                color: GOLD,
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Harbour Island · Tampa
            </div>
            <h1
              style={{
                fontFamily: SERIF,
                fontSize: "clamp(40px,6vw,68px)",
                fontWeight: 400,
                color: NAVY,
                lineHeight: 1.08,
                marginBottom: 20,
              }}
            >
              Tailoring Defined
              <br />
              by{" "}
              <em style={{ fontStyle: "italic", color: GOLD_D }}>Precision</em>
            </h1>
            <p
              style={{
                fontSize: 16,
                color: WARM,
                lineHeight: 1.85,
                fontWeight: 300,
                maxWidth: 460,
                marginBottom: 28,
              }}
            >
              Modern craftsmanship. Thoughtful alterations. A flawless fit —
              every time. From hemming and resizing to detailed repairs and
              custom adjustments, every piece is handled with care.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button className="btn-p" onClick={scrollTo("services")}>
                Our Services
              </button>
              <a
                href="https://share.google/60BPgy3hkRSLbjISU"
                target="_blank"
                rel="noopener"
              >
                <button className="btn-o">Get Directions</button>
              </a>
            </div>
          </div>
          {/* Decorative illustration panel */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                background: CREAM,
                borderRadius: 4,
                padding: "48px 36px",
                border: `1px solid ${LINE}`,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Large watermark monogram */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  opacity: 0.04,
                }}
              >
                <span
                  style={{
                    fontFamily: SERIF,
                    fontSize: 180,
                    fontWeight: 600,
                    color: NAVY,
                    letterSpacing: 12,
                  }}
                >
                  DDT
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 24,
                  position: "relative",
                }}
              >
                {[
                  {
                    icon: Ic.scissors(NAVY),
                    label: "Precision Cutting",
                    sub: "Clean lines, careful handling",
                  },
                  {
                    icon: Ic.ruler(NAVY),
                    label: "Measured Fitting",
                    sub: "Every garment evaluated individually",
                  },
                  {
                    icon: Ic.needle(NAVY),
                    label: "Expert Stitching",
                    sub: "Finished to last",
                  },
                ].map((s, i) => (
                  <div
                    key={i}
                    style={{ display: "flex", gap: 14, alignItems: "center" }}
                  >
                    {s.icon}
                    <div>
                      <div
                        style={{
                          fontFamily: SERIF,
                          fontSize: 18,
                          color: NAVY,
                          fontWeight: 500,
                        }}
                      >
                        {s.label}
                      </div>
                      <div
                        style={{
                          fontSize: 11,
                          color: WARM,
                          fontWeight: 300,
                          marginTop: 1,
                        }}
                      >
                        {s.sub}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div
                style={{
                  marginTop: 28,
                  padding: "14px 20px",
                  background: NAVY,
                  borderRadius: 2,
                  display: "flex",
                  gap: 12,
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", gap: 2 }}>
                  {[0, 1, 2, 3, 4].map((i) => (
                    <span key={i}>{Ic.star(GOLD)}</span>
                  ))}
                </div>
                <span
                  style={{
                    fontFamily: SANS,
                    fontSize: 10,
                    color: GOLD_L,
                    letterSpacing: 1.5,
                    textTransform: "uppercase",
                  }}
                >
                  Trusted on Harbour Island
                </span>
              </div>
            </div>
          </div>
        </div>
        <Stitch
          style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}
        />
      </section>

      {/* ABOUT */}
      <section
        data-s="about"
        style={{
          padding: "72px 32px",
          maxWidth: 800,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: SANS,
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: 4,
            color: GOLD,
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          About DDT
        </div>
        <h2
          style={{
            fontFamily: SERIF,
            fontSize: "clamp(28px,4vw,40px)",
            fontWeight: 400,
            color: NAVY,
            marginBottom: 16,
          }}
        >
          Craftsmanship You Can{" "}
          <em style={{ fontStyle: "italic", color: GOLD_D }}>Trust</em>
        </h2>
        <p
          style={{
            fontSize: 15,
            color: WARM,
            lineHeight: 1.9,
            fontWeight: 300,
            maxWidth: 600,
            margin: "0 auto 16px",
          }}
        >
          DDT Alterations helps clients get more out of the clothes they already
          own. Whether it's adjusting the fit of everyday garments, repairing
          worn pieces, or refining special items, our focus is on thoughtful
          alterations that restore comfort, confidence, and wearability.
        </p>
        <p
          style={{
            fontSize: 15,
            color: WARM,
            lineHeight: 1.9,
            fontWeight: 300,
            maxWidth: 600,
            margin: "0 auto",
          }}
        >
          Serving Harbour Island and the greater Tampa area, DDT is trusted for
          reliable service, clean work, and consistent results — without
          overcomplicating the process.
        </p>
      </section>

      {/* APPROACH */}
      <section
        style={{
          background: CREAM,
          padding: "72px 32px",
          borderTop: `1px solid ${LINE}`,
          borderBottom: `1px solid ${LINE}`,
        }}
      >
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <div
              style={{
                fontFamily: SANS,
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: 4,
                color: GOLD,
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              Our Approach
            </div>
            <h2
              style={{
                fontFamily: SERIF,
                fontSize: "clamp(26px,3.5vw,36px)",
                fontWeight: 400,
                color: NAVY,
              }}
            >
              Every Stitch{" "}
              <em style={{ fontStyle: "italic", color: GOLD_D }}>Matters</em>
            </h2>
          </div>
          <div className="rg3">
            {[
              {
                icon: Ic.ruler(),
                t: "Precision-Focused",
                d: "Every garment is carefully measured, adjusted, and finished with clean stitching — ensuring a comfortable, natural fit that looks right and wears well.",
              },
              {
                icon: Ic.thread(),
                t: "Garment-Specific Work",
                d: "Each piece is evaluated individually for fabric, structure, and fit. Adjustments are made so the garment feels balanced and true to how it's meant to be worn.",
              },
              {
                icon: Ic.pin(),
                t: "Convenient Location",
                d: "Located on Harbour Island with easy access from Downtown Tampa, Water Street, Channelside, and Davis Island — making drop-offs and pickups simple.",
              },
            ].map((a, i) => (
              <div
                key={i}
                style={{
                  padding: "28px 24px",
                  background: IVORY,
                  borderRadius: 4,
                  border: `1px solid ${LINE}`,
                }}
              >
                <div style={{ marginBottom: 14 }}>{a.icon}</div>
                <h3
                  style={{
                    fontFamily: SERIF,
                    fontSize: 20,
                    fontWeight: 500,
                    color: NAVY,
                    marginBottom: 8,
                  }}
                >
                  {a.t}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    color: WARM,
                    lineHeight: 1.8,
                    fontWeight: 300,
                  }}
                >
                  {a.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        data-s="services"
        style={{ padding: "72px 32px", maxWidth: 1000, margin: "0 auto" }}
      >
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <div
            style={{
              fontFamily: SANS,
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: 4,
              color: GOLD,
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            What We Do
          </div>
          <h2
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(28px,4vw,40px)",
              fontWeight: 400,
              color: NAVY,
            }}
          >
            Professional Alterations{" "}
            <em style={{ fontStyle: "italic", color: GOLD_D }}>& Repairs</em>
          </h2>
        </div>
        <div className="rg3">
          {[
            {
              icon: Ic.shirt(),
              t: "Everyday Alterations",
              d: "Hemming, resizing, tapering, and fit adjustments for shirts, pants, denim, and casual wear. Get more life out of the clothes you love.",
              items: [
                "Hemming & Shortening",
                "Waist Adjustments",
                "Tapering & Slimming",
                "Sleeve Shortening",
                "Denim Alterations",
              ],
            },
            {
              icon: Ic.zipper(),
              t: "Garment Repairs",
              d: "Zippers, seams, buttons, tears, and general repairs to extend the life of your clothing. We fix what others might replace.",
              items: [
                "Zipper Replacement",
                "Seam Repairs",
                "Button Replacement",
                "Tear & Hole Repair",
                "Lining Repair",
              ],
            },
            {
              icon: Ic.dress(),
              t: "Dresses & Formalwear",
              d: "Alterations for dresses, gowns, suits, and special occasion garments that require careful handling and precise fit.",
              items: [
                "Dress Hemming & Fitting",
                "Gown Alterations",
                "Suit Tailoring",
                "Bridesmaid Dresses",
                "Formal Adjustments",
              ],
            },
          ].map((s, i) => (
            <div
              key={i}
              style={{
                padding: "32px 24px",
                borderRadius: 4,
                border: `1px solid ${LINE}`,
                background: W,
              }}
            >
              <div style={{ marginBottom: 14 }}>{s.icon}</div>
              <h3
                style={{
                  fontFamily: SERIF,
                  fontSize: 22,
                  fontWeight: 500,
                  color: NAVY,
                  marginBottom: 8,
                }}
              >
                {s.t}
              </h3>
              <p
                style={{
                  fontSize: 13,
                  color: WARM,
                  lineHeight: 1.75,
                  fontWeight: 300,
                  marginBottom: 16,
                }}
              >
                {s.d}
              </p>
              <Stitch style={{ marginBottom: 14 }} />
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {s.items.map((item, ii) => (
                  <div
                    key={ii}
                    style={{ display: "flex", gap: 8, alignItems: "center" }}
                  >
                    <div
                      style={{
                        width: 4,
                        height: 4,
                        borderRadius: 2,
                        background: GOLD,
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{ fontSize: 12, color: CHARCOAL, fontWeight: 400 }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TRUST STRIP */}
      <section style={{ background: NAVY, padding: "40px 32px" }}>
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            gap: 48,
            flexWrap: "wrap",
            textAlign: "center",
          }}
        >
          {[
            { v: "7am–7pm", l: "Weekday Hours" },
            { v: "Walk-Ins", l: "Always Welcome" },
            { v: "Same Week", l: "Turnaround" },
            { v: "All Garments", l: "Handled With Care" },
          ].map((s, i) => (
            <div key={i}>
              <div
                style={{
                  fontFamily: SERIF,
                  fontSize: 22,
                  color: W,
                  fontWeight: 500,
                }}
              >
                {s.v}
              </div>
              <div
                style={{
                  fontSize: 10,
                  color: GOLD,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  fontWeight: 500,
                  marginTop: 2,
                }}
              >
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LOCATION / CONTACT */}
      <section
        data-s="contact"
        style={{ padding: "72px 32px", maxWidth: 1000, margin: "0 auto" }}
      >
        <div className="rg2" style={{ alignItems: "start" }}>
          <div>
            <div
              style={{
                fontFamily: SANS,
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: 4,
                color: GOLD,
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              Visit Us
            </div>
            <h2
              style={{
                fontFamily: SERIF,
                fontSize: "clamp(28px,4vw,38px)",
                fontWeight: 400,
                color: NAVY,
                marginBottom: 20,
              }}
            >
              Where to{" "}
              <em style={{ fontStyle: "italic", color: GOLD_D }}>Find Us</em>
            </h2>

            <div style={{ marginBottom: 24 }}>
              <div
                style={{
                  display: "flex",
                  gap: 12,
                  alignItems: "flex-start",
                  marginBottom: 18,
                }}
              >
                {Ic.pin(GOLD)}
                <div>
                  <div
                    style={{
                      fontFamily: SANS,
                      fontSize: 11,
                      letterSpacing: 2,
                      color: GOLD,
                      textTransform: "uppercase",
                      fontWeight: 500,
                      marginBottom: 4,
                    }}
                  >
                    Address
                  </div>
                  <div
                    style={{ fontSize: 15, color: CHARCOAL, lineHeight: 1.6 }}
                  >
                    704 Harbour Post Dr
                    <br />
                    Tampa, FL 33602
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: 12,
                  alignItems: "flex-start",
                  marginBottom: 18,
                }}
              >
                {Ic.clock(GOLD)}
                <div>
                  <div
                    style={{
                      fontFamily: SANS,
                      fontSize: 11,
                      letterSpacing: 2,
                      color: GOLD,
                      textTransform: "uppercase",
                      fontWeight: 500,
                      marginBottom: 4,
                    }}
                  >
                    Hours
                  </div>
                  <div
                    style={{ fontSize: 15, color: CHARCOAL, lineHeight: 1.6 }}
                  >
                    Mon – Fri: 7:00 AM – 7:00 PM
                    <br />
                    Saturday: 8:00 AM – 4:00 PM
                    <br />
                    Sunday: Closed
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://share.google/60BPgy3hkRSLbjISU"
              target="_blank"
              rel="noopener"
              style={{ textDecoration: "none" }}
            >
              <button className="btn-p">Get Directions</button>
            </a>

            <div style={{ marginTop: 28 }}>
              <div
                style={{
                  fontFamily: SANS,
                  fontSize: 11,
                  letterSpacing: 2,
                  color: GOLD,
                  textTransform: "uppercase",
                  fontWeight: 500,
                  marginBottom: 8,
                }}
              >
                Serving
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {[
                  "Harbour Island",
                  "Downtown Tampa",
                  "Water Street",
                  "Channelside",
                  "Davis Island",
                ].map((a, i) => (
                  <span
                    key={i}
                    style={{
                      padding: "6px 14px",
                      borderRadius: 2,
                      background: CREAM,
                      border: `1px solid ${LINE}`,
                      fontSize: 11,
                      color: CHARCOAL,
                      fontWeight: 400,
                    }}
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Map / Visual placeholder */}
          <div>
            <div
              style={{
                borderRadius: 4,
                overflow: "hidden",
                border: `1px solid ${LINE}`,
                background: CREAM,
              }}
            >
              {/* Illustrated map area */}
              <svg
                width="100%"
                viewBox="0 0 400 300"
                preserveAspectRatio="xMidYMid slice"
              >
                <rect width="400" height="300" fill="#E8E2D6" />
                {/* Water */}
                <path
                  d="M0 180 Q100 160, 200 180 T400 180 L400 300 L0 300Z"
                  fill="#C8D8E4"
                  opacity="0.4"
                />
                <path
                  d="M0 200 Q100 185, 200 200 T400 195 L400 300 L0 300Z"
                  fill="#B8CCDB"
                  opacity="0.3"
                />
                {/* Roads */}
                <rect x="80" y="0" width="3" height="180" fill="#D5CFC4" />
                <rect x="180" y="0" width="3" height="175" fill="#D5CFC4" />
                <rect x="280" y="0" width="3" height="170" fill="#D5CFC4" />
                <rect x="0" y="80" width="400" height="3" fill="#D5CFC4" />
                <rect x="0" y="140" width="350" height="3" fill="#D5CFC4" />
                {/* Harbour Island land */}
                <rect
                  x="120"
                  y="90"
                  width="120"
                  height="80"
                  rx="4"
                  fill="#E0DAD0"
                  stroke="#C8C2B4"
                  strokeWidth="1"
                />
                {/* DDT Pin */}
                <circle cx="180" cy="120" r="12" fill={NAVY} />
                <circle cx="180" cy="120" r="5" fill={GOLD} />
                <text
                  x="180"
                  y="100"
                  textAnchor="middle"
                  fontFamily={SANS}
                  fontSize="8"
                  fill={NAVY}
                  fontWeight="600"
                >
                  DDT ALTERATIONS
                </text>
                {/* Labels */}
                <text
                  x="175"
                  y="155"
                  textAnchor="middle"
                  fontFamily={SANS}
                  fontSize="7"
                  fill="#8A8275"
                >
                  Harbour Island
                </text>
                <text
                  x="80"
                  y="70"
                  fontFamily={SANS}
                  fontSize="6"
                  fill="#AAA49A"
                >
                  Downtown Tampa
                </text>
                <text
                  x="250"
                  y="70"
                  fontFamily={SANS}
                  fontSize="6"
                  fill="#AAA49A"
                >
                  Water Street
                </text>
                <text
                  x="300"
                  y="230"
                  fontFamily={SANS}
                  fontSize="6"
                  fill="#8AAABB"
                >
                  Hillsborough Bay
                </text>
              </svg>
            </div>
            <div
              style={{
                marginTop: 12,
                padding: "14px 20px",
                background: NAVY,
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Logo size={0.7} dark={true} />
              <div style={{ textAlign: "right" }}>
                <div style={{ fontFamily: SERIF, fontSize: 13, color: W }}>
                  704 Harbour Post Dr
                </div>
                <div style={{ fontSize: 10, color: GOLD, letterSpacing: 1 }}>
                  Tampa, FL 33602
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          borderTop: `1px solid ${LINE}`,
          padding: "36px 32px",
          background: CREAM,
        }}
      >
        <div
          style={{
            maxWidth: 1000,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <Logo size={0.7} />
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 12, color: WARM }}>
              704 Harbour Post Dr, Tampa, FL 33602
            </div>
            <div style={{ fontSize: 11, color: WARM, marginTop: 2 }}>
              Mon–Fri 7am–7pm · Sat 8am–4pm
            </div>
          </div>
        </div>
        <Stitch style={{ maxWidth: 1000, margin: "16px auto 0" }} />
        <div
          style={{ maxWidth: 1000, margin: "12px auto 0", textAlign: "center" }}
        >
          <span style={{ fontSize: 10, color: `${WARM}80` }}>
            © 2026 DDT Alterations. All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}
