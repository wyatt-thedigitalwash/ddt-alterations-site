"use client";

import { useState } from "react";

interface FaqItem {
  q: string;
  a: string;
}

export default function FaqList({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      {items.map((f, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className="faq-item">
            <button
              className="faq-summary"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span>{f.q}</span>
              <span className={`faq-icon ${isOpen ? "faq-icon--open" : ""}`}>+</span>
            </button>
            <div className={`faq-answer ${isOpen ? "faq-answer--open" : ""}`}>
              <div className="faq-answer-inner">
                <p>{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
