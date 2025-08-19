import { notFound } from "next/navigation";
import { portfolioData } from "@/data/portfolioData";
import PortfolioDetailClient from "@/components/portfolio/PortfolioDetailClient";

type Params = { id: string };

export async function generateStaticParams(): Promise<Params[]> {
  return portfolioData.map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { id } = await params;
  const item = portfolioData.find((p) => String(p.id) === id);
  return {
    title: item ? `${item.title} – Portfolio` : "Portfolio item",
    description:  "Portfolio item",
  };
}
export default async function Page({ params }: { params: Promise<Params> }) {
  const { id } = await params;

  const item = portfolioData.find((p) => String(p.id) === id);
  if (!item) return notFound();

  return <PortfolioDetailClient project={item} />;
}
