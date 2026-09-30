"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/common/Container";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(0);
  const [scrollable, setScrollable] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const update = () => {
      const max = Math.max(0, track.scrollWidth - track.clientWidth);
      setScrollable(max > 1);
      setPosition(max ? track.scrollLeft / max : 0);
    };
    update();
    track.addEventListener("scroll", update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(track);
    return () => { track.removeEventListener("scroll", update); observer.disconnect(); };
  }, []);

  const move = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    const max = Math.max(0, track.scrollWidth - track.clientWidth);
    if (max <= 1) return;
    if (direction === 1 && track.scrollLeft >= max - 1) {
      track.scrollTo({ left: 0, behavior: "instant" });
      return;
    }
    if (direction === -1 && track.scrollLeft <= 1) {
      track.scrollTo({ left: max, behavior: "instant" });
      return;
    }
    const card = track.firstElementChild as HTMLElement | null;
    track.scrollBy({ left: direction * ((card?.offsetWidth ?? 240) + 16), behavior: "smooth" });
  };

  return <section className="testimonials" aria-labelledby="testimonials-title">
    <Container>
      <h2 id="testimonials-title">Sample community reviews</h2>
      <div className="testimonials-track" ref={trackRef} aria-label="Sample reviews">
        {testimonials.map((item, index) => <article className="testimonial-card" key={item.id} aria-label={`Sample review ${index + 1}`}>
          <p className="testimonial-person">{item.name} <span>— {item.country}</span></p>
          <blockquote>“{item.review}”</blockquote>
          <time>{item.date}</time>
        </article>)}
      </div>
      <div className="testimonials-controls" aria-label="Testimonial carousel controls">
        <button type="button" aria-label="Previous testimonials" disabled={!scrollable} onClick={() => move(-1)}>‹</button>
        <span className="testimonials-progress" aria-hidden="true"><span style={{ left: `${position * 60}%` }} /></span>
        <button type="button" aria-label="Next testimonials" disabled={!scrollable} onClick={() => move(1)}>›</button>
      </div>
    </Container>
  </section>;
}
