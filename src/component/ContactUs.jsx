import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";

import { RiTelegram2Fill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";

const ContactUs = () => {
  return (
    <>
      <div
        className="lg:w-[60%] mt-18 w-[94%] border-1 border-gray-100 mx-auto lg:p-10 md:px-4 px-2 py-10 block rounded-xl"
        style={{
          boxShadow: "0px 0px 14px -2px rgba(180,180,180,0.76)",
        }}
      >
        <Formik
          initialValues={{
            fullname: "",
            email: "",
            object: "",
            text: "",
          }}
          validate={(values) => {
            const errors = {};

            if (!values.fullname) {
              errors.fullname = "وارد کردن نام و نام خانوادگی الزامی است";
            }

            if (!values.object) {
              errors.object = "وارد کردن عنوان الزامی است";
            }

            if (!values.text) {
              errors.text = "وارد کردن متن الزامی است";
            }

            if (!values.email) {
              errors.email = "وارد کردن ایمیل الزامی است.";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "ایمیل وارد شده معتبر نمی باشد";
            }

            return errors;
          }}
        >
          <Form>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  for="first_name"
                  className="block mb-2.5 ps-2 text-sm font-medium text-heading"
                >
                  نام و نام خانوادگی :
                </label>

                <Field
                  name="fullname"
                  id="first_name"
                  className="bg-gray-100 rounded-xl bg-neutral-secondary-medium border border-default-medium text-heading text-sm border-gray-300 focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                  placeholder=""
                  required
                />

                <ErrorMessage
                  name="fullname"
                  component="div"
                  className="text-blue-900 mt-2"
                />
              </div>

              <div>
                <label
                  for="first_name"
                  className="block mb-2.5 ps-2 text-sm font-medium text-heading"
                >
                  ایمیل :
                </label>

                <Field
                  name="email"
                  className="bg-gray-100 rounded-xl bg-neutral-secondary-medium border border-default-medium text-heading text-sm border-gray-300 focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                  placeholder=""
                  required
                />

                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-blue-900 mt-2"
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                for="password"
                className="block mb-2.5 ps-2 text-sm font-medium text-heading"
              >
                موضوع :
              </label>

              <Field
                name="object"
                className="bg-gray-100 rounded-xl bg-neutral-secondary-medium border border-default-medium text-heading text-sm border-gray-300 focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                placeholder=""
                required
              />

              <ErrorMessage
                name="object"
                component="div"
                className="text-blue-900 mt-2"
              />
            </div>

            <div className="mb-6">
              <label
                for="password"
                className="block mb-2.5 ps-2 text-sm font-medium text-heading"
              >
                متن پیام :
              </label>

              <Field
                rows={6}
                name="text"
                id="password"
                className="bg-gray-100 rounded-xl bg-neutral-secondary-medium border border-gray-300 text-heading text-sm focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                placeholder=""
                required
              />

              <ErrorMessage
                name="text"
                component="div"
                className="text-blue-900 mt-2"
              />
            </div>

            <div className="w-full">
              <button
                className="block lg:mx-auto mx-auto py-2 px-10 mt-8 text-md text-[#eee] rounded-lg shadow-xs"
                style={{
                  background:
                    "linear-gradient(120deg,rgba(44, 62, 80, 1) 0%, rgba(41, 128, 185, 1) 80%)",
                }}
              >
                <p className="font-bold">ارسال</p>
              </button>
            </div>
          </Form>
        </Formik>
      </div>

      <div className="flex justify-center gap-4 py-3 flex items-center text-sm text-stone-800 before:flex-1 before:border-t before:border-stone-800 before:me-2 after:flex-1 after:border-t after:border-stone-800 after:ms-2">
        <div
          className="border-2 border-gray-400 rounded-full p-2"
          style={{
            boxShadow: "0px 0px 10px -1px rgba(119,119,119,0.88)",
          }}
        >
          <Link>
            <RiTelegram2Fill fontSize={24} className="text-gray-500" />
          </Link>
        </div>

        <div
          className="border-2 border-gray-400 rounded-full p-2"
          style={{
            boxShadow: "0px 0px 10px -1px rgba(119,119,119,0.88)",
          }}
        >
          <Link>
            <FaInstagram fontSize={24} className="text-gray-500" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default ContactUs;

