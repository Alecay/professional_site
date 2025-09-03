import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import styles from "./ProjectCarousel.module.css";

// --- Slide type definitions ---
type Slide =
  | { kind: "image"; src: string; alt?: string; title?: string; text?: string }
  | { kind: "video"; src: string; title?: string; text?: string } // direct MP4/WebM URL
  | {
      kind: "youtube";
      videoId: string; // e.g., "dQw4w9WgXcQ"
      title?: string;
      text?: string;
      startSeconds?: number;
      loop?: boolean;
      mute?: boolean;
      controls?: boolean;
    };

// --- Helper to render the right media type ---
function SlideMedia({ slide, active }: { slide: Slide; active: boolean }) {
  if (slide.kind === "image") {
    return (
      <img
        className={styles.slideImage}
        src={slide.src}
        alt={slide.alt ?? slide.title ?? ""}
      />
    );
  }

  if (slide.kind === "video") {
    return (
      <video
        className={styles.slideImage}
        src={slide.src}
        autoPlay={active}
        muted
        loop
        playsInline
      />
    );
  }

  // YouTube
  const {
    videoId,
    startSeconds = 0,
    loop = true,
    mute = true,
    controls = false,
  } = slide;

  const src = active
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=${
        mute ? 1 : 0
      }&controls=${controls ? 1 : 0}&start=${startSeconds}&loop=${
        loop ? 1 : 0
      }&playlist=${loop ? videoId : ""}&playsinline=1&rel=0&modestbranding=1`
    : undefined;

  return (
    <div className={styles.youtubeWrap}>
      {src && (
        <iframe
          className={styles.youtubeFrame}
          src={src}
          title={slide.title ?? "YouTube video"}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
}

// --- Main carousel component ---
export default function ProjectCarousel({
  slides,
  initialIndex = 0,
  captionPosition = "bottom-left", // "bottom-left" | "bottom-right" | "top-left" | "top-right" | "center"
  height = "60vh",
  interval = 15000, // slide timing in ms
}: {
  slides: Slide[];
  initialIndex?: number;
  captionPosition?:
    | "bottom-left"
    | "bottom-right"
    | "top-left"
    | "top-right"
    | "center";
  height?: string;
  interval?: number;
}) {
  const [index, setIndex] = useState(initialIndex);

  return (
    <Carousel
      interval={interval}
      activeIndex={index}
      onSelect={(i) => setIndex(i)}
      className={styles.carouselRoot}
    >
      {slides.map((s, i) => (
        <Carousel.Item key={i} className={styles.carouselItem}>
          <div className={styles.slideBox} style={{ height }}>
            <SlideMedia slide={s} active={i === index} />
          </div>

          {(s as any).title || (s as any).text ? (
            <Carousel.Caption
              className={`${styles.caption} ${styles[captionPosition]}`}
            >
              {(s as any).title && (
                <h3 className={styles.captionTitle}>{(s as any).title}</h3>
              )}
              {(s as any).text && (
                <p className={styles.captionText}>{(s as any).text}</p>
              )}
            </Carousel.Caption>
          ) : null}
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
