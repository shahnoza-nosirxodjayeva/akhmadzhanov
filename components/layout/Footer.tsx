export default function Footer() {
  return (
    <footer className="container text--gray-900 py-6 text-center m-auto">
      <div className="my-5">
        <a
          href="/policy"
          className="underline text-gray-950 text-xs md:text-sm"
        >
          Политика конфиденциальности
        </a>
      </div>
      <p className="text-xs md:text-sm">
        © {new Date().getFullYear()} Portfolio Akhmadzhanov. All rights reserved.
      </p>
    </footer>
  );
}
