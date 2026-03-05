
import Image from "next/image"

import { Heading } from "@/components/ui/heading"
import { Text } from "@/components/ui/text"

type FirstUserItem = {
  id: string
  title: string
  description: string
  iconSrc: string
  iconAlt: string
}

const FIRST_USER_ITEMS: FirstUserItem[] = [
  {
    id: "support",
    title: "24/7 Support",
    description: "Need help? Get your requests solved quickly via support team.",
    iconSrc: "/images/support-icon.svg",
    iconAlt: "Support icon",
  },
  {
    id: "community",
    title: "Community",
    description: "Join the conversations on our worldwide OKEx communities",
    iconSrc: "/images/community-icon.png",
    iconAlt: "Community icon",
  },
  {
    id: "academy",
    title: "Academy",
    description: "Learn blockchain and crypto for free.",
    iconSrc: "/images/academy-icon.png",
    iconAlt: "Academy icon",
  },
]

const FirstUser = () => {
  return (
    <section className="section-y overflow-hidden bg-black-100" aria-labelledby="first-user-title">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <Heading as="h6" level="h6" className="text-white-100">
            Always by <span className="text-primary-100">your side</span>
          </Heading>
          <Heading
            as="h2"
            level="h2"
            id="first-user-title"
            className="mt-3 text-white-100 lg:text-[length:var(--type-heading-h1-size)] lg:leading-[var(--type-heading-h1-line)] lg:tracking-[var(--type-heading-h1-tracking)]"
          >
            Be the first to use our Crypgo!
          </Heading>
          <Text size="md" className="mx-auto mt-4 max-w-xl text-white-60 lg:max-w-2xl">
            Get faster, safer, more affordable cloud object storage with no central point of
            failure.
          </Text>
        </div>

        <div className="relative mt-12 overflow-hidden rounded-3xl border border-white-10 bg-black-10 px-6 py-9 sm:px-8 sm:py-10 lg:mt-14 lg:min-h-80 lg:px-10 lg:py-12">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgb(255_255_255_/0.05)_0%,rgb(255_255_255_/0)_43%)]" />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(56%_78%_at_50%_63%,rgb(153_227_158_/0.22),rgb(0_5_16_/0)_76%)]"
          />

          <div className="relative z-10 grid grid-cols-1 gap-9 pt-2 sm:pt-3 md:grid-cols-3 md:items-start md:gap-8">
            {FIRST_USER_ITEMS.map((item) => (
              <article
                key={item.id}
                className="mx-auto w-full max-w-72 text-center md:max-w-none"
              >
                <div className="mx-auto flex h-18 w-18 items-center justify-center rounded-full border border-white-10 bg-[#29353f] shadow-[0_18px_44px_rgb(0_0_0_/0.42)] backdrop-blur-sm">
                  <Image
                    src={item.iconSrc}
                    alt={item.iconAlt}
                    width={32}
                    height={32}
                    className="h-8 w-8 object-contain"
                  />
                </div>
                <Heading as="h3" level="h4" className="mt-5 text-white-100">
                  {item.title}
                </Heading>
                <Text size="md" className="mx-auto mt-2 max-w-66 text-white-60">
                  {item.description}
                </Text>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FirstUser
