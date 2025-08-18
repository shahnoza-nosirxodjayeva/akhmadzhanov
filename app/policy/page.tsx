// app/privacy/page.tsx
"use client";

export default function PrivacyPage() {
  return (
    <main data-aos="fade-up" className="max-w-3xl mx-auto px-4 pt-24 py-12 text-gray-700">
      <h1 className="text-5xl font-normal mb-12 text-center prata">Политика конфиденциальности</h1>

      <p className="mb-4">
        Мы ценим вашу конфиденциальность. Эта политика объясняет, какие личные данные мы собираем через нашу форму,
        как мы их используем и защищаем.
      </p>

      <h2 className="text-xl font-medium mt-6 mb-2">1. Какие данные мы собираем</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Имя и фамилия</li>
        <li>Адрес электронной почты</li>
        <li>Любые дополнительные данные, которые вы отправляете через форму</li>
      </ul>

      <h2 className="text-xl font-medium mt-6 mb-2">2. Как мы используем ваши данные</h2>
      <p className="mb-4">
        Собранные данные используются только для связи с вами и для улучшения нашего сервиса.
      </p>

      <h2 className="text-xl font-medium mt-6 mb-2">3. Как мы храним ваши данные</h2>
      <p className="mb-4">
        Данные хранятся на защищённых серверах, и мы принимаем меры безопасности для защиты ваших данных от несанкционированного доступа.
      </p>

      <h2 className="text-xl font-medium mt-6 mb-2">4. Права пользователя</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Просматривать свои данные</li>
        <li>Исправлять или обновлять их</li>
        <li>Запросить удаление своих данных</li>
      </ul>

      <h2 className="text-xl font-medium mt-6 mb-2">5. Контакты</h2>
      <p>
        Если у вас есть вопросы о нашей политике конфиденциальности или вы хотите удалить свои данные, свяжитесь с нами по
        электронной почте: <span className="font-medium">akhmadzhanov.aa@mail.ru</span>
      </p>
    </main>
  );
}
