import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../../app/api/apiSlice";

const messagesAdapter: any = createEntityAdapter({});

const initialState: any = messagesAdapter.getInitialState();

const messagesApiSlice: any = apiSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    getMessages: (builder: any) => ({
      query: () => "/messages",
      validadeStatus: (response, result) => {
        return response.status === 200 && !result.isError;
      },
      keepUnusedDataFor: 5,
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
  }),
});
export default messagesApiSlice;

export const {useGetMessagesQuery}: any = messagesApiSlice;

export const selectMessagesResult: any =
  messagesApiSlice.endpoints.getMessages.select();

const selectMessagesData: any = createSelector(
  selectMessagesResult,
  (messagesResult) => messagesResult.data
);

export const {
  selectAll: selectAllMessages,
  selectById: selectMessagesById,
  selectIds: selectMessagesIds,
} = messagesAdapter.getSelectors((state) => selectMessagesData(state)) ??
initialState;
