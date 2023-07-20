import { useCallback, useEffect, useState } from "react";
import { useGetMessagesQuery } from "../components/screens/visitors/messages/messagesApiSlice";
import { IMessages } from "../interfaces/IMessages";

export const useMessageData = () => {
  const {
    error,
    isError,
    isLoading,
    isSucess,
    data: messagesByUserState,
  } = useGetMessagesQuery();

  const [messagesByUser, setMessagesByUser] =
    useState<IMessages>(messagesByUserState);
  const [messageError, setMessageErrorType] = useState();
  const [messageLoading, setMessageLoading] = useState<boolean>(isLoading);
  const [messageSucess, setMessageSucess] = useState<boolean>(isSucess);

  const handleMessages = useCallback(() => {
    if (isLoading && !isError) {
      setMessageLoading(true);
    } else if (isError) {
      setMessageErrorType(error);
    } else {
      setMessagesByUser(messagesByUserState);
      setMessageLoading(false);
    }
  }, [messagesByUserState, isError, isSucess]);

  const handleSucess = useCallback(() => {
    if (isError || isLoading) {
      setMessageSucess(false);
    } else {
      setMessageSucess(true);
    }
  }, [isError, isLoading]);

  const handleError = useCallback(() => {
    if (isError) {
      return `Sory we got problems ahead => ${messageError}`;
    }
  }, [messageError]);

  useEffect(() => {}, [
    handleMessages,
    handleSucess,
    handleError,
    isLoading,
    error,
    messagesByUser,
  ]);

  return { messagesByUser, messageError, messageLoading, messageSucess };
};
