"use client";

import { motion } from "framer-motion";
import HighlightBox from "@/components/ui/HighlightBox";
import { reframe } from "@/content";

export default function Reframe() {
  return (
    <section
      aria-label="Le vrai problème"
      style={{ background: "#F8F4ED", padding: "96px 0" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Eyebrow */}
          <p
            style={{
              fontFamily: '"Playfair Display", serif',
              fontStyle: "italic",
              color: "#6B5E4F",
              fontSize: "0.875rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            {reframe.eyebrow}
          </p>

          {/* H2 */}
          <h2
            style={{
              fontFamily: '"Inter", sans-serif',
              fontWeight: 700,
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              color: "#2A221B",
              lineHeight: 1.15,
              marginBottom: "40px",
              maxWidth: "780px",
            }}
          >
            {reframe.h2_bold}{" "}
            <span
              style={{
                fontFamily: '"Playfair Display", serif',
                fontStyle: "italic",
                fontWeight: 400,
              }}
            >
              {reframe.h2_italic}
            </span>{" "}
            {reframe.h2_suffix_bold}{" "}
            <HighlightBox>{reframe.h2_highlight}</HighlightBox>.
          </h2>

          {/* Body */}
          <div
            style={{
              maxWidth: "640px",
              fontFamily: '"Inter", sans-serif',
              fontSize: "1.0625rem",
              lineHeight: 1.7,
              color: "#2A221B",
              marginBottom: "64px",
            }}
          >
            <p style={{ marginBottom: "20px" }}>{reframe.body1}</p>
            <p>{reframe.body2}</p>
          </div>

          {/* Signs title */}
          <h3
            style={{
              fontFamily: '"Inter", sans-serif',
              fontWeight: 700,
              fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
              color: "#2A221B",
              marginBottom: "40px",
            }}
          >
            {reframe.signs_title}
          </h3>

          {/* Signs grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "32px",
              marginBottom: "48px",
            }}
          >
            {reframe.signs.map((sign, i) => (
              <div key={i}>
                <span
                  style={{
                    display: "block",
                    fontFamily: '"Inter", sans-serif',
                    fontWeight: 700,
                    fontSize: "2.5rem",
                    color: "#D4A047",
                    lineHeight: 1,
                    marginBottom: "8px",
                  }}
                >
                  {sign.number}
                </span>
                <p
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "#2A221B",
                    marginBottom: "6px",
                    lineHeight: 1.3,
                  }}
                >
                  {sign.title}
                </p>
                <p
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: "0.9375rem",
                    color: "#6B5E4F",
                    lineHeight: 1.6,
                  }}
                >
                  {sign.body}
                </p>
              </div>
            ))}
          </div>

          {/* Conclusion + CTA */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "24px",
            }}
          >
            <p
              style={{
                fontFamily: '"Inter", sans-serif',
                fontWeight: 500,
                fontSize: "1.0625rem",
                color: "#2A221B",
              }}
            >
              {reframe.conclusion}
            </p>
            <a
              href="#calendly"
              style={{
                display: "inline-block",
                background: "#2A221B",
                color: "#F0EBE0",
                fontFamily: '"Inter", sans-serif',
                fontWeight: 700,
                fontSize: "0.9375rem",
                padding: "12px 24px",
                textDecoration: "none",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#D4A047")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#2A221B")}
              aria-label="Réserver un audit avec Elise Colas"
            >
              {reframe.cta}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
