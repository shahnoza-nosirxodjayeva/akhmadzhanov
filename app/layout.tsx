import type { Metadata } from "next";
import "../public/style/globals.css";
import "../public/style/font.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Montserrat } from "next/font/google";
import AOSInit from "@/components/layout/AOSInit";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: {
    default: "Akhmadzhanov", 
    template: "%s | Akhmadzhanov", 
  },
  description: "Architectural service with individual architecture",
  icons: {
    icon: "/images/project-1/1.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <head>
        <link href="https://fonts.cdnfonts.com/css/royale-brone" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/prata" rel="stylesheet" />
      </head>
      <body>
        <AOSInit />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
