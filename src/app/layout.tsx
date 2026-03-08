import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

const dmSans = localFont({
  src: "./fonts/dm-sans-latin-var.woff2",
  variable: "--font-dm-sans",
  display: "swap",
  weight: "100 900",
  style: "normal",
})

export const metadata: Metadata = {
  title: "CrypGo",
  description: "",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${dmSans.className} font-dm antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
