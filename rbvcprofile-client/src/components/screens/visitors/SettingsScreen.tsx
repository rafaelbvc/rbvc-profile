import { useEffect, useState } from "react";
import { useUserDataContext } from "../../../contexts/useUserDataContext";
import SignInSignUpScreen from "../../SignInSignUpScreen";

const SettingsScreen = () => {
  const { userData, loadingState, errorType, sucessState } =
    useUserDataContext();

  const [users, setUsers] = useState<any>();
  const [statusColor, setStatusColor] = useState("#00FF00");
  const [activeStatus, setActiveStatus] = useState(true); //status

  const handleUsers = async () => {
    const data = await userData?.entities["648b8ab03107216e8579c631"];
    setUsers(data);
  };

  const onSubmit = async (data) => {
    console.log(data);
  };

  // const onWatch = watch();
  // console.log(onWatch);

  const handleActiveStatus = () => {
    if (activeStatus) {
      setActiveStatus(false);
      setStatusColor("#FF0000");
    } else {
      setActiveStatus(true);
      setStatusColor("#00FF00");
    }
  };

  useEffect(() => {
    handleActiveStatus();
    handleUsers();
  }, [loadingState, sucessState]);

  return (
    <>
      <SignInSignUpScreen
        statusColor={statusColor}
        handleActiveStatus={activeStatus}
        loadingState={loadingState}
        filledData={users}
      />
    </>
  );
};

export default SettingsScreen;

{
  /* <SignInSignUpScreen /> */
}

//firstName  + 3 letras - 16                                         //only-read
//lastName   + 3 letras - 30
//email  validar regex
//phone  mascara validado pais area e formato Mobile
//password  *** hash
//messagesBTN _messages  *****
//active  2 states - active - inactive  #FF0000  #00FF00
//createdAt - unico
//lastUptade   - datenow
//timeNow - no useEffect

//edit //salvar ---state editavel

//password
// The password length must be greater than or equal to 8
// The password must contain one or more uppercase characters
// The password must contain one or more lowercase characters
// The password must contain one or more numeric values
// The password must contain one or more special characters
