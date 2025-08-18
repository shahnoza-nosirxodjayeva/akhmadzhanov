import TestimonialsPage from "@/components/review/TestimonialsPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comments | Akhmadzhanov Architecture & Design",
  description:
    "Client testimonials and reviews for Akhmadzhanox Architecture & Design. Отзывы клиентов и рекомендации о нашей архитектуре и дизайне.",
  keywords: [
    "Akhmadzhanov",
    "architecture testimonials",
    "design reviews",
    "client feedback",
    "architecture services",
    "interior design reviews",
    "arxitektura sharhlari",
    "dizayn izohlari",
    "mijozlar fikrlari",
    "arxitektura xizmatlari",
    "interyer sharhlari",
    "отзывы архитектура",
    "отзывы дизайн",
    "рекомендации клиентов",
    "архитектурные услуги",
    "отзывы интерьер",
  ],
  openGraph: {
    title: "Testimonials | Akhmadzhanox Architecture & Design",
    description:
      "Отзывы и рекомендации наших клиентов. Discover what our clients say about our architecture & design services.",
    url: "https://yourdomain.com/testimonials",
    siteName: "Akhmadzhanox Architecture & Design",
    images: [
      {
        url: "https://yourdomain.com/og-testimonials.jpg",
        width: 1200,
        height: 630,
        alt: "Testimonials Akhmadzhanox Architecture",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


export default function Page() {
  return (
    <>
    <TestimonialsPage/>
    </>
  );
}
