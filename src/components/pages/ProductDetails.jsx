import ProductGallery from "./product/ProductGallery";
import ProductInfo from "./product/ProductInfo";
import ProductFeatures from "./product/ProductFeatures";

const ProductDetails = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="w-[90%] lg:w-[85%] mx-auto flex flex-col lg:flex-row mt-10 gap-12">
        <ProductGallery />
        <ProductInfo />
      </div>
      <ProductFeatures />
    </div>
  );
};

export default ProductDetails;
