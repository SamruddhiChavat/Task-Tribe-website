import { apiSlice } from "../apiSlice";

const TASKS_URL = "/task";

export const taskApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDashboardStats: builder.query({
      query: () => ({
        url: `${TASKS_URL}/dashboard`,
        method: "GET",
        credentials: "include", // Ensure cookies are sent with the request
      }),
    }),

    getAllTask: builder.query({
      query: ({ strQuery, isTrashed, search }) => ({
        url: `${TASKS_URL}?stage=${strQuery}&isTrashed=${isTrashed}&search=${search}`, 
        method: "GET",
        credentials: "include",
      }),
    }),

    createTask: builder.mutation({
      query: (data) => ({
        url: `${TASKS_URL}/create`,  // Fixed unclosed string here
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),

    duplicateTask: builder.mutation({
      query: (id) => ({
        url: `${TASKS_URL}/duplicate/${id}`, // Fixed typo: TASK_S_URL -> TASKS_URL
        method: "POST",
        body: {},
        credentials: "include",
      }),
    }),

    updateTask: builder.mutation({
      query: (data) => ({
        url: `${TASKS_URL}/update/${data._id}`,
        method: "PUT",
        body: data,
        credentials: "include",
      }),
    }),

    trashTask: builder.mutation({
        query: ({ id }) => ({
        url: `${TASKS_URL}/${id}`,
        method:"PUT",
        credentials: "include",
        }),
    }),

    createSubTask: builder.mutation({ 
        query: ({ data, id }) => ({
        url: `${TASKS_URL}/create-subtask/${id}`, 
        method: "PUT",
        body: data,
        credentials: "include",
        }),
        }),

  }),
});

export const { 
  useGetDashboardStatsQuery, 
  useGetAllTaskQuery, 
  useCreateTaskMutation, 
  useDuplicateTaskMutation, 
  useUpdateTaskMutation , 
  useTrashTaskMutation, 
  useCreateSubTaskMutation
} = taskApiSlice;
