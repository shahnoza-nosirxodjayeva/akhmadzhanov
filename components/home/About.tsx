"use client";
import { useState, useEffect } from "react";

export default function About() {
  const leftImages = [
    "/images/project-2/1.jpg",
    "/images/project-2/2.jpg",
    "/images/project-2/3.jpg",
  ];

  const rightImages = [
    "/images/project-2/4.jpg",
    "/images/project-2/5.jpg",
    "/images/project-2/6.jpg",
  ];

  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLeftIndex((prev) => (prev + 1) % leftImages.length);
      setRightIndex((prev) => (prev + 1) % rightImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-[120px] px-4 md:px-0">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0">
        <div data-aos="fade-up" className="hidden xl:block relative overflow-hidden w-full xl:w-[450px] xl:h-[650px] rounded-br-[240px]">
          {leftImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Left image ${index}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === leftIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        <div data-aos="fade-up" className=" mx-8 flex-1 max-w-full lg:max-w-[500px] text-left">
          <h4 className="text-lg sm:text-xl md:text-2xl">
            Аҳмаджанов Адҳам
          </h4>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-medium my-4">
            Обо мне
          </h2>
          <p className="text-base lg:text-md mt-6">
            Меня зовут Адҳам. Я — визуализатор с архитектурным образованием.
            После окончания университета понял, что моя сила — в создании
            реалистичных и продуманных визуализаций. Архитектура
            <br />
             дала мне
            основу, композиция структуру, а практический подход чёткий метод.
          </p>
        </div>

        <div data-aos="fade-up" className="relative overflow-hidden w-full lg:w-[450px] lg:h-[650px] rounded-tl-[240px]">
          {rightImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Right image ${index}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === rightIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>

      <div data-aos="fade-up" className="lg:hidden mt-8 relative w-full h-[400px] sm:h-[500px] overflow-hidden">
        {rightImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Right image ${index}`}
            className={`absolute top-0 left-0 w-full h-full object-cover rounded-none transition-opacity duration-1000 ${
              index === rightIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
