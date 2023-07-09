import { useEffect, useState } from "react";
import { useUserDataContext } from "../../../contexts/useUserDataContext";
import SignInSignUpScreen from "./SignInSignUpScreen";
import CircleLoader from "../../loadingSpinners/CircleLoader";

const SettingsScreen = () => {
  const { userData, loadingState, errorType, sucessState } =
    useUserDataContext();

  const [users, setUsers] = useState<any>();
  const [activeStatus, setActiveStatus] = useState<boolean>(); //status
  const [isLoading, setIsLoading] = useState<boolean>();

  const handleUsers = () => {
    const data = userData?.entities["648b8ab03107216e8579c631"];
    // todo bring the Authed user
    setUsers(data);
  };

  const handleActiveStatus = () => {
    const active = users?.active;
    setActiveStatus(active);
  };

  const handleLoading = () => {
    setIsLoading(loadingState);
  };

  const renderContent = loadingState ? (
    <CircleLoader isLoading={isLoading} />
  ) : errorType ? (
    <p>{`Unfortunately we got that problem ${errorType}`}</p>
  ) : (
    <SignInSignUpScreen
      activeStatus={activeStatus}
      loadingState={loadingState}
      filledData={users}
    />
  );

  // const onSubmit = async (data) => {
  //   console.log(data);
  // };

  // const onWatch = watch();
  // console.log(onWatch);

  useEffect(() => {
    handleActiveStatus();
    handleUsers();
    handleLoading();
  }, [loadingState, errorType, sucessState]);

  return <>{renderContent}</>;
};

export default SettingsScreen;



//phone  mascara validado pais area e formato Mobile
//password  *** hash

//password
// The password length must be greater than or equal to 8
// The password must contain one or more uppercase characters
// The password must contain one or more lowercase characters
// The password must contain one or more numeric values
// The password must contain one or more special characters
