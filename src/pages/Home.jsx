import React, { useEffect, useState } from "react";
import "./Home.css";

const slides = [
  {
    id: 1,
    title1: "Precision",
    title2: "Metal Casting",
    subtitle: "Crafting Quality with Every PourNon Tincidunt",
    imgBg: "/assets/photo1.png",
  },
  {
    id: 2,
    title1: "Molten",
    title2: "Steel Works",
    subtitle: "High-Temperature Engineering Excellence",
     imgBg: "/assets/photo2.png",
  },
  {
    id: 3,
    title1: "Urban Steel",
    title2: "Roll Production",
    subtitle: "Powering Industrial Strength and Durability",
     imgBg: "/assets/photo3.png",
  },
  {
    id: 4,
    title1: "Advanced",
    title2: "Fabrication",
    subtitle: "Precision Welding for Stronger Futures",
     imgBg: "/assets/photo4.png",
  },
];

function Home() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="home-section">
      <div className="carousel">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.imgBg})` }}
          >
            <div className="slide-overlay">
              <div className="slide-text">
                <h2 className="title1">{slide.title1}</h2>
                <h3 className="title2">{slide.title2}</h3>
                <p className="subtitle">{slide.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Page dots */}
      <div className="dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === current ? "active" : ""}`}
            onClick={() => setCurrent(i)}
          ></span>
        ))}
      </div>
    </section>
  );
}

export default Home;
