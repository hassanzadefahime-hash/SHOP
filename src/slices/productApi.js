import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000/" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `products`,
    }),
    getAllCategory: builder.query({
      query: () => `category`,
    }),
    getAllArticle: builder.query({
      query: () => `article`,
    }),
    getArticleById: builder.query({
      query: (id) => `article/${id}`,
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetAllCategoryQuery,
  useGetAllArticleQuery,
  useGetArticleByIdQuery,
} = productApi;
