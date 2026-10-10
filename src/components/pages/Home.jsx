import HeroSection from "../HeroSection";
import PromoSlider from "../PromoSlider";
import HomeCategories from "../home/HomeCategories";
import HomeOffers from "../home/HomeOffers";
import HomeArticles from "../home/HomeArticles";
import HomeProducts from "../home/HomeProducts";

const Home = () => {
  return (
    <>
      <HeroSection />
      <div
        className="md:w-[80%] w-[90%] mx-auto my-10 flex flex-col gap-10
      "
      >
        <HomeCategories />

        <HomeOffers />

        <PromoSlider />

        <HomeProducts />

        <HomeArticles />
      </div>
    </>
  );
};

export default Home;
