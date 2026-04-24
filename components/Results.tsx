"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { results } from "@/content";

export default function Results() {
  return (
    <section
      aria-label="Résultats clients"
      style={{ background: "#F8F4ED", padding: "96px 0" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionHeading eyebrow={results.eyebrow} className="mb-16">
            {results.h2}
          </SectionHeading>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "2px",
              marginTop: "64px",
            }}
            className="sm:grid-cols-2 lg:grid-cols-4"
          >
            {results.metrics.map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
                style={{
                  background: "#F0EBE0",
                  padding: "40px 28px",
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontFamily: '"Inter", sans-serif',
                    fontWeight: 700,
                    fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                    color: "#D4A047",
                    lineHeight: 1,
                    marginBottom: "12px",
                  }}
                >
                  {metric.value}
                </span>
                <p
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontWeight: 700,
                    fontSize: "0.9375rem",
                    color: "#2A221B",
                    marginBottom: "6px",
                    lineHeight: 1.3,
                  }}
                >
                  {metric.label}
                </p>
                <p
                  style={{
                    fontFamily: '"Playfair Display", serif',
                    fontStyle: "italic",
                    fontSize: "0.875rem",
                    color: "#6B5E4F",
                  }}
                >
                  {metric.detail}
                </p>
              </motion.div>
            ))}
          </div>

          <p
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: "0.875rem",
              color: "#6B5E4F",
              marginTop: "24px",
              fontStyle: "italic",
            }}
          >
            {results.disclaimer}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
