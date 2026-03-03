import Image from "next/image"

import { Heading } from "@/components/ui/heading"
import { Text } from "@/components/ui/text"

type FeaturedCoinItem = {
  id: string
  tag: string
  name: string
  price: string
  logoSrc: string
  logoAlt: string
}

const FEATURED_COINS: FeaturedCoinItem[] = [
  {
    id: "bitcoin",
    tag: "Highest volume",
    name: "Bitcoin",
    price: "93575.5",
    logoSrc: "/images/bitcoin.svg",
    logoAlt: "Bitcoin logo",
  },
  {
    id: "ethereum",
    tag: "Top gainer",
    name: "Ethereum",
    price: "3337.28",
    logoSrc: "/images/etheream.svg",
    logoAlt: "Ethereum logo",
  },
  {
    id: "litecoin",
    tag: "New listing",
    name: "Litecoin",
    price: "105.000",
    logoSrc: "/images/litecoin.svg",
    logoAlt: "Litecoin logo",
  },
  {
    id: "polkadot",
    tag: "Most traded",
    name: "Polkadot",
    price: "6.6423",
    logoSrc: "/images/polka-dot.svg",
    logoAlt: "Polkadot logo",
  },
  {
    id: "solana",
    tag: "Biggest gainers",
    name: "Solana",
    price: "189.63",
    logoSrc: "/images/solana.png",
    logoAlt: "Solana logo",
  },
  {
    id: "chainlink",
    tag: "Trending",
    name: "Chainlink",
    price: "19.991",
    logoSrc: "/images/chain-link.png",
    logoAlt: "Chainlink logo",
  },
]

const FeaturedCoin = () => {
  return (
    <section className="section-y bg-black-100" aria-labelledby="featured-coin-title">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center">
          <Heading
            as="h6"
            level="h6"
            className="mb-2 text-white-100"
          >
            Featured <span className="text-primary-100">crypto coins</span>
          </Heading>

          <Heading
            as="h2"
            level="h2"
            id="featured-coin-title"
            className="mb-10 text-white-100"
          >
            Top crypto coins updates
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {FEATURED_COINS.map((coin) => (
            <article
              key={coin.id}
              className="rounded-2xl border border-white-10 bg-black-10 p-5 transition-transform duration-300 hover:-translate-y-1"
            >
              <Text as="p" size="sm" className="text-white-60">
                {coin.tag}
              </Text>

              <Image
                src={coin.logoSrc}
                alt={coin.logoAlt}
                width={32}
                height={32}
                className="mt-4 h-8 w-8 object-contain"
              />

              <Heading as="h6" level="h6" className="mt-4 text-white-100">
                {coin.name}
              </Heading>

              <div className="flex items-center gap-x-1 ">
                <Text as="p" size="sm" className="mt-1 text-white-80">
                  {coin.price}
                </Text>
                <Text as="p" size="sm" className="mt-1 text-white-60">
                  USD
                </Text>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedCoin
