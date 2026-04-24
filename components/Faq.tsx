"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { faq } from "@/content";

export default function Faq() {
  return (
    <section
      aria-label="Foire aux questions"
      style={{ background: "#F8F4ED", padding: "96px 0" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionHeading eyebrow={faq.eyebrow} className="mb-16">
            {faq.h2}
          </SectionHeading>

          <div
            style={{
              maxWidth: "720px",
              marginTop: "64px",
            }}
          >
            {faq.items.map((item, i) => (
              <details
                key={i}
                style={{
                  borderBottom: "1px solid #D4A04740",
                  marginBottom: "0",
                }}
              >
                <summary
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "24px 0",
                    fontFamily: '"Inter", sans-serif',
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "#2A221B",
                    cursor: "pointer",
                    userSelect: "none",
                    gap: "16px",
                  }}
                >
                  <span>{item.question}</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ flexShrink: 0, color: "#D4A047" }}
                    aria-hidden="true"
                  >
                    <path
                      d="M5 7.5L10 12.5L15 7.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </summary>
                <p
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: "0.9375rem",
                    lineHeight: 1.7,
                    color: "#6B5E4F",
                    paddingBottom: "24px",
                    paddingRight: "36px",
                    margin: 0,
                  }}
                >
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
