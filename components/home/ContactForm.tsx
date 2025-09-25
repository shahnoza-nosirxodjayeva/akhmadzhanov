"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [accepted, setAccepted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!accepted) return;
    console.log({ name, email, message });
    setName("");
    setEmail("");
    setMessage("");
    setAccepted(false);
  };

  return (
    <section className="py-16 px-4 md:px-16 text-gray-700">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        <div  className="ml-6 lg:ml-0 mb-6 flex-1 space-y-4">
          <h2 className="font-sans text-4xl prata mb-6">Мои контакты</h2>
          <p>+998930014820</p>
          <p>
            Instagram ➔{" "}
            <a
              href="https://www.instagram.com/a_adxam_a/"
              target="_blank"
              className="underline text-gray-700"
            >
              @a_adxam_a
            </a>
          </p>
          <p>
            Behance ➔{" "}
            <a
              href="https://www.behance.net/akhmadzhanov"
              target="_blank"
              className="underline text-gray-700"
            >
              @akhmadzhanov
            </a>
          </p>
          <p>
            Telegram ➔{" "}
            <a
              href="https://t.me/Akhmadzhanovi4"
              target="_blank"
              className="underline text-gray-700"
            >
              @Akhmadzhanovi4
            </a>
          </p>
        </div>

        <form 
          className="ml-6 lg:ml-0 flex-1 flex flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Адхам"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-b border-gray-300 focus:outline-none py-2"
            required
          />
          <input
            type="email"
            placeholder="akhmadzhanov.aa@mail.ru"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-b border-gray-300 focus:outline-none py-2"
            required
          />
          <textarea
            placeholder="Ваше сообщение"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border-b border-gray-300 focus:outline-none py-2 resize-none"
            rows={4}
            required
          />

          <label className="flex items-center space-x-2 mt-2">
            <input
              type="checkbox"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
              className="w-4 h-4"
            />
            <span className="ml-2 text-sm text-gray-600">
              Я даю согласие на обработку персональных данных и
              соглашаюсь с условиями: 
              <a
                href="/policy"
                className="ml-2 underline text-gray-700"
              >
                Политика конфиденциальности
              </a>
            </span>
          </label>

          <button
            type="submit"
            disabled={!accepted}
            className={`mt-4 w-34 py-3 text-white text-md  rounded-full transition-colors  ${
              accepted ? "bg-black hover:bg-gray-800" : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            ОТПРАВИТЬ
          </button>
        </form>
      </div>
    </section>
  );
}
