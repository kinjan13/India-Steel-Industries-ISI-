import React, { useEffect, useRef, useState } from "react";
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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Fade-in effect for second section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* HERO CAROUSEL */}
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

              {/* Dots for navigation */}
        <div className="dots">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === current ? "active" : ""}`}
              onClick={() => setCurrent(i)}
            ></span>
          ))}
        </div>
            </div>
          ))}
        </div>

        
      </section>

      {/* FADE-IN STEEL INFO SECTION */}
      <section
        ref={sectionRef}
        className={`fade-in-section ${isVisible ? "visible" : ""}`}
      >
        <div className="steel-info">
          <div className="text-content " >
            <h2 >
              Centre of <br />
              <span >Structural Steel</span>
            </h2>
            <p>
              INDIAN STEEL INDUSTRIES is a trusted name in the field of steel
              manufacturing and trading. Established in 1976, the company has
              steadily grown from a mid-sized steel supplier into one of the
              most recognized enterprises in the Indian steel sector. Our core
              business includes the import, export, stock, and supply of
              high-quality Pipes, Tubes, and Structural Steel products, serving
              diverse industries across infrastructure, construction, and
              engineering.
            </p>
            <button className="read-more">READ MORE</button>
          </div>

          <div className="image-frame">
            <div className="image-content">
              <img src="/assets/steel.jpg" alt="Structural Steel" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
