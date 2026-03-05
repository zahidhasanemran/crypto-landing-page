import Navbar from "@/components/shared/Navbar"
import HeroSection from "@/app/(landing-page)/_components/HeroSection"
import TrustedBySection from "@/app/(landing-page)/_components/TrustedBySection"
import FeaturedCoin from "@/app/(landing-page)/_components/FeaturedCoin"
import WhyChoseCrypgo from "@/app/(landing-page)/_components/WhyChoseCrypgo"
import Stats from "@/app/(landing-page)/_components/Stats"
import BestSolution from "@/app/(landing-page)/_components/BestSolution"
import Cta from "@/app/(landing-page)/_components/Cta"
import PageTemplate from "@/app/(landing-page)/_components/PageTemplate"
import CryptoUpgrade from "@/app/(landing-page)/_components/CryptoUpgrade"
import FirstUser from "@/app/(landing-page)/_components/FirstUser"
import Faqs from "@/app/(landing-page)/_components/Faqs"
import Footer from "@/components/shared/Footer"


export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <TrustedBySection />
      <FeaturedCoin />
      <WhyChoseCrypgo />
      <Stats />
      <BestSolution />
      <Cta />
      <PageTemplate />
      <CryptoUpgrade />
      <FirstUser />
      <Faqs />
      <Footer />
    </div>
  )
}
