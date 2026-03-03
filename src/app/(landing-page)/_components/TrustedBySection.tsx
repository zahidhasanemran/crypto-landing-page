import Image from "next/image"

import { Heading } from "@/components/ui/heading"

type BrandLogo = {
  id: string
  src: string
  alt: string
  width: number
  height: number
}

const TRUSTED_BRANDS: BrandLogo[] = [
  {
    id: "go-ipsum",
    src: "/images/go-ipsum-brand.png",
    alt: "Goloipsum",
    width: 188,
    height: 32,
  },
  {
    id: "brand-2",
    src: "/images/brand-2.png",
    alt: "Logoipsum",
    width: 132,
    height: 32,
  },
  {
    id: "brand-3",
    src: "/images/brand-3.png",
    alt: "Logoipsum",
    width: 131,
    height: 32,
  },
  {
    id: "brand-4",
    src: "/images/brand-4.png",
    alt: "Logoipsum",
    width: 124,
    height: 32,
  },
  {
    id: "brand-5",
    src: "/images/brand-5.png",
    alt: "Logoipsum",
    width: 118,
    height: 32,
  }

]

const TrustedBySection = () => {
  return (
    <section
      className="section-y bg-black-100"
      aria-labelledby="trusted-by-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <Heading
          as="h6"
          level="h6"
          id="trusted-by-heading"
          className="text-center text-white-100"
        >
          Trusted by top <span className="text-primary-100">crypto platforms</span>
        </Heading>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:gap-x-12 lg:gap-x-14">
          {TRUSTED_BRANDS.map((brand) => (
            <div
              key={brand.id}
              className="flex items-center justify-center opacity-85 transition-opacity duration-200 hover:opacity-100"
            >
              <Image
                src={brand.src}
                alt={brand.alt}
                width={brand.width}
                height={brand.height}
                className="h-8 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustedBySection
