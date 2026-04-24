"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { offers } from "@/content";

export default function Offers() {
  return (
    <section
      aria-label="Offres"
      style={{ background: "#F0EBE0", padding: "96px 0" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionHeading eyebrow={offers.eyebrow} className="mb-16">
            {offers.h2}
          </SectionHeading>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "24px",
              marginTop: "64px",
            }}
          >
            {offers.items.map((offer, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
                whileHover={{ scale: 1.02 }}
                style={{
                  background: offer.featured ? "#F8F4ED" : "#F8F4ED",
                  padding: "36px 32px",
                  borderLeft: offer.featured ? "4px solid #D4A047" : "4px solid transparent",
                  borderRadius: "4px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Tag */}
                {offer.tag && (
                  <span
                    style={{
                      display: "inline-block",
                      fontFamily: '"Inter", sans-serif',
                      fontWeight: 700,
                      fontSize: "0.75rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#D4A047",
                      marginBottom: "16px",
                    }}
                  >
                    {offer.tag}
                  </span>
                )}

                {/* Roman numeral */}
                <span
                  style={{
                    display: "block",
                    fontFamily: '"Playfair Display", serif',
                    fontStyle: "italic",
                    fontSize: "1.5rem",
                    color: "#D4A047",
                    marginBottom: "8px",
                    lineHeight: 1,
                  }}
                >
                  {offer.roman}
                </span>

                {/* Name */}
                <h3
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontWeight: 700,
                    fontSize: offer.featured ? "1.25rem" : "1.125rem",
                    color: "#2A221B",
                    marginBottom: "8px",
                    lineHeight: 1.25,
                  }}
                >
                  {offer.name}
                </h3>

                {/* Sub italic */}
                <p
                  style={{
                    fontFamily: '"Playfair Display", serif',
                    fontStyle: "italic",
                    fontSize: "0.9375rem",
                    color: "#6B5E4F",
                    marginBottom: "24px",
                  }}
                >
                  {offer.sub}
                </p>

                {/* Includes */}
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "0 0 24px 0",
                    flex: 1,
                  }}
                >
                  {offer.includes.map((item, j) => (
                    <li
                      key={j}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "12px",
                        marginBottom: "10px",
                        fontFamily: '"Inter", sans-serif',
                        fontSize: "0.9rem",
                        lineHeight: 1.55,
                        color: "#2A221B",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          width: "16px",
                          height: "1.5px",
                          background: "#D4A047",
                          marginTop: "11px",
                          flexShrink: 0,
                        }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Result */}
                <div
                  style={{
                    background: "#F0EBE0",
                    padding: "14px 16px",
                    marginBottom: "20px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: '"Inter", sans-serif',
                      fontSize: "0.875rem",
                      lineHeight: 1.6,
                      color: "#2A221B",
                    }}
                  >
                    {offer.result}
                  </p>
                </div>

                {/* Price */}
                {offer.price && (
                  <p
                    style={{
                      fontFamily: '"Playfair Display", serif',
                      fontStyle: "italic",
                      fontSize: "0.9375rem",
                      color: "#6B5E4F",
                      marginBottom: "20px",
                    }}
                  >
                    {offer.price}
                  </p>
                )}

                {/* CTA */}
                <a
                  href="#calendly"
                  style={{
                    display: "inline-block",
                    background: offer.featured ? "#2A221B" : "transparent",
                    color: offer.featured ? "#F0EBE0" : "#2A221B",
                    border: offer.featured ? "none" : "1.5px solid #2A221B",
                    fontFamily: '"Inter", sans-serif',
                    fontWeight: 700,
                    fontSize: "0.9375rem",
                    padding: "12px 24px",
                    textDecoration: "none",
                    textAlign: "center",
                    transition: "background 0.2s, color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#D4A047";
                    e.currentTarget.style.color = "#F0EBE0";
                    e.currentTarget.style.borderColor = "#D4A047";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = offer.featured ? "#2A221B" : "transparent";
                    e.currentTarget.style.color = offer.featured ? "#F0EBE0" : "#2A221B";
                    e.currentTarget.style.borderColor = offer.featured ? "transparent" : "#2A221B";
                  }}
                  aria-label={`${offer.cta} — ${offer.name}`}
                >
                  {offer.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
