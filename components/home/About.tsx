"use client";
import Image from "next/image";

export default function About() {
  return (
    <section className="py-[10rem] px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center md:justify-start">
          <div className="relative w-full max-w-md lg:max-w-lg aspect-[4/5]">
            <Image
              src="/images/about/me.jpg"
              alt="About me"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-4xl text-gray-800">
            Аҳмаджанов Адҳам
          </h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium my-4">
            Обо мне
          </h2>
          <p className="text-gray-600 text-lg my-12 leading-relaxed">
            Меня зовут Адҳам. Я — визуализатор с архитектурным образованием.
            После окончания университета понял, что моя сила — в создании
            реалистичных и продуманных визуализаций. Архитектура <br /> дала мне
            основу, композиция структуру, а практический подход чёткий метод.
          </p>
        </div>
      </div>
    </section>
  );
}
