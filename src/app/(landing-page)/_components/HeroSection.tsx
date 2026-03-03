import Image from "next/image"

import Button from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Text } from "@/components/ui/text"

const HeroSection = () => {
  return (
    <section className="section-y relative overflow-hidden bg-black-100">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="order-1 w-full text-center sm:text-left">
            <Heading
              as="h6"
              level="h6"
              className="mb-4 inline-flex rounded-full border border-primary-10 bg-primary-10 px-4 py-2 text-primary-100 sm:px-5"
            >
              Future of crypto trading
            </Heading>

            <Heading
              as="h1"
              level="h1"
              className="text-balance text-[length:var(--type-heading-h2-size)] leading-[var(--type-heading-h2-line)] tracking-[var(--type-heading-h2-tracking)] text-white-100 sm:text-[length:var(--type-heading-h1-size)] sm:leading-[var(--type-heading-h1-line)] sm:tracking-[var(--type-heading-h1-tracking)]"
            >
              Fast and Secure Cryptocurrency Exchange
            </Heading>

            <Text
              size="md"
              className="mt-4 mx-auto max-w-[36ch] text-pretty text-white-80 sm:mx-0 sm:mt-5 sm:max-w-xl xl:max-w-136"
            >
              Trade cryptocurrencies with ease, security, and advanced features
              on our cutting-edge platform.
            </Text>

            <div className="mt-7 flex justify-center sm:mt-9 sm:justify-start">
              <Button
                text="Explore more"
                icon={<span className="text-[1.2rem] leading-none">→</span>}
                className="w-full max-w-52 justify-center rounded-xl px-6 py-3.5 tracking-normal sm:w-auto sm:px-8 sm:py-4"
              />
            </div>
          </div>
          <div className="order-2 mx-auto w-full max-w-80 sm:max-w-110 lg:max-w-146">
            <Image
              src="/images/hero-image.png"
              alt="Hand holding a crypto trading app with floating cards"
              width={584}
              height={582}
              priority
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
