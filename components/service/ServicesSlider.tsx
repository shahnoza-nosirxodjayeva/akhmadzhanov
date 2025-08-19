"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/images/project-3/1.jpg",
  "/images/project-3/2.jpg",
  "/images/project-3/4.jpg",
  "/images/project-3/3.jpg",
];

export default function ServicesSlider() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
      setFade(true);
    }, 800);
  };

  const prevSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + images.length) % images.length);
      setFade(true);
    }, 1000);
  };

  return (
    <div className="relative  w-full max-w-6xl m-auto py-12 px-4">
      <div data-aos="fade-up" className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl prata text-gray-800 mb-2">
          Услуги и цены
        </h2>
        <p className=" text-sm md:text-base">
          Здесь вы можете посмотреть информацию о пакетах услуг и стоимости
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 items-center">
        <div data-aos="fade-up" className="md:col-span-1 mb-8">
          <h2 className="text-4xl md:text-5xl prata text-gray-800 mb-8">
            Художественная визуализация
          </h2>
          <p className="mb-4">
            Вы можете заказать Визуализации Вашего проекта написав мне в
            Инстаграм или Telegram
          </p>

          <h3 className="text-lg mb-2">Стоимость визуализации</h3>
          <p className="mb-4">220.000 сум/ метр²</p>

          <h3 className="text-lg mb-2">В пакет входят:</h3>
          <ul className="ml-4 list-disc list-inside space-y-2">
            <li>Сборщик сцены</li>
            <li>
              3D модели (не считая сложного дополнительного моделирования)
            </li>
            <li>2 круга правок</li>
            <li>Великолепный результат</li>
          </ul>
        </div>

        <div className="md:col-span-2 w-full">
          <div className="w-full h-[400px] sm:h-[650px] lg:h-[860px] overflow-hidden shadow-md relative">
            <img
              key={current}
              src={images[current]}
              alt={`Slide ${current + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out
                ${fade ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
            />
          </div>

          <div className="flex justify-center items-center gap-6 mt-4">
            <button onClick={prevSlide} className="p-2">
              <ChevronLeft className="h-6 w-6 text-gray-800 hover:text-gray-500 transition" />
            </button>

            <span className="text-sm font-medium text-gray-700">
              {current + 1} / {images.length}
            </span>

            <button onClick={nextSlide} className="p-2">
              <ChevronRight className="h-6 w-6 text-gray-800 hover:text-gray-500 transition" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
