"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { hero } from "@/content";

export default function Hero() {
  return (
    <section
      aria-label="Hero"
      style={{ background: "#F0EBE0", paddingTop: "80px", paddingBottom: "80px" }}
    >
      <div
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}
        className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center"
      >
        {/* Left column — text */}
        <motion.div
          className="flex-1 lg:max-w-[60%]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Tag */}
          <p
            className="mb-6"
            style={{
              fontFamily: '"Playfair Display", serif',
              fontStyle: "italic",
              color: "#6B5E4F",
              fontSize: "1rem",
            }}
          >
            {hero.tag}
          </p>

          {/* H1 */}
          <h1
            className="mb-6 leading-tight"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              lineHeight: 1.1,
              color: "#2A221B",
            }}
          >
            <span style={{ fontFamily: '"Inter", sans-serif', fontWeight: 700 }}>
              {hero.h1_bold}{" "}
            </span>
            <span style={{ fontFamily: '"Inter", sans-serif', fontWeight: 700 }}>
              {hero.h1_bold2}{" "}
            </span>
            <br />
            <span
              style={{
                fontFamily: '"Playfair Display", serif',
                fontStyle: "italic",
                fontWeight: 400,
              }}
            >
              {hero.h1_italic}
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="mb-8"
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: "1.0625rem",
              lineHeight: 1.7,
              color: "#2A221B",
              maxWidth: "540px",
            }}
          >
            {hero.subheadline}
          </p>

          {/* Proof pill */}
          <div
            className="inline-block mb-8"
            style={{
              background: "#D4A047",
              color: "#F0EBE0",
              padding: "6px 16px",
              transform: "rotate(-1.5deg)",
              fontFamily: '"Inter", sans-serif',
              fontWeight: 700,
              fontSize: "0.9375rem",
            }}
          >
            {hero.proof}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <a
              href="#calendly"
              style={{
                display: "inline-block",
                background: "#2A221B",
                color: "#F0EBE0",
                fontFamily: '"Inter", sans-serif',
                fontWeight: 700,
                fontSize: "1rem",
                padding: "14px 28px",
                textDecoration: "none",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#D4A047")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#2A221B")}
              aria-label="Réserver un audit gratuit de 45 minutes avec Elise Colas"
            >
              {hero.cta_primary}
            </a>
            <a
              href="#approche"
              style={{
                display: "inline-block",
                background: "transparent",
                color: "#2A221B",
                fontFamily: '"Inter", sans-serif',
                fontWeight: 500,
                fontSize: "1rem",
                padding: "14px 28px",
                border: "1.5px solid #2A221B",
                textDecoration: "none",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#D4A047";
                e.currentTarget.style.color = "#D4A047";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#2A221B";
                e.currentTarget.style.color = "#2A221B";
              }}
              aria-label="Voir l'approche d'Elise Colas"
            >
              {hero.cta_secondary}
            </a>
          </div>
        </motion.div>

        {/* Right column — photo placeholder */}
        <motion.div
          className="w-full lg:w-[38%] flex-shrink-0"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "4/5",
              background: "#F8F4ED",
              borderRadius: "8px",
              overflow: "hidden",
              maxWidth: "420px",
              margin: "0 auto",
            }}
          >
            <Image
              src="/placeholder-elise.png"
              alt="Photo d'Elise Colas, Head of Sales"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
