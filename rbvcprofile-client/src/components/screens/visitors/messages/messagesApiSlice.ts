import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../../../app/api/apiSlice";

// const messagesAdapter = createEntityAdapter({
//   sortComparer: (a: any, b: any) =>
//     a.completed === b.completed ? 0 : a.completed ? 1 : -1,
// });
const messagesAdapter:any = createEntityAdapter({});

const initialState: any = messagesAdapter.getInitialState();

export const messagesApiSlice:any = apiSlice.injectEndpoints({
  endpoints: (builder:any) => ({
    getMessages: builder.query({
      query: () => "/messages",
      validadeStatus: (response, result) => {
        return response.status === 200 && !result.isError;
      },
      // keepUnusedDataFor: 5,
      transformErrorResponse: (responseData) => {
        const loadedMessages = responseData.map((message) => {
          message.id = message._id;
          return message;
        });
        return messagesAdapter.setAll(initialState, loadedMessages);
      },
      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: "Message", id: "LIST" },
            ...result.ids.map((id) => ({ type: "Message", id })),
          ];
        } else return [{ type: "Message", id: "LIST" }];
      },
    }),
    addNewMessage: builder.mutation({
      query: (initialMessage) => ({
        url: "/messages",
        method: "POST",
        body: {
          ...initialMessage,
        },
      }),
      invalidateTags: [{ type: "Message", id: "LIST" }],
    }),
    updateMessage: builder.mutation({
      query: (initialMessage) => ({
        url: "/messages",
        type: "PATCH",
        doby: {
          ...initialMessage,
        },
      }),
      invalidateTags: (result, error, arg) => [{ type: "Message", id: arg.id }],
    }),
    deleteMessage: builder.mutation({
      query: ({ id }) => ({
        url: "/messages",
        type: "DELETE",
        body: { id },
      }),
      invalidateTags: (result, error, arg) => [{ type: "Message", id: arg.id }],
    }),
  }),
});

export const {
  useGetMessagesQuery,
  useAddNewMessageMutation,
  useUpdateMessageMutation,
  useDeleteMessageMutation,
} = messagesApiSlice;

export const selectMessagesResult =
  messagesApiSlice.endpoints.getMessages.select();

const selectMessagesData = createSelector(
  selectMessagesResult,
  (messagesResult) => messagesResult.data
);

export const {
  selectAll: selectAllMessages,
  selectById: selectMessageById,
  selectIds: selectMessageIds,
} = messagesAdapter.getSelectors(
  (state) => selectMessagesData(state) ?? initialState
);
