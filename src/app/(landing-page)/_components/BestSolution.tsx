
import Image from "next/image"

import { Heading } from "@/components/ui/heading"
import { Text } from "@/components/ui/text"

type BestSolutionItem = {
  id: string
  title: string
  description: string
  iconSrc: string
  iconAlt: string
}

const LEFT_ITEMS: BestSolutionItem[] = [
  {
    id: "planning",
    title: "Planning",
    description: "Map the crypto projects scope with framer template",
    iconSrc: "/images/plan-icon.svg",
    iconAlt: "Planning icon",
  },
  {
    id: "prototype",
    title: "Prototype",
    description: "Build crypto website test for your product",
    iconSrc: "/images/prototype-icon.png",
    iconAlt: "Prototype icon",
  },
]

const RIGHT_ITEMS: BestSolutionItem[] = [
  {
    id: "refinement",
    title: "Refinement",
    description: "Refine and improve your crypto landing page",
    iconSrc: "/images/refine-icon.svg",
    iconAlt: "Refinement icon",
  },
  {
    id: "scale-support",
    title: "Scale and support",
    description: "Deploy product live and ensure expert support",
    iconSrc: "/images/scale-icon.svg",
    iconAlt: "Scale and support icon",
  },
]

type FeatureItemProps = {
  item: BestSolutionItem
  align: "left" | "right"
}

const FeatureItem = ({ item, align }: FeatureItemProps) => {
  const isLeftAligned = align === "left"

  return (
    <article
      className={`flex items-start gap-4 ${isLeftAligned ? "text-left lg:flex-row-reverse lg:text-right" : "text-left"
        }`}
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white-5">
        <Image
          src={item.iconSrc}
          alt={item.iconAlt}
          width={24}
          height={24}
          className="h-6 w-6 object-contain"
        />
      </div>

      <div>
        <Heading as="h3" level="h5" className="text-white-100">
          {item.title}
        </Heading>
        <Text size="md" className="mt-1 text-white-60">
          {item.description}
        </Text>
      </div>
    </article>
  )
}

const BestSolution = () => {
  return (
    <section className="section-y overflow-hidden bg-black-100" aria-labelledby="best-solution-title">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <Heading as="h6" level="h6" className="text-white-100">
            We deliver <span className="text-primary-100">best solution</span>
          </Heading>
          <Heading
            as="h2"
            level="h2"
            id="best-solution-title"
            className="mt-3 text-white-100"
          >
            One application with multiple options to give you freedom of buying and selling
          </Heading>
        </div>

        <div className="mt-10 lg:mt-16">
          <div className="relative mx-auto flex max-w-6xl justify-center">
            <Image
              src="/images/best-solution.png"
              alt="Crypto exchange mobile interface with highlighted coins"
              width={690}
              height={708}
              className="h-auto w-full max-w-172.5 object-contain"
            />

            <div className="absolute left-[6%] top-[24%] hidden max-w-62 lg:block">
              <FeatureItem item={LEFT_ITEMS[0]} align="left" />
            </div>
            <div className="absolute left-[9%] top-[63%] hidden max-w-62 lg:block">
              <FeatureItem item={LEFT_ITEMS[1]} align="left" />
            </div>
            <div className="absolute right-[7%] top-[25%] hidden max-w-62 lg:block">
              <FeatureItem item={RIGHT_ITEMS[0]} align="right" />
            </div>
            <div className="absolute right-[8%] top-[66%] hidden max-w-62 lg:block">
              <FeatureItem item={RIGHT_ITEMS[1]} align="right" />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-6 lg:hidden">
          {[...LEFT_ITEMS, ...RIGHT_ITEMS].map((item) => (
            <FeatureItem
              key={item.id}
              item={item}
              align="right"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BestSolution
