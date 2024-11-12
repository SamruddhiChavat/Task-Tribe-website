import { apiSlice } from "../apiSlice";

const USER_URL = "/user";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    updateUser: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/profile`,
        method: "PUT",
        body: data,
        credentials: "include", // ensure cookies are sent
      }),
    }),

    getTeamList: builder.query({
      query: () => ({
        url: `${USER_URL}/get-team`,
        method: "GET", // GET request for fetching team list
        credentials: "include", // ensure cookies are sent
      }),
    }),

    deleteUser: builder.mutation({
      query: (id) => ({
        url: `${USER_URL}/${id}`, // Including the user id in the URL for deletion
        method: "DELETE",
        credentials: "include", // ensure cookies are sent
      }),
    }),

    userAction: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/${data.id}`,
        method: "PUT",
        body: data,
        credentials: "include", // ensure cookies are sent
      }),
    }),
     
    getNotifications: builder.query({
      query: () => ({
      url: `${USER_URL}/notifications`,
       method: "GET",
      credentials: "include",
      }),
      }),

      markNotiAsRead: builder.mutation({
      query: (data) => ({
      url: `${USER_URL}/read-noti?isReadType=${data.type}&id=${data?.id}`,
      method: "PUT",
      body: data,
      credentials: "include",
      }),
    }),

    changePassword: builder.mutation({ 
      query: (data) => ({
      url: `${USER_URL}/change-password`, 
      method: "PUT",
      body: data,
      credentials: "include",
      }),
      }),
  }),
});

export const {
  useUpdateUserMutation,
  useGetTeamListQuery, 
  useDeleteUserMutation, 
  useUserActionMutation,
  useGetNotificationsQuery,
  useMarkNotiAsReadMutation,
  useChangePasswordMutation,
} = userApiSlice;
