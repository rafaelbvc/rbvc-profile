import { useMemo } from "react";
import { useUserData } from "../hooks/useUserData";
import CircleLoader from "../components/loadingSpinners/CircleLoader";

const useUserDataOld = () => {
  // const { userData, errorType, loadingState, sucessState } =
  //   useUserData();
  // if (errorType) {
  //   const datas = `Something when whrong ${errorType}`;
  //   return datas;
  // }
  // if (loadingState) {
  //   const datas = <CircleLoader isLoading={loadingState} />;
  //   return datas;
  // }
  // if (sucessState) {
  //   const datas = useMemo(
  //     () => userData?.entities["64b76acab91a055eb304ae00"],
  //     [userData]
  //   );
  //   return datas;
  // }
};

export default useUserDataOld;
