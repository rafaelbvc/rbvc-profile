import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice: any = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://rbvcprofile-server.onrender.com/",
    // baseUrl: "http://localhost:5090/",
  }),
  tagTypes: ["User", "Message"],
  endpoints: (builder: any) => ({}),
});
