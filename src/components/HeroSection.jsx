import HeroMobile from "./hero/HeroMobile";
import HeroDesktop from "./hero/HeroDesktop";

const HeroSection = () => {
  return (
    <div>
      <div className="w-[100%] overflow-hidden m-auto">
          <HeroDesktop />
          <HeroMobile />
      </div>
    </div>
  );
};

export default HeroSection;

