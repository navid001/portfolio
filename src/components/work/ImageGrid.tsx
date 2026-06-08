import Image from "next/image";

interface GridImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageGridProps {
  images: GridImage[];
  columns?: 1 | 2 | 3;
  fullBleed?: boolean;
}

export function ImageGrid({ images = [], columns = 2, fullBleed = false }: ImageGridProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: "1rem",
        margin: "2rem 0",
        ...(fullBleed && {
          marginLeft: "calc(-50vw + 50%)",
          marginRight: "calc(-50vw + 50%)",
          width: "100vw",
        }),
      }}
    >
      {images.map(({ src, alt, caption }, i) => (
        <figure key={i} style={{ margin: 0 }}>
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "16 / 10",
              borderRadius: 4,
              overflow: "hidden",
              border: "1px solid var(--hairline)",
            }}
          >
            <Image
              src={src}
              alt={alt}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          {caption && (
            <figcaption
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: 11,
                color: "var(--quiet)",
                marginTop: "0.5rem",
                letterSpacing: "0.04em",
              }}
            >
              {caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}

interface SingleImageProps {
  src: string;
  alt: string;
  caption?: string;
  fullBleed?: boolean;
  priority?: boolean;
}

export function SingleImage({ src, alt, caption, fullBleed = false, priority = false }: SingleImageProps) {
  return (
    <figure
      style={{
        margin: "2rem 0",
        ...(fullBleed && {
          marginLeft: "calc(-50vw + 50%)",
          marginRight: "calc(-50vw + 50%)",
          width: "100vw",
        }),
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "16 / 9",
          borderRadius: fullBleed ? 0 : 4,
          overflow: "hidden",
          border: fullBleed ? "none" : "1px solid var(--hairline)",
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          style={{ objectFit: "cover" }}
          sizes="100vw"
          priority={priority}
        />
      </div>
      {caption && (
        <figcaption
          style={{
            fontFamily: "var(--font-mono), monospace",
            fontSize: 11,
            color: "var(--quiet)",
            marginTop: "0.5rem",
            letterSpacing: "0.04em",
            padding: fullBleed ? "0 1.5rem" : 0,
          }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
