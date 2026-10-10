import { FaAngleLeft } from "react-icons/fa";
import { TbCategory } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useGetAllCategoryQuery } from "../../slices/productApi";

const HomeCategories = () => {
  const { data } = useGetAllCategoryQuery();
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-3 items-center">
        <TbCategory fontSize={28} />
        <p className="text-2xl">دسته بندی محصولات</p>
      </div>

      <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-3 lg:gap-4 md:gap-2 gap-2">
        {data?.map((item) => (
          <Link
            to={`/group/${item.id}`}
            className="aspect-square"
            key={item.id}
          >
            <button className="lg:h-[100%] w-full h-full relative flex flex-col md:gap-1 gap-2 justify-center items-center aspect-square">
              <img
                className="lg:h-[100%] w-full h-full absolute"
                src={`http://localhost:9000/images/${item.pic}`}
              />

              <div
                className="text-black bg-white absolute h-full w-full pt-4 flex justify-center items-center text-lg"
                style={{
                  background:
                    "linear-gradient(0deg,rgba(0, 0, 0, 0.5) 0%, rgba(255, 255, 255, 0) 100%)",
                }}
              >
                <div className="absolute bottom-0 flex justify-between items-center w-full md:px-3 px-1 pb-2">
                  <span className="px-1 text-white md:text-base text-sm">
                    {item.name}
                  </span>

                  <FaAngleLeft className="bg-white rounded-full p-1" />
                </div>
              </div>
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default HomeCategories;
