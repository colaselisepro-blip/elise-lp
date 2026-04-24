"use client";

import { motion } from "framer-motion";
import { filterIcp } from "@/content";

export default function FilterIcp() {
  return (
    <section
      aria-label="Pour qui est ce site"
      style={{ background: "#F0EBE0", padding: "80px 0" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ maxWidth: "680px" }}
        >
          <p
            style={{
              fontFamily: '"Playfair Display", serif',
              fontStyle: "italic",
              color: "#6B5E4F",
              fontSize: "1.0625rem",
              marginBottom: "8px",
            }}
          >
            {filterIcp.eyebrow}
          </p>
          <h2
            style={{
              fontFamily: '"Inter", sans-serif',
              fontWeight: 700,
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              color: "#2A221B",
              lineHeight: 1.2,
              marginBottom: "36px",
            }}
          >
            {filterIcp.h2}
          </h2>

          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px 0" }}>
            {filterIcp.items.map((item, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                  marginBottom: "20px",
                  fontFamily: '"Inter", sans-serif',
                  fontSize: "1.0625rem",
                  lineHeight: 1.6,
                  color: "#2A221B",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: "20px",
                    height: "2px",
                    background: "#D4A047",
                    marginTop: "14px",
                    flexShrink: 0,
                  }}
                />
                {item}
              </li>
            ))}
          </ul>

          <p
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: "0.9375rem",
              color: "#6B5E4F",
              lineHeight: 1.65,
              fontStyle: "italic",
            }}
          >
            {filterIcp.disclaimer}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
