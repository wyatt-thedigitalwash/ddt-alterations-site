import Image from "next/image";
import Nav from "@/components/Nav";
import Logo from "@/components/Logo";
import {
  IVORY,
  CREAM,
  NAVY,
  CHARCOAL,
  WARM,
  GOLD,
  GOLD_L,
  GOLD_D,
  W,
  LINE,
  SERIF,
  SANS,
  PHONE,
  PHONE_HREF,
  ADDRESS,
  CITY_STATE,
  MAPS_URL,
  MAPS_EMBED_URL,
} from "@/lib/theme";

/* ═══ ICONS ═══ */
const Ic = {
  scissors: (c = GOLD) => (
    <svg width="32" height="32" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="14" cy="36" r="5" stroke={c} strokeWidth="2" />
      <circle cx="14" cy="12" r="5" stroke={c} strokeWidth="2" />
      <path d="M18 33L38 8M18 15L38 40" stroke={c} strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  needle: (c = GOLD) => (
    <svg width="32" height="32" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <line x1="8" y1="40" x2="40" y2="8" stroke={c} strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="38" cy="10" rx="2.5" ry="3.5" stroke={c} strokeWidth="1.5" transform="rotate(-45 38 10)" />
      <path d="M10 38c-2-4 0-10 6-14" stroke={c} strokeWidth="1.2" strokeLinecap="round" strokeDasharray="2 3" />
    </svg>
  ),
  ruler: (c = GOLD) => (
    <svg width="32" height="32" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="6" y="16" width="36" height="16" rx="2" stroke={c} strokeWidth="2" />
      <path d="M14 16v6M22 16v8M30 16v6M38 16v4M10 16v4M18 16v4M26 16v4M34 16v4" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  dress: (c = GOLD) => (
    <svg width="32" height="32" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M18 4h12M20 4l-2 16-8 8v12h28V28l-8-8-2-16" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 4c0 4 2 8 4 8s4-4 4-8" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  shirt: (c = GOLD) => (
    <svg width="32" height="32" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M16 4l-10 8 6 6 4-4v26h16V14l4 4 6-6-10-8" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 4c0 4 4 8 8 8s8-4 8-8" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  zipper: (c = GOLD) => (
    <svg width="32" height="32" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M20 6v36M28 6v36" stroke={c} strokeWidth="2" strokeLinecap="round" />
      <path d="M20 14l8 4-8 4 8 4-8 4" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  pin: (c = GOLD) => (
    <svg width="32" height="32" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M24 42s12-10 12-20a12 12 0 10-24 0c0 10 12 20 12 20z" stroke={c} strokeWidth="2" strokeLinejoin="round" />
      <circle cx="24" cy="22" r="4" stroke={c} strokeWidth="1.5" />
    </svg>
  ),
  clock: (c = GOLD) => (
    <svg width="32" height="32" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="16" stroke={c} strokeWidth="2" />
      <path d="M24 14v10l7 5" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  star: (c = GOLD) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill={c} aria-hidden="true">
      <path d="M12 2l2.9 6.3L22 9.2l-5 4.8L18.2 22 12 18.3 5.8 22 7 14l-5-4.8 7.1-.9z" />
    </svg>
  ),
  thread: (c = GOLD) => (
    <svg width="32" height="32" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="20" r="12" stroke={c} strokeWidth="2" />
      <circle cx="24" cy="20" r="6" stroke={c} strokeWidth="1" opacity="0.4" />
      <path d="M24 32v12" stroke={c} strokeWidth="2" strokeLinecap="round" />
      <path d="M20 44h8" stroke={c} strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
};

/* ═══ STITCH LINE ═══ */
function Stitch({ color = GOLD, style: s = {} }: { color?: string; style?: React.CSSProperties }) {
  return (
    <div style={{ width: "100%", height: 1, position: "relative", margin: "0 auto", ...s }} aria-hidden="true">
      <svg width="100%" height="8" viewBox="0 0 600 8" preserveAspectRatio="none">
        <line x1="0" y1="4" x2="600" y2="4" stroke={color} strokeWidth="1" strokeDasharray="8 6" opacity="0.4" />
      </svg>
    </div>
  );
}


/* ═══ FAQ DATA ═══ */
const FAQS = [
  {
    q: "How long do alterations take?",
    a: "Most standard alterations are completed within the same week. Rush services are available for time-sensitive needs — just let us know when you drop off.",
  },
  {
    q: "Do I need an appointment?",
    a: "No appointment needed. Walk-ins are always welcome during our business hours. We'll take your measurements and discuss the work right at the counter.",
  },
  {
    q: "What types of garments do you work on?",
    a: "We handle everything from everyday casual wear (jeans, shirts, pants) to formalwear (suits, dresses, gowns). If it can be sewn, we can work on it.",
  },
  {
    q: "How much do alterations cost?",
    a: "Pricing varies by garment and the complexity of the work. Simple hems start at $10–$15. We'll always give you an upfront quote before starting any work.",
  },
  {
    q: "Do you repair zippers and buttons?",
    a: "Yes — zipper replacements, button repairs, seam fixes, and tear repairs are some of our most common services. Bring it in and we'll take a look.",
  },
];

export default function DDTAlterations() {
  return (
    <>
      <Nav />

      <main id="main-content">
        {/* ═══ HERO ═══ */}
        <section id="top" className="hero-sec">
          <div className="hero-wrap">
            <div>
              <div className="sec-label" style={{ marginBottom: 16 }}>
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
                by <em style={{ fontStyle: "italic", color: GOLD_D }}>Precision</em>
              </h1>
              <p
                style={{
                  fontSize: 16,
                  color: WARM,
                  lineHeight: 1.85,
                  fontWeight: 400,
                  maxWidth: 460,
                  marginBottom: 12,
                }}
              >
                Modern craftsmanship. Thoughtful alterations. A flawless fit —
                every time. From hemming and resizing to detailed repairs and
                custom adjustments, every piece is handled with care.
              </p>
              <p style={{ marginBottom: 28 }}>
                <a
                  href={PHONE_HREF}
                  style={{
                    fontFamily: SERIF,
                    fontSize: 20,
                    fontWeight: 500,
                    color: NAVY,
                    textDecoration: "none",
                  }}
                >
                  {PHONE}
                </a>
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="#services" className="btn-p">Our Services</a>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn-o">
                  Get Directions
                </a>
              </div>
            </div>

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
        <section id="about" className="sp" style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <div className="sec-label">About DDT</div>
            <h2 className="sec-heading" style={{ fontSize: "clamp(28px,4vw,40px)", marginBottom: 16 }}>
              Craftsmanship You Can <em style={{ fontStyle: "italic", color: GOLD_D }}>Trust</em>
            </h2>
          </div>
          <div className="rg2" style={{ alignItems: "center" }}>
            <div>
              <p style={{ fontSize: 15, color: WARM, lineHeight: 1.9, fontWeight: 400, maxWidth: 600, marginBottom: 16 }}>
                DDT Alterations helps clients get more out of the clothes they
                already own. Whether it&apos;s adjusting the fit of everyday garments,
                repairing worn pieces, or refining special items, our focus is on
                thoughtful alterations that restore comfort, confidence, and
                wearability.
              </p>
              <p style={{ fontSize: 15, color: WARM, lineHeight: 1.9, fontWeight: 400, maxWidth: 600 }}>
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
          style={{ background: CREAM, borderTop: `1px solid ${LINE}`, borderBottom: `1px solid ${LINE}` }}
        >
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 44 }}>
              <div className="sec-label">Our Approach</div>
              <h2 className="sec-heading" style={{ fontSize: "clamp(26px,3.5vw,36px)" }}>
                Every Stitch <em style={{ fontStyle: "italic", color: GOLD_D }}>Matters</em>
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
                  <h3 style={{ fontFamily: SERIF, fontSize: 20, fontWeight: 500, color: NAVY, marginBottom: 8 }}>
                    {a.t}
                  </h3>
                  <p style={{ fontSize: 13, color: WARM, lineHeight: 1.8, fontWeight: 400 }}>{a.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ SERVICES ═══ */}
        <section id="services" className="sp" style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <div className="sec-label">What We Do</div>
            <h2 className="sec-heading" style={{ fontSize: "clamp(28px,4vw,40px)" }}>
              Professional Alterations <em style={{ fontStyle: "italic", color: GOLD_D }}>&amp; Repairs</em>
            </h2>
          </div>
          <div className="rg3">
            {[
              {
                icon: Ic.shirt(),
                t: "Everyday Alterations",
                d: "Hemming, resizing, tapering, and fit adjustments for shirts, pants, denim, and casual wear. Get more life out of the clothes you love.",
                items: ["Hemming & Shortening", "Waist Adjustments", "Tapering & Slimming", "Sleeve Shortening", "Denim Alterations"],
              },
              {
                icon: Ic.zipper(),
                t: "Garment Repairs",
                d: "Zippers, seams, buttons, tears, and general repairs to extend the life of your clothing. We fix what others might replace.",
                items: ["Zipper Replacement", "Seam Repairs", "Button Replacement", "Tear & Hole Repair", "Lining Repair"],
              },
              {
                icon: Ic.dress(),
                t: "Dresses & Formalwear",
                d: "Alterations for dresses, gowns, suits, and special occasion garments that require careful handling and precise fit.",
                items: ["Dress Hemming & Fitting", "Gown Alterations", "Suit Tailoring", "Bridesmaid Dresses", "Formal Adjustments"],
              },
            ].map((s, i) => (
              <div
                key={i}
                style={{ padding: "32px 24px", borderRadius: 4, border: `1px solid ${LINE}`, background: W }}
              >
                <div style={{ marginBottom: 14 }}>{s.icon}</div>
                <h3 style={{ fontFamily: SERIF, fontSize: 22, fontWeight: 500, color: NAVY, marginBottom: 8 }}>
                  {s.t}
                </h3>
                <p style={{ fontSize: 13, color: WARM, lineHeight: 1.75, fontWeight: 400, marginBottom: 16 }}>
                  {s.d}
                </p>
                <Stitch style={{ marginBottom: 14 }} />
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {s.items.map((item, ii) => (
                    <div key={ii} style={{ display: "flex", gap: 8, alignItems: "center" }}>
                      <div style={{ width: 4, height: 4, borderRadius: 2, background: GOLD, flexShrink: 0 }} />
                      <span style={{ fontSize: 12, color: CHARCOAL, fontWeight: 400 }}>{item}</span>
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
                <div style={{ fontFamily: SERIF, fontSize: 22, color: W, fontWeight: 500 }}>{s.v}</div>
                <div style={{ fontSize: 10, color: GOLD, letterSpacing: 2, textTransform: "uppercase", fontWeight: 500, marginTop: 2 }}>
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ FAQ ═══ */}
        <section
          className="sp"
          style={{ background: CREAM, borderTop: `1px solid ${LINE}`, borderBottom: `1px solid ${LINE}` }}
        >
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 44 }}>
              <div className="sec-label">FAQ</div>
              <h2 className="sec-heading" style={{ fontSize: "clamp(28px,4vw,40px)" }}>
                Common <em style={{ fontStyle: "italic", color: GOLD_D }}>Questions</em>
              </h2>
            </div>
            {FAQS.map((f, i) => (
              <details key={i} className="faq-item">
                <summary>{f.q}</summary>
                <div className="faq-answer">
                  <div className="faq-answer-inner">
                    <p>{f.a}</p>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ═══ LOCATION ═══ */}
        <section id="contact" className="sp" style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div className="rg2" style={{ alignItems: "start" }}>
            {/* Left: Visit info */}
            <div>
              <div className="sec-label">Visit Us</div>
              <h2 className="sec-heading" style={{ fontSize: "clamp(28px,4vw,38px)", marginBottom: 20 }}>
                Where to <em style={{ fontStyle: "italic", color: GOLD_D }}>Find Us</em>
              </h2>

              <div style={{ marginBottom: 24 }}>
                <div style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 18 }}>
                  {Ic.pin(GOLD)}
                  <div>
                    <div className="sec-label" style={{ marginBottom: 4 }}>Address</div>
                    <div style={{ fontSize: 15, color: CHARCOAL, lineHeight: 1.6 }}>
                      {ADDRESS}<br />{CITY_STATE}
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 18 }}>
                  {Ic.clock(GOLD)}
                  <div>
                    <div className="sec-label" style={{ marginBottom: 4 }}>Hours</div>
                    <div style={{ fontSize: 15, color: CHARCOAL, lineHeight: 1.6 }}>
                      Mon – Fri: 7:00 AM – 7:00 PM<br />
                      Saturday: 8:00 AM – 4:00 PM<br />
                      Sunday: Closed
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <svg width="32" height="32" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke={GOLD} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div>
                    <div className="sec-label" style={{ marginBottom: 4 }}>Phone</div>
                    <a
                      href={PHONE_HREF}
                      style={{ fontSize: 15, color: CHARCOAL, textDecoration: "none" }}
                    >
                      {PHONE}
                    </a>
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href={PHONE_HREF} className="btn-g">Call Now</a>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn-p">
                  Get Directions
                </a>
              </div>
            </div>

            {/* Right: Building photo */}
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
              <div className="loc-navy-bar">
                <Logo size={0.7} dark={true} />
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontFamily: SERIF, fontSize: 13, color: W }}>{ADDRESS}</div>
                  <div style={{ fontSize: 10, color: GOLD, letterSpacing: 1 }}>{CITY_STATE}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Serving areas */}
          <div style={{ marginTop: 36 }}>
            <div className="sec-label" style={{ marginBottom: 8 }}>Serving</div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {[
                "Harbour Island",
                "Downtown Tampa",
                "Water Street",
                "Channelside",
                "Davis Island",
                "Hyde Park",
                "SoHo",
                "Bayshore",
                "Westshore",
                "South Tampa",
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

          {/* Full-width Google Maps embed */}
          <div style={{ marginTop: 36 }}>
            <iframe
              src={MAPS_EMBED_URL}
              className="maps-embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="DDT Alterations location on Google Maps"
              allowFullScreen
            />
          </div>
        </section>
      </main>

      {/* ═══ FOOTER ═══ */}
      <footer className="footer-bar" style={{ borderTop: `1px solid ${LINE}`, background: CREAM }}>
        <div className="footer-inner">
          <Logo size={0.7} />
          <div>
            <div style={{ fontSize: 12, color: WARM }}>
              {ADDRESS}, {CITY_STATE}
            </div>
            <div style={{ fontSize: 11, color: WARM, marginTop: 2 }}>
              Mon–Fri 7am–7pm · Sat 8am–4pm ·{" "}
              <a href={PHONE_HREF} style={{ color: WARM, textDecoration: "none" }}>
                {PHONE}
              </a>
            </div>
          </div>
          {/* Social links */}
          <div className="social-links">
            <a href="#" className="social-link" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="#" className="social-link" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a href="#" className="social-link" aria-label="Google Business">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </a>
          </div>
        </div>
        <Stitch style={{ maxWidth: 1000, margin: "16px auto 0" }} />
        <div style={{ maxWidth: 1000, margin: "12px auto 0", textAlign: "center" }}>
          <span style={{ fontSize: 10, color: `${WARM}80` }}>
            © 2026 DDT Alterations. All rights reserved.
          </span>
        </div>
      </footer>
    </>
  );
}
