"use client";

import Image from "next/image";
import { Section, SectionHeader } from "@/components/section";
import { FadeUp } from "@/components/motion";
import { IMAGES } from "@/lib/images";

const galleryImages = [
  { src: IMAGES.artistWorking1, alt: "Tattoo artist carefully working on a client's piece", span: "col-span-2 row-span-2" },
  { src: IMAGES.tattooedPerson1, alt: "Person showing detailed tattoo artwork", span: "col-span-1 row-span-1" },
  { src: IMAGES.tattooDetail1, alt: "Close-up of intricate tattoo detail work", span: "col-span-1 row-span-1" },
  { src: IMAGES.gettingTattooed1, alt: "Client getting tattooed in a professional studio", span: "col-span-1 row-span-2" },
  { src: IMAGES.tattooedArm, alt: "Detailed sleeve tattoo artwork", span: "col-span-1 row-span-1" },
  { src: IMAGES.studioInterior, alt: "Modern tattoo studio interior", span: "col-span-1 row-span-1" },
  { src: IMAGES.tattooedPerson2, alt: "Tattooed person portrait", span: "col-span-1 row-span-1" },
  { src: IMAGES.artistWorking2, alt: "Tattoo artist in session", span: "col-span-2 row-span-1" },
];

export function GallerySection() {
  return (
    <Section>
      <FadeUp>
        <SectionHeader
          badge="The Culture"
          title="Built for Studios Like Yours"
          description="From solo artists to multi-chair shops, we power the digital presence of studios across every style and market."
        />
      </FadeUp>

      <FadeUp delay={0.2}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[180px] md:auto-rows-[200px]">
          {galleryImages.map((image, idx) => (
            <div
              key={idx}
              className={`relative rounded-xl overflow-hidden group ${image.span}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              {/* Subtle overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </FadeUp>
    </Section>
  );
}
