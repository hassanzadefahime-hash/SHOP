import LottiePackage from "lottie-react"; 
import Loadercat from "../assets/Loadercat.json"
const NotFound = () => {
    const Lottie = LottiePackage.default;

  return (
    <div className="h-dvh flex flex-col justify-center items-center">
        <Lottie
        animationData={Loadercat}
        loop={true}
        autoplay={true}
      />
      <p className="text-xl">چیزی که میخوای نیست ...</p>

    </div>
  );
};
export default NotFound;
