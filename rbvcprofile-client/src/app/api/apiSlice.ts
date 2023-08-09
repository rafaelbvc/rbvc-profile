import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice: any = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://rbvcprofile-server.onrender.com/",
  }),
  tagTypes: ["User", "Message"],
  endpoints: (builder: any) => ({}),
});
