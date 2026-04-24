"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { ctaCalendly, CALENDLY_URL, INSTAGRAM_URL } from "@/content";

const InlineWidget = dynamic(
  () => import("react-calendly").then((m) => m.InlineWidget),
  {
    ssr: false,
    loading: () => (
      <div
        style={{
          height: "700px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#F0EBE0",
          fontFamily: '"Inter", sans-serif',
          fontSize: "0.9375rem",
          opacity: 0.6,
        }}
      >
        Chargement du calendrier...
      </div>
    ),
  }
);

export default function CtaCalendly() {
  return (
    <section
      id="calendly"
      aria-label="Réserver un audit"
      style={{ background: "#2A221B", padding: "96px 0" }}
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
              color: "#D4A047",
              fontSize: "0.875rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            {ctaCalendly.eyebrow}
          </p>

          {/* H2 */}
          <h2
            style={{
              fontFamily: '"Inter", sans-serif',
              fontWeight: 700,
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              color: "#F0EBE0",
              lineHeight: 1.15,
              marginBottom: "20px",
              maxWidth: "700px",
            }}
          >
            {ctaCalendly.h2_bold}{" "}
            <span
              style={{
                fontFamily: '"Playfair Display", serif',
                fontStyle: "italic",
                fontWeight: 400,
                color: "#D4A047",
              }}
            >
              {ctaCalendly.h2_italic}
            </span>
          </h2>

          {/* Subhead */}
          <p
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: "1.0625rem",
              lineHeight: 1.7,
              color: "#F0EBE0",
              opacity: 0.75,
              marginBottom: "56px",
              maxWidth: "520px",
            }}
          >
            {ctaCalendly.subhead}
          </p>

          {/* Calendly widget */}
          <div
            style={{
              background: "transparent",
              borderRadius: "4px",
              overflow: "hidden",
            }}
          >
            <InlineWidget
              url={CALENDLY_URL}
              styles={{
                height: "700px",
                width: "100%",
              }}
            />
          </div>

          {/* Fallback */}
          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <p
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: "0.875rem",
                color: "#F0EBE0",
                opacity: 0.5,
                marginBottom: "12px",
              }}
            >
              Le widget ne s'affiche pas ?
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                color: "#D4A047",
                fontFamily: '"Inter", sans-serif',
                fontWeight: 700,
                fontSize: "0.9375rem",
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              }}
              aria-label="Envoyer un DM à Elise sur Instagram"
            >
              {ctaCalendly.fallback_cta}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
