
import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, X } from "lucide-react"

import { Heading } from "@/components/ui/heading"
import { Text } from "@/components/ui/text"

type FooterLinkItem = {
  id: string
  label: string
  href: string
}

type FooterLinkGroup = {
  id: string
  title: string
  items: FooterLinkItem[]
}

const FOOTER_LINK_GROUPS: FooterLinkGroup[] = [
  {
    id: "links",
    title: "Links",
    items: [
      { id: "features", label: "Features", href: "#" },
      { id: "benefits", label: "Benefits", href: "#" },
      { id: "services", label: "Services", href: "#" },
      { id: "why-crypgo", label: "Why Crypgo", href: "#" },
      { id: "faqs", label: "FAQs", href: "#" },
    ],
  },
  {
    id: "other-pages",
    title: "Other Pages",
    items: [
      { id: "terms", label: "Terms", href: "#" },
      { id: "disclosures", label: "Disclosures", href: "#" },
      { id: "latest-news", label: "Latest News", href: "#" },
    ],
  },
]

const SOCIAL_LINKS: FooterLinkItem[] = [
  { id: "facebook", label: "Facebook", href: "#" },
  { id: "instagram", label: "Instagram", href: "#" },
  { id: "x", label: "X", href: "#" },
]

const getSocialIcon = (id: string) => {
  if (id === "facebook") return <Facebook className="h-5 w-5" />
  if (id === "instagram") return <Instagram className="h-5 w-5" />
  return <X className="h-5 w-5" />
}

const Footer = () => {
  return (
    <footer className="section-y bg-black-100">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-12 xl:gap-8">
            <div className="xl:col-span-5">
              <Link href="/" className="inline-flex items-center" aria-label="Go to Crypgo homepage">
                <Image src="/images/crypgo.svg" alt="Crypgo" width={157} height={39} />
              </Link>

              <Text size="md" className="mt-5 max-w-md text-white-60">
                Transform your crypto business with Crypgo Framer, a template for startups
                and blockchain services.
              </Text>

              <div className="mt-7 flex items-center gap-3">
                {SOCIAL_LINKS.map((social) => (
                  <Link
                    key={social.id}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white-10 bg-white-10 text-white-100 transition-colors duration-200 hover:border-primary-100 hover:text-primary-100"
                  >
                    {getSocialIcon(social.id)}
                  </Link>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:col-span-4 xl:gap-10">
              {FOOTER_LINK_GROUPS.map((group) => (
                <nav key={group.id} aria-label={group.title}>
                  <Heading as="h3" level="h5" className="text-white-100">
                    {group.title}
                  </Heading>

                  <ul className="mt-4 space-y-3">
                    {group.items.map((item) => (
                      <li key={item.id}>
                        <Link
                          href={item.href}
                          className="inline-flex rounded-sm text-white-60 transition-colors duration-200 hover:text-primary-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-100 focus-visible:ring-offset-2 focus-visible:ring-offset-black-100"
                        >
                          <Text size="md" as="span" className="text-white-60">
                            {item.label}
                          </Text>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}
            </div>

            <div className="xl:col-span-3">
              <Heading as="h3" level="h5" className="text-white-100">
                Download app
              </Heading>

              <div className="mt-4 flex max-w-52 flex-col gap-3">
                <Link href="#" className="inline-flex">
                  <Image
                    src="/images/google-play-btn.png"
                    alt="Get it on Google Play"
                    width={126}
                    height={37}
                    className=""
                  />
                </Link>
                <Link href="#" className="inline-flex">
                  <Image
                    src="/images/apple-store.png"
                    alt="Download on the App Store"
                    width={126}
                    height={37}
                    className=""
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white-10 pt-7 text-center">
            <Text size="sm" className="text-white-40">
              Copyright ©2025 Crypgo. All rights reserved
            </Text>
          </div>



        </div>
      </div>
    </footer>
  )
}

export default Footer
