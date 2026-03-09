"use client";

import { useState, useEffect } from "react";
import Logo from "@/components/Logo";
import {
  IVORY,
  CHARCOAL,
  GOLD,
  LINE,
  SANS,
  PHONE,
  PHONE_HREF,
  MAPS_URL,
} from "@/lib/theme";

const NAV_ITEMS = [
  ["services", "Services"],
  ["about", "About"],
  ["contact", "Visit"],
] as const;

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <nav className="nav-bar" aria-label="Main navigation">
        <a href="#top" className="nav-logo-link" aria-label="DDT Alterations — back to top">
          <Logo size={0.85} />
        </a>

        {/* Desktop links */}
        <div className="nav-links">
          {NAV_ITEMS.map(([id, l]) => (
            <a key={id} href={`#${id}`} className="nav-link">
              {l}
            </a>
          ))}
          <a href={PHONE_HREF} className="nav-link" aria-label={`Call us at ${PHONE}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={CHARCOAL} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ marginRight: 6 }}>
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            {PHONE}
          </a>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-p"
            style={{ padding: "10px 24px" }}
          >
            Directions
          </a>
        </div>

        {/* Mobile: phone + hamburger */}
        <div className="nav-mobile-btns">
          <a
            href={PHONE_HREF}
            className="nav-burger"
            aria-label={`Call us at ${PHONE}`}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={CHARCOAL} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
          </a>
          <button
            className="nav-burger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke={CHARCOAL}
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
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
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`mob-menu ${menuOpen ? "mob-menu--open" : ""}`}
        aria-hidden={!menuOpen}
      >
        {NAV_ITEMS.map(([id, l]) => (
          <a
            key={id}
            href={`#${id}`}
            className="mob-link"
            onClick={() => setMenuOpen(false)}
            tabIndex={menuOpen ? 0 : -1}
          >
            {l}
          </a>
        ))}
        <div style={{ padding: "16px 24px", display: "flex", flexDirection: "column", gap: 12 }}>
          <a
            href={PHONE_HREF}
            className="btn-g"
            style={{ width: "100%", textDecoration: "none" }}
            tabIndex={menuOpen ? 0 : -1}
          >
            Call {PHONE}
          </a>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-p"
            style={{ width: "100%", textDecoration: "none" }}
            tabIndex={menuOpen ? 0 : -1}
          >
            Get Directions
          </a>
        </div>
      </div>
    </>
  );
}
