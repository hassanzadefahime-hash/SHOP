import { RiSortAsc } from "react-icons/ri";

const ShopFilters = ({groupList , setGroupId , groupId}) => {

  return (
    <>
      <div className="lg:w-[20%] w-[10%] mx-auto my-20 sticky top-4 border-1 border-gray-300 lg:block hidden rounded-xl flex flex-col text-xl p-4">
        {" "}
        <div className="flex gap-2 border-b-1 border-gray-300 pb-3">
          {" "}
          <RiSortAsc /> <p>فیلتر محصولات</p>{" "}
        </div>
        <ul className="flex flex-col gap-2 text-lg pt-3">
          {groupList?.map((group) => (
            <li key={group.id}>
              <button onClick={() => setGroupId(group.id)}
                className={
                  Number(groupId) === Number(group.id)
                    ? "text-[#2980b9]"
                    : ""
                }>{group.name}</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default ShopFilters;
