import { useState } from "react";
import "../components/styles/hero.css";

import mannequin1 from "../assets/mannequin 1.png";
import mannequin2 from "../assets/mannequin 2.png";
import mannequin3 from "../assets/mannequin 3.png";
import mannequin4 from "../assets/mannequin 4.png";
import mannequin5 from "../assets/mannequin 5.png";

export default function Hero() {
  // All images
  const images = [
    mannequin1,
    mannequin2,
    mannequin3,
    mannequin4,
    mannequin5,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const nextImage = () => {
    setIsFading(true);

    setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
      setIsFading(false);
    }, 300); // MUST match CSS transition time
  };

  return (
    <section className="hero">
      {/* CURVED BACKGROUND */}
      <div className="hero-curve"></div>

      {/* LEFT */}
      <div className="hero-left">
        <h1>MANNEQUIN</h1>
        <p className="subtitle">Brings Your Products To Life</p>
        <h2>Turning Display Into Experience</h2>
        <button className="buy-btn">BUY NOW</button>
      </div>

      {/* RIGHT */}
      <div className="hero-right">
        <img
          src={images[currentIndex]}
          alt="Mannequin"
          className={`mannequin-img ${
            isFading ? "fade" : ""
          }`}
        />

        {/* RIGHT ARROW */}
        <button className="arrow-btn" onClick={nextImage}>
          &#8250;
        </button>

        {/* DOTS */}
        <div className="dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${
                index === currentIndex ? "active" : ""
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
