"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [showLinks, setShowLinks] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Главная" },
    { href: "/portfolio", label: "Портфолио" },
    { href: "/review", label: "Отзывы" },
    { href: "/service", label: "Услуги" },
  ];

  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight - 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    setAnimate(false);
    const timer = setTimeout(() => setAnimate(true), 50);
    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    if (showLinks) {
      setShowLinks(false);
    }
  }, [pathname]);

  const isHome = pathname === "/";
  const headerClass = isHome
    ? scrolled || showLinks
      ? "bg-white text-black border-b border-gray-300"
      : "bg-transparent text-white"
    : "bg-white text-black border-b border-gray-300";

  const linkColor =
    isHome && !scrolled && !showLinks
      ? "text-white hover:text-gray-200"
      : "text-black hover:text-gray-600";

  return (
    <header
      className={`fixed top-0 right-0 w-full z-50 py-4 text-[15px] font-light shadow-md transition-all duration-300 ${headerClass} ${
        animate ? "animate-slideDown" : ""
      }`}
    >
      <nav className="container mx-auto flex items-center px-4 relative md:justify-center">
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`transition-colors ${linkColor} ${
                  animate ? "animate-slideDown" : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden flex flex-col ml-auto mr-[20px] justify-center items-center space-y-1 relative z-50 absolute left-4"
          onClick={() => setShowLinks(!showLinks)}
        >
          <span
            className={`block w-6 h-[2px] transition-all duration-300 
    ${showLinks ? "rotate-45 translate-y-[6px] translate-x-[1px]" : ""} 
    ${showLinks || scrolled || !isHome ? "bg-black" : "bg-white"}`}
          ></span>
          <span
            className={`block w-6 h-[2px] transition-all duration-300 
    ${showLinks ? "opacity-0" : ""} 
    ${showLinks || scrolled || !isHome ? "bg-black" : "bg-white"}`}
          ></span>
          <span
            className={`block w-6 h-[2px] transition-all duration-300 
    ${showLinks ? "-rotate-45 -translate-y-[6px]" : ""} 
    ${showLinks || scrolled || !isHome ? "bg-black" : "bg-white"}`}
          ></span>
        </button>

        <ul
          className={`md:hidden absolute top-full left-0 w-full flex flex-col items-center space-y-4 py-6 shadow-md transition-all duration-500 ease-in-out transform ${
            showLinks
              ? "translate-y-0 opacity-100 bg-white"
              : "-translate-y-5 opacity-0 pointer-events-none"
          }`}
        >
          {navLinks.map((link, index) => (
            <li
              key={link.href}
              className={`transform transition-all duration-500 ${
                showLinks
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <Link
                href={link.href}
                className={`transition-colors ${
                  pathname === link.href ? "text-gray-500" : "text-black"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
