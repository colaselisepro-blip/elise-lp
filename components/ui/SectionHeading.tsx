interface SectionHeadingProps {
  eyebrow?: string;
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
}

export default function SectionHeading({
  eyebrow,
  children,
  className = "",
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      {eyebrow && (
        <p
          className="text-sm tracking-widest uppercase mb-3"
          style={{
            fontFamily: '"Playfair Display", serif',
            fontStyle: "italic",
            color: "#6B5E4F",
            letterSpacing: "0.12em",
          }}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className="leading-tight"
        style={{
          fontSize: "clamp(2rem, 4vw, 3.25rem)",
          fontFamily: '"Inter", sans-serif',
          fontWeight: 700,
          color: "#2A221B",
          lineHeight: 1.15,
        }}
      >
        {children}
      </h2>
    </div>
  );
}
