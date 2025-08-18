import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";
import Logo from "@/components/layout/Logo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: " Architecture & Design",
  description:
    "Akhmadzhanox Architecture & Design portfolio. Современные архитектурные проекты, услуги по интерьеру и экстерьеру. Discover modern architectural projects, interior & exterior design services.",
  keywords: [
    "Akhmadzhanov",
    "architecture design",
    "portfolio",
    "interior design",
    "exterior design",
    "architectural projects",
    "services",
    "Akhmadzhanov",
    "arxitektura dizayn",
    "portfolio",
    "interyer dizayn",
    "eksteryer dizayn",
    "arxitektura loyihalari",
    "xizmatlar",
    "Akhmadzhanov",
    "архитектурный дизайн",
    "портфолио",
    "интерьерный дизайн",
    "экстерьерный дизайн",
    "архитектурные проекты",
    "услуги",
  ],
  openGraph: {
    title: "Akhmadzhanox Architecture & Design Portfolio",
    description:
      "Ознакомьтесь с нашими последними архитектурными и дизайнерскими проектами. Explore our latest architectural and design works.",
    url: "https://yourdomain.com/portfolio",
    siteName: "Akhmadzhanox Architecture & Design",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Akhmadzhanox Architecture Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


export default function PortfolioPage() {
  return (
    <>
      <Logo />
      <div className="container max-w-8xl  mx-auto p-6 grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-3 lg:gap-5">
        {portfolioData.map((project) => (
          <Link
          data-aos="fade-up"
            key={project.id}
            href={`/portfolio/${project.id}`}
            className="text-center overflow-hidden"
          >
            <div className="aspect-square">
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="py-3 group">
              <h2 className="relative m-auto text-sm md:text-md lg:text-lg w-fit">
                {project.title}
                <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] w-0 bg-gray-600 transition-all duration-300 group-hover:w-full"></span>
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
