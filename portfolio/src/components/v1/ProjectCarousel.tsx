import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import styles from "./ProjectCarousel.module.css";

type Slide = {
  /** Image source (absolute or relative). You can still prefix with import.meta.env.BASE_URL outside. */
  src: string;
  /** Accessible alt text for the image */
  alt?: string;
  /** Caption heading */
  title?: string;
  /** Caption body text */
  text?: string;
};

export default function ProjectCarousel({
  slides,
  initialIndex = 0,
  captionPosition = "bottom-left", // "bottom-left" | "bottom-right" | "top-left" | "top-right" | "center"
  height = "60vh", // any CSS height: "60vh", "480px", etc.
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
}) {
  const [index, setIndex] = useState(initialIndex);

  return (
    <Carousel
      interval={5000}
      activeIndex={index}
      onSelect={(i) => setIndex(i)}
      className={styles.carouselRoot}
      // You can add fade if you prefer: variant doesn't change controls color; we do that in CSS.
      // fade
    >
      {slides.map((s, i) => (
        <Carousel.Item key={i} className={styles.carouselItem}>
          {/* Aspect/size wrapper so the image can reliably cover */}
          <div className={styles.slideBox} style={{ height }}>
            <img
              className={styles.slideImage}
              src={s.src}
              alt={s.alt ?? s.title ?? `Slide ${i + 1}`}
            />
          </div>

          {(s.title || s.text) && (
            <Carousel.Caption
              className={`${styles.caption} ${styles[captionPosition]}`}
            >
              {s.title && <h3 className={styles.captionTitle}>{s.title}</h3>}
              {s.text && <p className={styles.captionText}>{s.text}</p>}
            </Carousel.Caption>
          )}
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
