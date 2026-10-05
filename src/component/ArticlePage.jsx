import { useParams } from "react-router-dom";
import { useGetArticleByIdQuery } from "../slices/productApi";

const ArticlePage = () => {
  
  const { articleId } = useParams();
  const { data } = useGetArticleByIdQuery(articleId);

  return (
    <div className="lg:w-[70%] w-[95%] mx-auto">
      <div
        className="mx-auto overflow-hidden rounded-xl bg-gray-100 relative bo lg:h-40 h-30 lg:mb-8 mb-2 lg:mt-12 mt-4 flex items-center justify-between">
        <div className="lg:w-3/5 w-1/2 pr-4">
          <p className="lg:text-xl text-sm text-gray-800 leading-6">
            {data?.name}
          </p>
        </div>

        <div className="w-3/5 lg:w-3/5 h-full relative">
          <img
            className="w-full h-full"
            src={`http://localhost:9000/images/${data?.pic}`}
            alt={data?.name}
          />
          <div className="absolute inset-y-0 right-0 w-20 lg:w-50 bg-gradient-to-l from-gray-100 to-transparent"></div>
        </div>
      </div>

      <div className="mx-auto text-justify mb-10 lg:mt-8 mt-4 w-[90%] lg:w-full">
        <p className="lg:leading-9 leading-7 text-gray-800 lg:text-lg text-sm">
          {data?.description}
        </p>
      </div>
    </div>
  );
};

export default ArticlePage;
