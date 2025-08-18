"use client";
import Image from "next/image";
import { pricingData, PricingPlan } from "@/data/pricingData";

export default function PricingCards() {
  return (
    <section className="w-full px-6 py-12 bg-white">
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        {pricingData.map((plan: PricingPlan) => (
          <div  data-aos="fade-up"
            key={plan.id}
            className="flex flex-col bg-white overflow-hidden transition"
          >
            <div className="relative w-full h-124">
              <Image
                src={plan.image}
                alt={plan.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="py-10 flex flex-col flex-1">
              <p className="text-sm text-gray-500 mb-2">TIP №{plan.id}</p>
              <h3 className="text-4xl prata mb-3 text-gray-800">{plan.title}</h3>
              <ul className="mb-4 flex-1 space-y-2 text-gray-700">
                {plan.features.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>
              <p className="mt-10 text-md font-medium">{plan.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
