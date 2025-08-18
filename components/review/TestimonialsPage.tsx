"use client";

import Image from "next/image";
import { testimonialsData } from "@/data/testimonialsData";
import { Star } from "lucide-react";
import Logo from "@/components/layout/Logo";

export default function TestimonialsPage() {
  return (
    <>
    <Logo/>
    <div className="container max-w-7xl mx-auto px-4 mt-12 py-2">
      <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonialsData.map((item) => (
          <div key={item.id} className="relative group overflow-hidden">
            <div className="relative">
              <div className="h-68 w-full rounded-md overflow-hidden">
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-1200 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.bgImage})` }}
                />
              </div>
            </div>

            <div className="relative -translate-y-12 w-[92%] mx-auto bg-white rounded-md shadow-md p-4 flex flex-col space-y-3">
              <p className="font-semibold                        text-gray-800 text-lg">
                {item.title}
              </p>
              <p className="text-sm text-gray-500">{item.review}</p>

              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center space-x-2">
                  {item.avatar ? (
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#A1887F] via-[#D7CCC8] to-[#EEEEEE]" />
                  )}
                  <span className="text-sm font-medium text-gray-700">
                    {item.name}
                  </span>
                </div>

                <div className="flex items-center space-x-1 text-yellow-400">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="text-sm font-semibold">{item.rating}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
