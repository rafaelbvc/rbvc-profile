import { useMemo } from "react";
import { useUserDataContext } from "../contexts/useUserDataContext";
import CircleLoader from "../components/loadingSpinners/CircleLoader";
import { IUsers } from "../interfaces/IUsers";

const useUserData = () => {
  const { userData, errorType, loadingState, sucessState } =
    useUserDataContext();
  if (errorType) {
    const datas = `Something when whrong ${errorType}`;
    return datas;
  }
  if (loadingState) {
    const datas = <CircleLoader isLoading={loadingState} />;
    return datas;
  }
  if (sucessState) {
    const datas = useMemo(
      () => userData?.entities["64b0d584d0a4f8263c629f5f"],
      [userData]
    );
    return datas;
  }
};

export default useUserData;
