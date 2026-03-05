
import Image from "next/image"

import Button from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Text } from "@/components/ui/text"

const CTA_CONTENT = {
  title: "Crypgo powered by framer platform",
  description:
    "Our landing page empower framer developers to have free, safer and more trustworthy experiences",
  buttonLabel: "Get template",
}

const Cta = () => {
  return (
    <section className="section-y bg-black-100" aria-labelledby="cta-title">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl border border-white-10 bg-white-5 px-7.5 py-12 lg:px-12.5 lg:py-12">
          <div className="absolute inset-y-0 right-0 hidden w-1/3 lg:block">
            <Image
              src="/images/cta-bg.png"
              alt=""
              fill
              aria-hidden
              className="object-cover object-right"
            />
          </div>

          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center py-4">
            <div className="w-full lg:w-4/6">
              <Heading
                as="h2"
                level="h2"
                id="cta-title"
                className="max-w-3xl text-white-100"
              >
                {CTA_CONTENT.title}
              </Heading>
              <Text size="md" className="mt-3 max-w-2xl text-white-60">
                {CTA_CONTENT.description}
              </Text>
            </div>

            <div className="flex w-full lg:w-2/6 lg:justify-end">
              <Button
                text={CTA_CONTENT.buttonLabel}
                icon={<span className="text-[1.15rem] leading-none">→</span>}
                className="w-full max-w-52 justify-center rounded-xl px-6 py-3.5 text-[1.125rem] sm:w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cta
