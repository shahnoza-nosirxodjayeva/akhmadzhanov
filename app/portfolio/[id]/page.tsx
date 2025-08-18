import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { portfolioData } from "@/data/portfolioData";
import PortfolioDetailClient from "../../../components/portfolio/PortfolioDetailClient";

type Props = { params: { id: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = portfolioData.find(p => p.id === Number(params.id));
  if (!project) return { title: "Страница не найдена – Адам" };

  return {
    title: `${project.title} | Portfolio`,
    description:  "Портфолио проекта",
  };
}

export default function Page({ params }: Props) {
  const project = portfolioData.find(p => p.id === Number(params.id));
  if (!project) return notFound();
  return <PortfolioDetailClient project={project} />;
}
