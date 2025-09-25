"use client";

import { useEffect, useState } from "react";
import PhotoAlbum from "react-photo-album";
import "react-photo-album/styles.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Logo from "@/components/layout/Logo";

type Project = {
  id: number;
  title: string;
  images: string[];
};

export default function PortfolioDetailClient({ project }: { project: Project }) {
  const [photos, setPhotos] = useState<{ src: string; width: number; height: number }[]>([]);
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    const loadImages = async () => {
      const loaded: { src: string; width: number; height: number }[] = [];
  
      await Promise.all(
        project.images.map(
          (src) =>
            new Promise<void>((resolve) => {
              const img = new Image();
              img.src = src;
              img.onload = () => {
                loaded.push({ src, width: img.width, height: img.height });
                resolve();
              };
            })
        )
      );
  
      setPhotos(loaded); 
    };
  
    loadImages();
  }, [project.images]);

  return (
    <>
      <Logo />
      <div data-aos="fade-up" className="container  max-w-7xl mx-auto mt-[70px]">
        {photos.length > 0 && (
          <PhotoAlbum
            layout="rows"
            photos={photos}
            spacing={4}
            targetRowHeight={300} 
            rowConstraints={{ minPhotos: 2, maxPhotos: 3 }} 
            onClick={({ index }) => setIndex(index)}
          />
        )}

        <Lightbox
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          slides={photos}
          plugins={[Zoom, Fullscreen]}
          animation={{ fade: 700, swipe: 0 }}
        />
      </div>
    </>
  );
}
