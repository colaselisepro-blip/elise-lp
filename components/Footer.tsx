"use client";

import { footer, INSTAGRAM_URL, LINKEDIN_URL, EMAIL } from "@/content";

export default function Footer() {
  return (
    <footer
      aria-label="Pied de page"
      style={{ background: "#2A221B", borderTop: "1px solid #3a2e25", padding: "48px 0 32px" }}
    >
      <div
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8"
      >
        {/* Signature */}
        <p
          style={{
            fontFamily: '"Playfair Display", serif',
            fontStyle: "italic",
            fontSize: "1.375rem",
            color: "#F0EBE0",
          }}
        >
          {footer.signature}
        </p>

        {/* Links */}
        <nav aria-label="Liens footer">
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexWrap: "wrap",
              gap: "24px",
              alignItems: "center",
            }}
          >
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: "0.875rem",
                  color: "#F0EBE0",
                  textDecoration: "none",
                  opacity: 0.7,
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.7")}
                aria-label="Instagram d'Elise Colas"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: "0.875rem",
                  color: "#F0EBE0",
                  textDecoration: "none",
                  opacity: 0.7,
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.7")}
                aria-label="LinkedIn d'Elise Colas"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={`mailto:${EMAIL}`}
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: "0.875rem",
                  color: "#F0EBE0",
                  textDecoration: "none",
                  opacity: 0.7,
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.7")}
                aria-label="Email d'Elise Colas"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: "0.875rem",
                  color: "#F0EBE0",
                  textDecoration: "none",
                  opacity: 0.7,
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.7")}
                aria-label="Mentions légales"
              >
                Mentions légales
              </a>
            </li>
          </ul>
        </nav>

        {/* Copyright */}
        <p
          style={{
            fontFamily: '"Inter", sans-serif',
            fontSize: "0.8125rem",
            color: "#F0EBE0",
            opacity: 0.4,
          }}
        >
          {footer.copyright}
        </p>
      </div>
    </footer>
  );
}
