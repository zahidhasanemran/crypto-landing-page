import Navbar from "@/components/shared/Navbar"
import HeroSection from "@/app/(landing-page)/_components/HeroSection"
import TrustedBySection from "@/app/(landing-page)/_components/TrustedBySection"
import FeaturedCoin from "@/app/(landing-page)/_components/FeaturedCoin"
import WhyChoseCrypgo from "@/app/(landing-page)/_components/WhyChoseCrypgo"
import Stats from "@/app/(landing-page)/_components/Stats"


export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <TrustedBySection />
      <FeaturedCoin />
      <WhyChoseCrypgo />
      <Stats />
    </div>
  )
}
