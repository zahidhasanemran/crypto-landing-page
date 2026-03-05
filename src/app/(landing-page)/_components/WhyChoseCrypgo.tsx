import Image from "next/image"

import { Heading } from "@/components/ui/heading"

type WhyChooseItem = {
  id: string
  title: string
  iconSrc: string
  iconAlt: string
}

const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    id: "designed-platforms",
    title: "Designed for crypto trading platforms",
    iconSrc: "/images/anchor-icon.svg",
    iconAlt: "Chain link icon",
  },
  {
    id: "kickstart-website",
    title: "Kickstart your crypto website today",
    iconSrc: "/images/flash-icon.png",
    iconAlt: "Flash icon",
  },
  {
    id: "launch-blockchain",
    title: "Launch your blockchain platform today",
    iconSrc: "/images/settings-icon.svg",
    iconAlt: "Settings icon",
  },
]

const WhyChoseCrypgo = () => {
  return (
    <section
      className="section-y relative overflow-hidden bg-black-100"
      aria-labelledby="why-chose-crypgo-title"
    >
      <div className="container relative mx-auto px-4 sm:px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-12">
          <div className="w-full lg:w-1/2 py-12">
            <Heading as="h6" level="h6" className="text-white-100">
              Why choose <span className="text-primary-100">crypgo</span>
            </Heading>

            <Heading
              as="h2"
              level="h2"
              id="why-chose-crypgo-title"
              className="mt-4 max-w-2xl text-white-100"
            >
              Features of the crypto framer mobile application
            </Heading>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-12">
              {WHY_CHOOSE_ITEMS.map((item) => (
                <article
                  key={item.id}
                  className="flex w-full items-start gap-4 sm:w-[calc(50%-1rem)]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white-5">
                    <Image
                      src={item.iconSrc}
                      alt={item.iconAlt}
                      width={20}
                      height={20}
                      className="h-5 w-5 object-contain"
                    />
                  </div>

                  <Heading as="h3" level="h6" className="max-w-60 text-white-100">
                    {item.title}
                  </Heading>
                </article>
              ))}
            </div>
          </div>

          <div className="relative w-full lg:w-1/2">
            <div className="relative mx-auto max-w-160">
              <Image
                src="/images/why-chose-right-side-img-bg.png"
                alt="Multiline crypto market chart"
                width={776}
                height={394}
                className="h-auto w-full object-contain"
              />
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <Image
                  src="/images/crypto-card.png"
                  alt="Crypto portfolio growth card"
                  width={495}
                  height={476}
                  className="h-auto w-[75%] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChoseCrypgo
