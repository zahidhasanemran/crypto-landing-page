import Image from "next/image"

import { Heading } from "@/components/ui/heading"
import { Text } from "@/components/ui/text"

type UpgradeItem = {
  id: string
  title: string
}

const UPGRADE_ITEMS: UpgradeItem[] = [
  { id: "secure", title: "100% secure" },
  { id: "free-giga", title: "Free giga file" },
  { id: "affordable", title: "A fraction of the cost" },
  { id: "powerful", title: "Powerful in performance" },
  { id: "durable", title: "More durable" },
  { id: "designed", title: "Designed for crypto" },
  { id: "easy", title: "Easier to use" },
  { id: "template", title: "100% free framer template" },
]

const CryptoUpgrade = () => {
  return (
    <section
      className="section-y relative overflow-hidden bg-black-100"
      aria-labelledby="crypto-upgrade-title"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col gap-6 xl:gap-12 lg:flex-row lg:items-center">
          <div className="order-2 w-full lg:order-1 lg:w-1/2">
            <Heading as="h5" level="h5" className="text-white-100">
              Crypgo <span className="text-primary-100">upgrade</span>
            </Heading>

            <Heading
              as="h2"
              level="h2"
              id="crypto-upgrade-title"
              className="mt-3 max-w-xl text-white-100"
            >
              Upgrade your crypto business
            </Heading>

            <Text size="md" className="mt-4 max-w-xl text-white-60">
              Get faster, safer, more affordable cloud object storage with no central
              point of failure.
            </Text>

            <div className="mt-8 grid grid-cols-1 gap-x-3 gap-y-4 sm:grid-cols-2">
              {UPGRADE_ITEMS.map((item) => (
                <article key={item.id} className="flex items-center gap-3">
                  <Image
                    src="/images/tik-icon.png"
                    alt=""
                    aria-hidden
                    width={20}
                    height={20}
                    className="h-5 w-5 shrink-0 object-contain"
                  />
                  <Heading as="h6" level="h6" className="text-white-100">
                    {item.title}
                  </Heading>
                </article>
              ))}
            </div>
          </div>

          <div className="order-1 w-full lg:order-2 lg:w-1/2">
            <Image
              src="/images/upgrade-crypto.png"
              alt="Crypto trading dashboard with market chart and growth cards"
              width={606}
              height={561}
              className="mx-auto h-auto w-full max-w-151.5 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CryptoUpgrade
