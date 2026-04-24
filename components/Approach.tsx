"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { approach } from "@/content";

export default function Approach() {
  return (
    <section
      id="approche"
      aria-label="Mon approche"
      style={{ background: "#F0EBE0", padding: "96px 0" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionHeading eyebrow={approach.eyebrow} className="mb-16">
            {approach.h2_plain}{" "}
            <span
              style={{
                fontFamily: '"Playfair Display", serif',
                fontStyle: "italic",
                fontWeight: 400,
              }}
            >
              {approach.h2_italic}
            </span>{" "}
            {approach.h2_suffix}
          </SectionHeading>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "40px",
              marginTop: "64px",
            }}
          >
            {approach.steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                style={{
                  background: "#F8F4ED",
                  padding: "40px 32px",
                  borderRadius: "4px",
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontFamily: '"Playfair Display", serif',
                    fontStyle: "italic",
                    fontSize: "2rem",
                    color: "#D4A047",
                    marginBottom: "16px",
                    lineHeight: 1,
                  }}
                >
                  {step.roman}
                </span>
                <h3
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontWeight: 700,
                    fontSize: "1.125rem",
                    color: "#2A221B",
                    marginBottom: "4px",
                    lineHeight: 1.3,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontFamily: '"Playfair Display", serif',
                    fontStyle: "italic",
                    fontSize: "0.9375rem",
                    color: "#6B5E4F",
                    marginBottom: "20px",
                  }}
                >
                  {step.subtitle}
                </p>
                <p
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: "0.9375rem",
                    lineHeight: 1.7,
                    color: "#2A221B",
                  }}
                >
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
