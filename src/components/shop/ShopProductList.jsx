import ProductCard from "../ProductCard";
import OfferProductCard from "../OfferProductCard";


const ShopProductList =({status , sortedProducts })=>{
    return(
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 md:gap-4 gap-2">
        {
          sortedProducts.map((product) =>
            product.discount > 0 ? (
              <OfferProductCard product={product} key={product.id} />
            ) : (
              <ProductCard product={product} key={product.id} />
            )
          )
        }
      </div>
    )
}
export default ShopProductList;