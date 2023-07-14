import { useCallback, useEffect, useState } from "react";
import { useGetUsersQuery } from "../components/screens/visitors/usersApiSlice";

export const useUserDataContext = () => {
  const {
    error,
    isError,
    isLoading,
    isSucess,
    data: usersById,
  } = useGetUsersQuery();

  const [userData, setUserData] = useState<any>(usersById);
  const [loadingState, setLoadingState] = useState(isLoading);
  const [errorsType, setErrorType] = useState(error);
  const [sucessState, setSucessState] = useState(isSucess);

  const handleDataState = useCallback(() => {
    if (isLoading) {
      setLoadingState(isLoading);
    } else if (isError) {
      setErrorType(error);
    } else {
      setUserData(usersById);
      setLoadingState(false);
    }
  }, [isLoading, error, isError, usersById]);

  const handleErrorType = useCallback(() => {
    if (errorsType !== undefined || errorsType) {
      return `Sory we got problems ahead => ${error}`;
    }
  }, [errorsType, error]);

  const handleSucess = useCallback(() => {
    if (!error || !isLoading) {
      setSucessState(true);
    } else {
      setSucessState(false);
    }
  }, [error, isLoading]);

  const errorType = handleErrorType();

  useEffect(() => {
    handleDataState();
    handleErrorType();
    handleSucess();
  }, [isLoading, error, handleDataState, handleErrorType, handleSucess]);

  return { userData, loadingState, sucessState, errorType };
};
