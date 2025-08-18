import type { Metadata } from "next";
import Logo from "@/components/layout/Logo";
import PricingCards from "@/components/service/PricingCards";
import ServicesSlider from "@/components/service/ServicesSlider";
import ServiceTextBlock from "@/components/service/ServiceTextBlock";

export const metadata: Metadata = {
  title: "Our Services | Akhmadzhanov Architecture & Design",
  description:
    "Discover architectural and design services by Akhmadzhanov Architecture & Design. Explore our service packages, pricing options, and tailored solutions for your projects.",
  keywords: [
    "architecture services",
    "design solutions",
    "interior design",
    "Akhmadzhanov Architecture",
    "pricing architecture",
  ],
  openGraph: {
    title: "Our Services | Akhmadzhanov Architecture & Design",
    description:
      "Explore services and pricing packages from Akhmadzhanov Architecture & Design. Professional solutions for your architecture and design needs.",
    url: "https://your-domain.com/services",
    siteName: "Akhmadzhanov Architecture & Design",
    images: [
      {
        url: "/images/service-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Akhmadzhanov Architecture Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <Logo />
      <div className="container justify-center m-auto">
        <ServicesSlider />
        <ServiceTextBlock />
        <PricingCards />
      </div>
    </>
  );
}
