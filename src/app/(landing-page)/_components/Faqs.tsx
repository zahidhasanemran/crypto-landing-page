
"use client"

import Image from "next/image"
import { useState } from "react"

import { Heading } from "@/components/ui/heading"
import { Text } from "@/components/ui/text"

type FaqItem = {
  id: string
  question: string
  answer: string
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: "what-is-crypgo",
    question: "What is Crypgo?",
    answer:
      "Crypgo is a modern crypto platform experience for trading, portfolio tracking, and secure asset management in one place.",
  },
  {
    id: "available-worldwide",
    question: "Is Crypgo available worldwide?",
    answer:
      "Crypgo supports users across many regions with broad access and localized flows. Availability may vary based on local regulations.",
  },
  {
    id: "supported-assets",
    question: "Which cryptocurrencies are supported on Crypgo?",
    answer:
      "Crypgo supports major cryptocurrencies and continuously expands listings based on liquidity, reliability, and user demand.",
  },
  {
    id: "security",
    question: "Is my personal information secure with Crypgo?",
    answer:
      "Yes. Crypgo applies strong security practices, including encryption, account protection controls, and continuous monitoring.",
  },
  {
    id: "fees",
    question: "Are there any deposit or withdrawal fees?",
    answer:
      "Fees depend on asset, network, and transaction type. Exact costs are shown transparently before confirmation.",
  },
  {
    id: "advanced-tools",
    question: "Does Crypgo offer advanced trading tools?",
    answer:
      "Yes. Crypgo includes charting, market insights, and advanced order capabilities designed for both new and experienced traders.",
  },
]

const Faqs = () => {
  const [openItem, setOpenItem] = useState<string | null>(null)

  const toggleItem = (id: string) => {
    setOpenItem((current) => (current === id ? null : id))
  }

  return (
    <section className="section-y bg-black-100" aria-labelledby="faqs-title">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <Heading as="h6" level="h6" className="text-white-100">
            Popular <span className="text-primary-100">questions</span>
          </Heading>

          <Heading as="h2" level="h2" id="faqs-title" className="mt-3 text-white-100">
            Learn more about Crypgo
          </Heading>

          <Text size="md" className="mx-auto mt-4 max-w-2xl text-white-60">
            We accept 100+ cryptocurrencies around the world
          </Text>
        </div>

        <div className="mx-auto mt-10 flex max-w-5xl flex-col gap-4 lg:mt-12">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openItem === item.id

            return (
              <article
                key={item.id}
                className="overflow-hidden rounded-2xl border border-white-10 bg-black-10"
              >
                <Heading as="h3" level="h5" className="text-white-100">
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-content-${item.id}`}
                    className="group flex w-full items-center justify-between gap-5 px-6 py-6 text-left sm:px-7"
                  >
                    <span>{item.question}</span>
                    <Image
                      src="/images/plus-icon.svg"
                      alt=""
                      aria-hidden
                      width={18}
                      height={18}
                      className={`h-4.5 w-4.5 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
                    />
                  </button>
                </Heading>

                <div
                  id={`faq-content-${item.id}`}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <Text size="md" className="px-6 pb-6 text-white-60 sm:px-7">
                      {item.answer}
                    </Text>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Faqs
