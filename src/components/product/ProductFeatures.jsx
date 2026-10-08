import { LuBadgeCheck, LuShieldCheck } from "react-icons/lu";

const ProductFeatures = () => {
  return (
    <div className="md:w-[80%] w-[90%] mx-auto border border-gray-300 rounded-xl px-8 py-6 mb-4">
      <div className="flex items-center gap-2 mb-8">
        <LuBadgeCheck className="text-3xl" />
        <h2 className="text-2xl font-bold">ویژگی‌های محصول</h2>
      </div>

      <div className="grid grid-cols-3 gap-8">
        <div className="flex gap-2 flex-col">
          <div className="flex gap-2 items-center">
            <div
              className="w-8 h-8 rounded-2xl
            bg-blue-50/80 backdrop-blur-md
            border border-blue-100
            flex items-center justify-center"
            >
              <LuShieldCheck className="text-[#2980b9] text-2xl" />
            </div>

            <p className="text-xl font-bold">سازگار با شارژ بی‌سیم و مگ‌سیف</p>
          </div>

          <p className="pb-3">
            محافظت مناسب از گوشی در برابر خط‌وخش، ضربه و آسیب‌های روزمره.
          </p>
        </div>

        <div className="flex gap-2 flex-col">
          <div className="flex gap-2 items-center">
            <div
              className="w-8 h-8 rounded-2xl
            bg-blue-50/80 backdrop-blur-md
            border border-blue-100
            flex items-center justify-center"
            >
              <LuShieldCheck className="text-[#2980b9] text-2xl" />
            </div>

            <p className="text-xl font-bold">محافظت کامل از لبه‌ها و دوربین</p>
          </div>

          <p className="pb-3">
            طراحی برجسته اطراف دوربین و لبه‌های قاب برای محافظت بیشتر.
          </p>
        </div>

        <div className="flex gap-2 flex-col">
          <div className="flex gap-2 items-center">
            <div
              className="w-8 h-8 rounded-2xl
            bg-blue-50/80 backdrop-blur-md
            border border-blue-100
            flex items-center justify-center"
            >
              <LuShieldCheck className="text-[#2980b9] text-2xl" />
            </div>

            <p className="text-xl font-bold">پوشش داخلی میکروفایبر نرم</p>
          </div>

          <p className="pb-3">
            جلوگیری از ایجاد خط‌وخش روی بدنه گوشی در استفاده طولانی‌مدت.
          </p>
        </div>

        <div className="flex gap-2 flex-col">
          <div className="flex gap-2 items-center">
            <div
              className="w-8 h-8 rounded-2xl
            bg-blue-50/80 backdrop-blur-md
            border border-blue-100
            flex items-center justify-center"
            >
              <LuShieldCheck className="text-[#2980b9] text-2xl" />
            </div>

            <p className="text-xl font-bold">طراحی مینیمال و شیک</p>
          </div>

          <p className="pb-3">
            ظاهر ساده و جذاب، مناسب استفاده روزمره و استایل‌های مختلف.
          </p>
        </div>

        <div className="flex gap-2 flex-col">
          <div className="flex gap-2 items-center">
            <div
              className="w-8 h-8 rounded-2xl
            bg-blue-50/80 backdrop-blur-md
            border border-blue-100
            flex items-center justify-center"
            >
              <LuShieldCheck className="text-[#2980b9] text-2xl" />
            </div>

            <p className="text-xl font-bold">خوش‌دست و سبک</p>
          </div>

          <p className="pb-3">
            طراحی ارگونومیک برای در دست گرفتن راحت گوشی بدون ایجاد حجم اضافی.
          </p>
        </div>

        <div className="flex gap-2 flex-col">
          <div className="flex gap-2 items-center">
            <div
              className="w-8 h-8 rounded-2xl
            bg-blue-50/80 backdrop-blur-md
            border border-blue-100
            flex items-center justify-center"
            >
              <LuShieldCheck className="text-[#2980b9] text-2xl" />
            </div>

            <p className="text-xl font-bold">دسترسی آسان به دکمه‌ها</p>
          </div>

          <p className="pb-3">
            دکمه‌های دقیق و نرم برای استفاده راحت از تمام کلیدهای گوشی.
          </p>
        </div>
      </div>
    </div>
  );
};
export default ProductFeatures;
