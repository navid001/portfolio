import Image from "next/image";
import fs from "fs";
import path from "path";

function hasRealHeadshot(): boolean {
  try {
    const p = path.join(process.cwd(), "public", "headshot-1.png");
    return fs.existsSync(p);
  } catch {
    return false;
  }
}

interface HeadshotPlaceholderProps {
  size?: number;
  className?: string;
}

export function HeadshotPlaceholder({ size = 120, className = "" }: HeadshotPlaceholderProps) {
  const isReal = hasRealHeadshot();

  if (isReal) {
    return (
      <Image
        src="/headshot-1.png"
        alt="Navid Alvi Ahsan"
        width={size}
        height={size}
        className={className}
        style={{
          objectFit: "cover",
          borderRadius: 4,
          filter: "saturate(0.85)",
        }}
        priority
      />
    );
  }

  return (
    <div
      className={className}
      style={{
        width: size,
        height: size,
        backgroundColor: "var(--surface)",
        border: "1px solid var(--hairline)",
        borderRadius: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-display), Georgia, serif",
          fontSize: size * 0.28,
          color: "var(--quiet)",
          letterSpacing: "-0.02em",
          userSelect: "none",
        }}
      >
        NAH
      </span>
    </div>
  );
}
