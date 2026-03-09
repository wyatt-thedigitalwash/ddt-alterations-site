"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

/* ═══ PALETTE — warm ivory + deep navy + gold thread ═══ */
const IVORY = "#FAF8F3";
const CREAM = "#F3EFE6";
const NAVY = "#1B2A3D";
const NAVY_L = "#2A3D55";
const CHARCOAL = "#3A3A3A";
const WARM = "#6B5E4F";
const GOLD = "#C9A84C";
const GOLD_L = "#D4BA6A";
const GOLD_D = "#B08E3A";
const W = "#FFFFFF";
const LINE = "#E0DAD0";

/* ═══ FONTS ═══ */
const SERIF = "var(--font-cormorant), 'Cormorant Garamond', serif";
const SANS = "var(--font-outfit), 'Outfit', sans-serif";

/* ═══ LOGO — clean DDT monogram ═══ */
const Logo = ({ size = 1, dark = false }: { size?: number; dark?: boolean }) => {
  const c1 = dark ? W : NAVY;
  const c2 = dark ? GOLD_L : GOLD;
  const h = 36 * size;
  return (
    <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
      <svg height={h} viewBox="0 0 200 50" fill="none">
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
      <line x1="8" y1="40" x2="40" y2="8" stroke={c} strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="38" cy="10" rx="2.5" ry="3.5" stroke={c} strokeWidth="1.5" transform="rotate(-45 38 10)" />
      <path d="M10 38c-2-4 0-10 6-14" stroke={c} strokeWidth="1.2" strokeLinecap="round" strokeDasharray="2 3" />
    </svg>
  ),
  ruler: (c = GOLD) => (
    <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
      <rect x="6" y="16" width="36" height="16" rx="2" stroke={c} strokeWidth="2" />
      <path d="M14 16v6M22 16v8M30 16v6M38 16v4M10 16v4M18 16v4M26 16v4M34 16v4" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  dress: (c = GOLD) => (
    <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
      <path d="M18 4h12M20 4l-2 16-8 8v12h28V28l-8-8-2-16" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 4c0 4 2 8 4 8s4-4 4-8" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  shirt: (c = GOLD) => (
    <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
      <path d="M16 4l-10 8 6 6 4-4v26h16V14l4 4 6-6-10-8" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 4c0 4 4 8 8 8s8-4 8-8" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  zipper: (c = GOLD) => (
    <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
      <path d="M20 6v36M28 6v36" stroke={c} strokeWidth="2" strokeLinecap="round" />
      <path d="M20 14l8 4-8 4 8 4-8 4" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  pin: (c = GOLD) => (
    <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
      <path d="M24 42s12-10 12-20a12 12 0 10-24 0c0 10 12 20 12 20z" stroke={c} strokeWidth="2" strokeLinejoin="round" />
      <circle cx="24" cy="22" r="4" stroke={c} strokeWidth="1.5" />
    </svg>
  ),
  clock: (c = GOLD) => (
    <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="16" stroke={c} strokeWidth="2" />
      <path d="M24 14v10l7 5" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
const Stitch = ({
  color = GOLD,
  style: s = {},
}: {
  color?: string;
  style?: React.CSSProperties;
}) => (
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
      <line x1="0" y1="4" x2="600" y2="4" stroke={color} strokeWidth="1" strokeDasharray="8 6" opacity="0.4" />
    </svg>
  </div>
);

/* ═══ NAV LINKS DATA ═══ */
const NAV_ITEMS = [
  ["services", "Services"],
  ["about", "About"],
  ["contact", "Visit"],
] as const;

/* ═══ MAIN PAGE ═══ */
export default function DDTAlterations() {
  const [, setSec] = useState("top");
  const [menuOpen, setMenuOpen] = useState(false);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const scrollTo = (id: string) => () => {
    const el = document.querySelector(`[data-s="${id}"]`);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setSec(id);
    setMenuOpen(false);
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
        /* ── Buttons (44px touch targets) ── */
        .btn-p{min-height:44px;display:inline-flex;align-items:center;justify-content:center;padding:14px 28px;background:${NAVY};color:${W};font-family:${SANS};font-size:12px;font-weight:500;letter-spacing:2px;text-transform:uppercase;border:none;border-radius:2px;cursor:pointer;transition:all 0.3s}
        .btn-p:hover{background:${NAVY_L};box-shadow:0 4px 16px rgba(27,42,61,0.2)}
        .btn-g{min-height:44px;display:inline-flex;align-items:center;justify-content:center;padding:14px 28px;background:${GOLD};color:${W};font-family:${SANS};font-size:12px;font-weight:500;letter-spacing:2px;text-transform:uppercase;border:none;border-radius:2px;cursor:pointer;transition:all 0.3s}
        .btn-g:hover{background:${GOLD_L}}
        .btn-o{min-height:44px;display:inline-flex;align-items:center;justify-content:center;padding:12px 28px;background:transparent;color:${NAVY};font-family:${SANS};font-size:12px;font-weight:500;letter-spacing:2px;text-transform:uppercase;border:1px solid ${LINE};border-radius:2px;cursor:pointer;transition:all 0.3s}
        .btn-o:hover{border-color:${NAVY};background:rgba(27,42,61,0.03)}

        /* ── Responsive grids ── */
        .rg2{display:grid;grid-template-columns:1fr;gap:24px}
        .rg3{display:grid;grid-template-columns:1fr;gap:20px}
        @media(min-width:769px){
          .rg2{grid-template-columns:1fr 1fr;gap:32px}
          .rg3{grid-template-columns:repeat(3,1fr);gap:24px}
        }

        /* ── Nav ── */
        .nav-bar{position:fixed;top:0;left:0;right:0;z-index:1000;display:flex;justify-content:space-between;align-items:center;backdrop-filter:blur(12px);padding:12px 16px;border-bottom:1px solid ${LINE};background:${IVORY}f0}
        @media(min-width:769px){.nav-bar{padding:16px 32px}}

        .nav-links{display:none;gap:28px;align-items:center}
        @media(min-width:769px){.nav-links{display:flex}}

        .nav-link{font-family:${SANS};font-size:12px;font-weight:500;letter-spacing:2px;text-transform:uppercase;color:${CHARCOAL};cursor:pointer;transition:color 0.2s;min-height:44px;display:inline-flex;align-items:center;padding:8px 4px}

        .nav-burger{display:flex;align-items:center;justify-content:center;width:44px;height:44px;background:none;border:none;cursor:pointer;-webkit-tap-highlight-color:transparent}
        @media(min-width:769px){.nav-burger{display:none}}

        /* ── Mobile menu ── */
        .mob-menu{position:fixed;top:0;left:0;right:0;bottom:0;z-index:999;background:${IVORY};display:flex;flex-direction:column;gap:0;overflow-y:auto;padding-top:68px}
        .mob-link{font-family:${SANS};font-size:14px;font-weight:500;letter-spacing:3px;text-transform:uppercase;color:${CHARCOAL};cursor:pointer;min-height:56px;display:flex;align-items:center;background:none;border:none;border-bottom:1px solid ${LINE};width:100%;text-align:left;padding:0 24px;-webkit-tap-highlight-color:transparent}

        /* ── Hero ── */
        .hero-sec{padding-top:68px}
        @media(min-width:769px){.hero-sec{padding-top:80px}}

        .hero-wrap{max-width:1100px;margin:0 auto;padding:40px 16px 32px;display:grid;grid-template-columns:1fr;gap:28px;align-items:center}
        @media(min-width:769px){.hero-wrap{padding:80px 32px 60px;grid-template-columns:1.2fr 0.8fr;gap:48px}}

        .hero-img{position:relative;height:260px;border-radius:4px;overflow:hidden;border:1px solid ${LINE}}
        @media(min-width:769px){.hero-img{height:380px}}

        .stitch-wrap{max-width:1100px;margin:0 auto;padding:0 16px}
        @media(min-width:769px){.stitch-wrap{padding:0 32px}}

        /* ── Section padding ── */
        .sp{padding:48px 16px}
        @media(min-width:769px){.sp{padding:72px 32px}}

        /* ── About image ── */
        .about-img{position:relative;height:240px;border-radius:4px;overflow:hidden;border:1px solid ${LINE}}
        @media(min-width:769px){.about-img{height:300px}}

        /* ── Trust strip ── */
        .trust-sec{padding:32px 16px}
        @media(min-width:769px){.trust-sec{padding:40px 32px}}

        .trust-wrap{max-width:900px;margin:0 auto;display:flex;justify-content:center;gap:24px;flex-wrap:wrap;text-align:center}
        @media(min-width:769px){.trust-wrap{gap:48px}}

        /* ── Location image ── */
        .loc-img{border-radius:4px;overflow:hidden;border:1px solid ${LINE};position:relative;aspect-ratio:4/3}

        /* ── Footer ── */
        .footer-bar{padding:28px 16px}
        @media(min-width:769px){.footer-bar{padding:36px 32px}}
      `}</style>

      {/* ═══ NAV ═══ */}
      <nav className="nav-bar">
        <div onClick={scrollTo("top")}>
          <Logo size={0.85} />
        </div>
        {/* Desktop links */}
        <div className="nav-links">
          {NAV_ITEMS.map(([id, l]) => (
            <span key={id} onClick={scrollTo(id)} className="nav-link">
              {l}
            </span>
          ))}
          <a href="https://share.google/60BPgy3hkRSLbjISU" target="_blank" rel="noopener">
            <button className="btn-p" style={{ padding: "10px 24px" }}>
              Directions
            </button>
          </a>
        </div>
        {/* Hamburger (mobile only) */}
        <button
          className="nav-burger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke={CHARCOAL}
            strokeWidth="2"
            strokeLinecap="round"
          >
            {menuOpen ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* ═══ MOBILE MENU OVERLAY ═══ */}
      {menuOpen && (
        <div className="mob-menu">
          {NAV_ITEMS.map(([id, l]) => (
            <button key={id} onClick={scrollTo(id)} className="mob-link">
              {l}
            </button>
          ))}
          <div style={{ padding: "20px 24px" }}>
            <a
              href="https://share.google/60BPgy3hkRSLbjISU"
              target="_blank"
              rel="noopener"
              style={{ textDecoration: "none" }}
            >
              <button className="btn-p" style={{ width: "100%" }}>
                Get Directions
              </button>
            </a>
          </div>
        </div>
      )}

      {/* ═══ HERO ═══ */}
      <section data-s="top" className="hero-sec">
        <div className="hero-wrap">
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

          {/* Hero image — sewing machine close-up */}
          <div className="hero-img">
            <Image
              src="/assets/ddt-alterations-sewing-maching.png"
              alt="Professional sewing machine at DDT Alterations"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 40vw"
              priority
            />
          </div>
        </div>
        <div className="stitch-wrap">
          <Stitch />
        </div>
      </section>

      {/* ═══ ABOUT ═══ */}
      <section
        data-s="about"
        className="sp"
        style={{ maxWidth: 1000, margin: "0 auto" }}
      >
        <div style={{ textAlign: "center", marginBottom: 32 }}>
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
        </div>
        <div className="rg2" style={{ alignItems: "center" }}>
          <div>
            <p
              style={{
                fontSize: 15,
                color: WARM,
                lineHeight: 1.9,
                fontWeight: 300,
                maxWidth: 600,
                marginBottom: 16,
              }}
            >
              DDT Alterations helps clients get more out of the clothes they
              already own. Whether it&apos;s adjusting the fit of everyday garments,
              repairing worn pieces, or refining special items, our focus is on
              thoughtful alterations that restore comfort, confidence, and
              wearability.
            </p>
            <p
              style={{
                fontSize: 15,
                color: WARM,
                lineHeight: 1.9,
                fontWeight: 300,
                maxWidth: 600,
              }}
            >
              Serving Harbour Island and the greater Tampa area, DDT is trusted
              for reliable service, clean work, and consistent results — without
              overcomplicating the process.
            </p>
          </div>
          <div className="about-img">
            <Image
              src="/assets/ddt-alterations-workspace.png"
              alt="DDT Alterations workspace and studio"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ═══ APPROACH ═══ */}
      <section
        className="sp"
        style={{
          background: CREAM,
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

      {/* ═══ SERVICES ═══ */}
      <section
        data-s="services"
        className="sp"
        style={{ maxWidth: 1000, margin: "0 auto" }}
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
            <em style={{ fontStyle: "italic", color: GOLD_D }}>&amp; Repairs</em>
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
              <div
                style={{ display: "flex", flexDirection: "column", gap: 6 }}
              >
                {s.items.map((item, ii) => (
                  <div
                    key={ii}
                    style={{
                      display: "flex",
                      gap: 8,
                      alignItems: "center",
                    }}
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
                      style={{
                        fontSize: 12,
                        color: CHARCOAL,
                        fontWeight: 400,
                      }}
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

      {/* ═══ TRUST STRIP ═══ */}
      <section className="trust-sec" style={{ background: NAVY }}>
        <div className="trust-wrap">
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

      {/* ═══ LOCATION / CONTACT ═══ */}
      <section
        data-s="contact"
        className="sp"
        style={{ maxWidth: 1000, margin: "0 auto" }}
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
                    style={{
                      fontSize: 15,
                      color: CHARCOAL,
                      lineHeight: 1.6,
                    }}
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
                    style={{
                      fontSize: 15,
                      color: CHARCOAL,
                      lineHeight: 1.6,
                    }}
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

          {/* Building exterior photo */}
          <div>
            <div className="loc-img">
              <Image
                src="/assets/ddt-alterations-building-location-square.png"
                alt="DDT Alterations storefront on Harbour Island"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
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
                <div
                  style={{ fontSize: 10, color: GOLD, letterSpacing: 1 }}
                >
                  Tampa, FL 33602
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer
        className="footer-bar"
        style={{
          borderTop: `1px solid ${LINE}`,
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
          style={{
            maxWidth: 1000,
            margin: "12px auto 0",
            textAlign: "center",
          }}
        >
          <span style={{ fontSize: 10, color: `${WARM}80` }}>
            © 2026 DDT Alterations. All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}
