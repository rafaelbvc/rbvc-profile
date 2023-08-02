import { useCallback, useEffect, useState } from "react";
import { useGetUsersQuery } from "../components/screens/users/usersApiSlice";

export const useUserData = () => {
  const {
    error,
    isError,
    isLoading,
    isSucess,
    data: usersById,
  } = useGetUsersQuery();

  const [userData, setUserData] = useState<any>(usersById);
  const [userLoadingState, setLoadingState] = useState(isLoading);
  const [userErrors, setUserError] = useState();
  const [userSucessState, setSucessState] = useState(isSucess);

  const handleDataState = useCallback(() => {
    if (isLoading && !isError) {
      setLoadingState(isLoading);
    } else if (isError) {
      setUserError(error);
    } else {
      setUserData(usersById);
      setLoadingState(false);
    }
  }, [isLoading, isError, usersById]);

  const handleErrorType = useCallback(() => {
    if (isError) {
      return `Sory we got problems ahead => ${userErrors}`;
    }
  }, [userErrors, isError]);

  const handleSucess = useCallback(() => {
    if (error || isLoading) {
      setSucessState(false);
    } else {
      setSucessState(true);
    }
  }, [error, isLoading]);

  // console.log(isLoading, "isloading");

  const errorType = handleErrorType();

  useEffect(() => {
    handleDataState();
    handleErrorType();
    handleSucess();
  }, [isLoading, error, handleDataState, handleErrorType, handleSucess]);

  return { userData, userLoadingState, userSucessState, userErrors };
};
