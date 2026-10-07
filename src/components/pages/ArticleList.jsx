import { useGetAllArticleQuery } from "../../slices/productApi";
import ArticleCard from "../ArticleCard";

const ArticleList = () => {
  const { data: articles, isLoading, isError } = useGetAllArticleQuery();

  if (isLoading) {
    return <p className="text-center py-10">در حال بارگذاری مقالات...</p>;
  }

  if (isError) {
    return <p className="text-center py-10">خطا در دریافت مقالات</p>;
  }

  if (!articles?.length) {
    return <p className="text-center py-10">مقاله‌ای یافت نشد.</p>;
  }

  return (
    <section className="w-[90%] lg:w-[80%] mx-auto mt-16 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
};

export default ArticleList;
