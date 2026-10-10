import { useGetAllArticleQuery } from "../../slices/productApi";
import ArticleCard from "../ArticleCard";
import { TbArticle } from "react-icons/tb";
import { FaAngleLeft } from "react-icons/fa";

const HomeArticles = () => {
  const { data: articles } = useGetAllArticleQuery();
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex gap-3 items-center">
          <TbArticle fontSize={28} />
          <p className="text-2xl">آخرین مقالات</p>
        </div>

        <div className="flex gap-1 items-center">
          <p className="text-lg">مشاهده همه</p>
          <FaAngleLeft fontSize={14} />
        </div>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
        {articles?.slice(0, 2).map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};
export default HomeArticles;
