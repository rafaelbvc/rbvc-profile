import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice: any = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5030" }),
  tagTypes: ["Message", "User"],
  endpoints: (builder: any) => ({}),
});