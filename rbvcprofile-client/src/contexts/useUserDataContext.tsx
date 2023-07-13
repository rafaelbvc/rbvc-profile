import { useEffect, useState } from "react";
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

  const handleDataState = () => {
    if (isLoading) {
      setLoadingState(isLoading);
    } else if (isError) {
      setErrorType(error);
    } else {
      setUserData(usersById);
      setLoadingState(false);
    }
  };

  const handleErrorType = () => {
    if (errorsType !== undefined || errorsType) {
      return `Sory we got problems ahead => ${error}`;
    }
  };

  const handleSucess = () => {
    if (!error || !isLoading) {
      setSucessState(true);
    } else {
      setSucessState(false);
    }
  };

  const errorType = handleErrorType();

  useEffect(() => {
    handleDataState();
    handleErrorType();
    handleSucess();
  }, [isLoading, error]);

  return { userData, loadingState, sucessState, errorType };
};
