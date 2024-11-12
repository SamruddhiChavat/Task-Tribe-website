import { apiSlice } from "../apiSlice";

const AUTH_URL = "/user";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/login`,
        method: "POST",
        body: data,
        credentials: 'include', // use 'include' to ensure cookies are sent
      }),
    }),

    register: builder.mutation({
        query: (data) => ({
          url: `${AUTH_URL}/register`,
          method: "POST",
          body: data,
          credentials: 'include', // use 'include' to ensure cookies are sent
        }),
      }),

      logout: builder.mutation({
        query: (data) => ({
          url: `${AUTH_URL}/logout`,
          method: "POST",
         // body: data,
          credentials: 'include', // use 'include' to ensure cookies are sent
        }),
      }),

  }),
});

export const { useLoginMutation , useRegisterMutation, useLogoutMutation} = authApiSlice;
