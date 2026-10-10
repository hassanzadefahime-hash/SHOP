import { useGetAllCategoryQuery } from "../../slices/productApi";

const FooterLinks = () => {
  const { data } = useGetAllCategoryQuery();

  return (
    <>
      <div className="pr-8">
        <ul className="flex gap-4 flex-col text-lg font-bold">
          {data?.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>

      <div className="pr-8">
        <ul className="flex gap-4 flex-col text-lg font-bold">
          <li>فروشگاه</li>
          <li>تماس با ما</li>
          <li>درباره ما</li>
          <li>خواندنی ها</li>
        </ul>
      </div>
    </>
  );
};
export default FooterLinks;
