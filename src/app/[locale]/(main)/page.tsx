import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { Metadata } from "next"
import { useTranslations } from "next-intl"
export const metadata: Metadata = {
  title: "Home",
  description:
    "Shop all available models only at the ACME. Worldwide Shipping. Secure Payment.",
}

const Home = () => {
  const t = useTranslations('Index');

  return (
    <>
    
      <Hero />
    {/* <div>{t("title")}</div> */}
      <FeaturedProducts />
    </>
  )
}

export default Home
