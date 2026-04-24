"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { about } from "@/content";

export default function About() {
  return (
    <section
      aria-label="À propos d'Elise Colas"
      style={{ background: "#F0EBE0", padding: "96px 0" }}
    >
      <div
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}
        className="flex flex-col lg:flex-row gap-16 items-start"
      >
        {/* Photo placeholder */}
        <motion.div
          className="w-full lg:w-[40%] flex-shrink-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "4/5",
              background: "#F8F4ED",
              borderRadius: "4px",
              overflow: "hidden",
              maxWidth: "400px",
            }}
          >
            <Image
              src="/elise-about.JPG"
              alt="Elise Colas, Head of Sales"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
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
            {about.eyebrow}
          </p>

          <h2
            style={{
              fontFamily: '"Inter", sans-serif',
              fontWeight: 700,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#2A221B",
              lineHeight: 1.15,
              marginBottom: "40px",
            }}
          >
            {about.h2_plain}{" "}
            <span
              style={{
                fontFamily: '"Playfair Display", serif',
                fontStyle: "italic",
                fontWeight: 400,
              }}
            >
              {about.h2_italic}
            </span>
            {about.h2_suffix}
          </h2>

          <div
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: "1.0625rem",
              lineHeight: 1.7,
              color: "#2A221B",
            }}
          >
            <p style={{ marginBottom: "20px" }}>{about.body1}</p>
            <p style={{ marginBottom: "20px" }}>{about.body2}</p>
            <p style={{ marginBottom: "40px" }}>{about.body3}</p>
          </div>

          {/* Signature block */}
          <div
            style={{
              borderLeft: "3px solid #D4A047",
              paddingLeft: "20px",
            }}
          >
            <p
              style={{
                fontFamily: '"Playfair Display", serif',
                fontStyle: "italic",
                fontSize: "1.125rem",
                color: "#2A221B",
                lineHeight: 1.6,
              }}
            >
              {about.signature}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
