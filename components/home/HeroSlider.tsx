"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/images/project-1/2.webp",
  "/images/project-1/1.webp",
  "/images/project-2/1.webp",
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
    >
      <Image
        src={img}
        alt={`Slide ${index}`}
        fill
        priority={index === 0} 
        quality={100} 
        className="object-cover"
      />
    </div>
  );
})}
      <div className="flex justify-center items-center w-[100vw] h-[100vh]">
        <h1 data-aos="fade-up" data-aos-anchor-placement="center-center" 
        className="royale z-50 h1-royale text-3xl md:text-7xl lg:text-8xl text-white mb-[6rem]">AKHMADZHANOV</h1>
      </div>
    </div>
  );
}
