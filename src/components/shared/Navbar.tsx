"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import Button from "../ui/button"

const navItems = [
  { label: "Features", href: "/" },
  { label: "Benefits", href: "/" },
  { label: "Services", href: "/" },
  { label: "Why Crypgo", href: "/" },
  { label: "FAQs", href: "/" },
]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const handleMenuClose = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-black-100/50 backdrop-blur-xs">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between py-5">
          <Link href="/" className="block" onClick={handleMenuClose}>
            <Image src="/images/crypgo.svg" alt="Crypgo" width={135} height={32} />
          </Link>

          <nav className="hidden items-center lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-md px-6 py-3 text-white-100 transition-colors duration-200 hover:text-primary-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button text="Book a Call" />
          </div>

          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={handleMenuToggle}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white-20 bg-white-5 text-white-100 transition-colors duration-200 hover:border-primary-10 hover:text-primary-100 lg:hidden"
          >
            <span className="relative h-4 w-5">
              <span
                className={`absolute left-0 top-0 block h-0.5 w-5 bg-current transition-all duration-300 ${isMenuOpen ? "translate-y-[7px] rotate-45" : ""
                  }`}
              />
              <span
                className={`absolute left-0 top-[7px] block h-0.5 w-5 bg-current transition-all duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
              />
              <span
                className={`absolute left-0 top-[14px] block h-0.5 w-5 bg-current transition-all duration-300 ${isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
                  }`}
              />
            </span>
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`grid overflow-hidden transition-all duration-300 ease-out lg:hidden ${isMenuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
        >
          <div className="min-h-0">
            <div className="mb-5 rounded-2xl border border-white-10 bg-black-100 p-3 shadow-[0_12px_40px_rgb(0_0_0_/0.35)]">
              <nav className="flex flex-col">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={handleMenuClose}
                    className="rounded-lg px-4 py-3 text-white-100 transition-colors duration-200 hover:bg-white-5 hover:text-primary-100"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-3 border-t border-white-10 pt-4">
                <Button
                  text="Book a Call"
                  className="w-full justify-center rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
