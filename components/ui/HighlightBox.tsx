"use client";

interface HighlightBoxProps {
  children: React.ReactNode;
  className?: string;
}

export default function HighlightBox({ children, className = "" }: HighlightBoxProps) {
  return (
    <span
      className={`highlight-gold ${className}`}
      style={{
        background: "#D4A047",
        color: "#F0EBE0",
        padding: "2px 10px",
        transform: "rotate(-1.5deg)",
        display: "inline-block",
        fontFamily: '"Inter", sans-serif',
        fontWeight: 700,
      }}
    >
      {children}
    </span>
  );
}
