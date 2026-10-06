import { useParams } from "react-router-dom";
import { useGetAllProductsQuery } from "../slices/productApi";
import ProductCard from "./ProductCard";

const ProductsGroupPage = () => {
  const { groupId } = useParams();
  const { data = [] } = useGetAllProductsQuery();
  const productGroup = data?.filter(
    (item) => Number(item.groupId) === Number(groupId)
  );

  return (
    <div className="md:w-[80%] w-[95%] mx-auto my-20">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-4  gap-2 ">
        {productGroup.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};
export default ProductsGroupPage;
