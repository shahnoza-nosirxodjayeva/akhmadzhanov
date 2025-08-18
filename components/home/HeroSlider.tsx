"use client";

import { useState, useEffect } from "react";

const images = [
  "/images/project-1/2.jpg",
  "/images/project-1/1.jpg",
  "/images/project-2/1.jpg",
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-slider">
      {images.map((img, index) => {
        const isActive = index === current;
        const zoomAnim = index % 2 === 0 ? "zoomIn" : "zoomOut";

        return (
          <div
            key={index}
            className={`slide z-0 ${isActive ? "active" : ""} ${zoomAnim}`}
            style={{
              backgroundImage: `url(${img})`,
            }}
          />
        );
      })}
      <div className="flex justify-center items-center w-[100vw] h-[100vh]">
        <h1 data-aos="fade-up" data-aos-anchor-placement="center-center" 
        className="royale z-50 h1-royale text-6xl md:text-7xl lg:text-8xl text-white mb-[6rem]">AKHMADZHANOV</h1>
      </div>
    </div>
  );
}
