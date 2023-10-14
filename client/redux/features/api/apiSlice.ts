import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userLoggedIn } from "../auth/authSlice";


// createApi() adalah sebuah fungsi yang digunakan untuk membuat objek API slice dalam Redux Toolkit Query.
// Fungsi ini menerima sebuah objek konfigurasi yang digunakan untuk mengatur perilaku API slice, seperti reducerPath, baseQuery, dan endpoints.
// reducerPath adalah nama slice Redux yang akan digunakan untuk mengelola data yang diterima dari permintaan API.
// baseQuery adalah fungsi yang digunakan untuk mengonfigurasi detail permintaan HTTP seperti URL dasar, opsi, dan lainnya.
// endpoints adalah tempat Anda mendefinisikan endpoint-endpoint API dan perilaku kustom untuk permintaan dan tanggapan.
export const apiSlice = createApi({

  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_SERVER_URI,
  }),

  endpoints: (builder) => ({

    refreshToken: builder.query({
      query: (data) => ({
        url: "refresh",
        method: "GET",
        credentials: "include" as const,
      }),
    }),

    loadUser: builder.query({
      query: (data) => ({
        url: "me",
        method: "GET",
        credentials: "include" as const,
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(
            userLoggedIn({
              accessToken: result.data.accessToken,
              user: result.data.user,
            })
          );
        } catch (error: any) {
          console.log(error);
        }
      },
    }),

  }),

});
export const { useRefreshTokenQuery, useLoadUserQuery } = apiSlice;
