import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  return (
    <Link to={`/article/${article.id}`} className="lg:h-50 h-35 ">
      <div className="overflow-hidden bg-gray-100 relative bo h-full flex flex-row lg:gap-10 gap-8">
        <div className="text-black flex flex-col lg:w-[20%] w-[45%] items-center lg:pr-6 px-2 pb-4"></div>
        <div className="lg:w-[80%] w-[85%] h-full relative">
          <img
            className="w-full h-full"
            src={`http://localhost:9000/images/${article.pic}`}
          />
          <div
            className="absolute inset-y-0 right-0 lg:w-60 w-25 bg-gradient-to-l from-gray-100 to-transparent"></div>
        </div>
        <div className="lg:w-[30%] w-[40%] h-full absolute pr-6 flex items-center">
          <p className="lg:text-lg text-sm lg:leading-8 leading-6 my-auto text-justify">
            {article.name}
          </p>
        </div>
        <div
          className="absolute h-0 bottom-0 w-full opacit z-5 "
          style={{
            background: "#F2F2F2",
          }}
        >
          <div className="flex flex-row justify-center items-center pt-8 gap-4">
            <div className="flex flex-col items-center">
              <p className="text-xl  leading-10 pb-4 ">{article.name}</p>
              <p className="text-lg line-clamp-2  px-12 text-justify leading-9 ">
                {article.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default ArticleCard;
