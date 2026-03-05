
import Image from "next/image"

import { Heading } from "@/components/ui/heading"
import { Text } from "@/components/ui/text"

type CoinCardData = {
  id: string
  name: string
  symbol: string
  price: string
  growth: string
  iconSrc: string
  iconAlt: string
  accentClass: string
  positionClass: string
}

type CoinIconCardData = {
  id: string
  iconSrc: string
  iconAlt: string
  bgClass: string
  borderClass: string
  positionClass: string
}

type FeatureItem = {
  id: string
  title: string
  iconSrc: string
  iconAlt: string
}

const COIN_CARDS: CoinCardData[] = [
  {
    id: "ethereum",
    name: "Ethereum",
    symbol: "ETH USD",
    price: "******",
    growth: "5.23% (***)",
    iconSrc: "/images/etheream.svg",
    iconAlt: "Ethereum icon",
    accentClass: "bg-[#6c84ff]",
    positionClass: "left-0 top-10 md:left-6 md:top-6",
  },
  {
    id: "bitcoin",
    name: "Bitcoin",
    symbol: "BTC USD",
    price: "*******",
    growth: "7.68% (***)",
    iconSrc: "/images/bitcoin.svg",
    iconAlt: "Bitcoin icon",
    accentClass: "bg-[#f6a228]",
    positionClass: "right-0 top-44 md:right-8 md:top-40",
  },
]

const COIN_ICON_CARDS: CoinIconCardData[] = [
  {
    id: "solana",
    iconSrc: "/images/avalanche.png",
    iconAlt: "Solana icon",
    bgClass: "bg-[#5e1a2b]",
    borderClass: "border-[#a7435a]",
    positionClass: "",
  },
  {
    id: "polkadot",
    iconSrc: "/images/polka-dot.svg",
    iconAlt: "Polkadot icon",
    bgClass: "bg-[#3a0d49]",
    borderClass: "border-[#9b2db8]",
    positionClass: "",
  },
]

const FEATURE_ITEMS: FeatureItem[] = [
  {
    id: "manage-portfolio",
    title: "Manage your portfolio",
    iconSrc: "/images/portfolio-icon.svg",
    iconAlt: "Portfolio icon",
  },
  {
    id: "vault-protection",
    title: "Vault protection",
    iconSrc: "/images/vault-icon.png",
    iconAlt: "Vault icon",
  },
  {
    id: "mobile-apps",
    title: "Mobile apps",
    iconSrc: "/images/mobile-icon.png",
    iconAlt: "Mobile apps icon",
  },
]

const CoinStatCard = ({
  name,
  symbol,
  price,
  growth,
  iconSrc,
  iconAlt,
  accentClass,
  positionClass,
}: CoinCardData) => {
  return (
    <article
      className={`w-40 flex-col rounded-2xl border border-white-10 bg-white-5 px-5 backdrop-blur-sm md:w-46 ${positionClass}`}
    >

      <div className={` flex h-12 w-12 mx-auto relative -top-6 items-center justify-center rounded-full ${accentClass}`}>
        <Image
          src={iconSrc}
          alt={iconAlt}
          width={24}
          height={24}
          className="h-6 w-6 object-contain"
        />

      </div>

      <Heading as="h3" level="h5" className=" text-center text-white-100">
        {name}
      </Heading>
      <Text size="md" className="mt-1 text-center text-white-60">
        {symbol}
      </Text>
      <Heading as="p" level="h5" className="mt-4 text-center text-white-100">
        {price}
      </Heading>
      <Text size="md" className="mt-2 -mb-3 text-center text-primary-100">
        {growth}
      </Text>

      <button
        type="button"
        aria-label={`Open ${name}`}
        className="mx-auto mt-4 flex h-10 w-10 items-center justify-center rounded-full bg-white-100 text-black-100 relative -bottom-4"
      >
        <span aria-hidden className="text-xl leading-none">→</span>
      </button>
    </article>
  )
}

const CoinIconCard = ({
  iconSrc,
  iconAlt,
  bgClass,
  borderClass,
  positionClass,
}: CoinIconCardData) => {
  return (
    <div
      className={`flex h-25 w-25 items-center justify-center rounded-xl border ${bgClass} ${borderClass} ${positionClass}`}
    >
      <Image src={iconSrc} alt={iconAlt} width={49} height={49} className="h-12 w-12 object-contain" />
    </div>
  )
}

const PageTemplate = () => {
  return (
    <section className="section-y bg-black-100" aria-labelledby="page-template-title">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center">

          <div className="w-full lg:w-1/2">
            <div className="relative mx-auto h-112 max-w-lg overflow-hidden rounded-3xl md:h-128">
              <Image
                src="/images/portfolio-bg.png"
                alt=""
                fill
                aria-hidden
                className="object-cover opacity-95"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_55%,rgb(135_36_190_/0.38),rgb(0_0_0_/0)_44%),radial-gradient(circle_at_70%_35%,rgb(255_89_41_/0.26),rgb(0_0_0_/0)_38%)]" />


              <div className="flex items-center gap-x-8 h-full">
                <div className="w-1/2 h-full py-8 flex-col flex place-items-end-safe">
                  <CoinStatCard {...COIN_CARDS[0]} />
                  <div className=" mt-9">
                    <CoinIconCard {...COIN_ICON_CARDS[1]} />
                  </div>
                </div>
                <div className="w-1/2 h-full py-8">
                  <div className="mb-12">
                    <CoinIconCard {...COIN_ICON_CARDS[0]} />
                  </div>
                  <CoinStatCard {...COIN_CARDS[1]} />

                </div>
              </div>

            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <Heading as="h6" level="h6" className="text-white-100">
              Crypto landing page <span className="text-primary-100">template</span>
            </Heading>
            <Heading
              as="h2"
              level="h2"
              id="page-template-title"
              className="mt-3 max-w-xl text-white-100"
            >
              Create your cryptocurrency portfolio today
            </Heading>
            <Text size="md" className="mt-4 max-w-lg text-white-60">
              Coinbase has a variety of features that make it the best place to start trading.
            </Text>

            <div className="mt-8 flex flex-col">
              {FEATURE_ITEMS.map((item) => (
                <article
                  key={item.id}
                  className="flex items-center gap-4 border-b border-white-10 py-5 last:border-b-0"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white-10">
                    <Image
                      src={item.iconSrc}
                      alt={item.iconAlt}
                      width={24}
                      height={24}
                      className="h-6 w-6 object-contain"
                    />
                  </div>
                  <Heading as="h3" level="h5" className="text-white-100">
                    {item.title}
                  </Heading>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PageTemplate
