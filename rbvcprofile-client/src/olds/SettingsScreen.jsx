import { useEffect, useMemo, useState } from "react";
import { useUserData } from "../hooks/useUserData";
import SignInSignUpScreen from "../components/screens/users/SignInSignUpScreen";
import CircleLoader from "../components/loadingSpinners/CircleLoader";
import DragCloseMenu from "../components/menus/DragCloseMenu";
import FooterBar from "../components/FooterBar";
import { useVisibilityContext } from "../contexts/useVisibilityContext";
import StatusIcon from "../components/svg/StatusIcon";
import {
  activateStatusTextHandler,
  activeStatusColorHandler,
  activeStatusIconColorHandler,
  activeStatusTextHandler,
} from "../utils/activeStatusHandler";
import { timeNow } from "../utils/handleTime";

const SettingsScreen = () => {
  const { userData, userLoadingState, userErrors } = useUserData();

  const data = useMemo(
    () => userData?.entities["64b76acab91a055eb304ae00"],
    [userData]
  ); // todo bring the Authed user

  const { setUserVisibilityState } = useVisibilityContext();

  const [users, setUsers] = useState<any>(data);
  const [activeStatus, setActiveStatus] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleUsers = (dataUsers) => {
    setUsers(dataUsers);
  };

  const handleActiveStatus = () => {
    const active = users.active;
    if (active !== undefined && active) {
      setActiveStatus(active);
    } else if (!active) {
      setActiveStatus(false);
    } else return;
  };

  const handleLoading = (loadState) => {
    setIsLoading(loadState);
  };

  const renderContent = isLoading ? (
    <CircleLoader isLoading={isLoading} />
  ) : userErrors ? (
    <p>{`Unfortunately we got that problem ${userErrors}`}</p>
  ) : (
    <SignInSignUpScreen filledData={users} formType={true} />
  );

  // const onSubmit = async (data) => {
  //   console.log(data);
  // };

  // const onWatch = watch();
  // console.log(onWatch);

  useEffect(() => {
    handleLoading(userLoadingState);
    handleUsers(data);
  }, [userLoadingState, data]);
  return (
    <>
      <DragCloseMenu
        textHeader="visitor settings"
        onClick={() => setUserVisibilityState(" hidden")}
      />
      <header className="flex flex-row justify-between   mt-1 px-1">
        <button onClick={() => handleActiveStatus()} className="flex">
          <StatusIcon
            width="1.5rem"
            fillColor={activeStatusIconColorHandler(activeStatus)}
          />
          <p className=" self-center">
            &nbsp; {activateStatusTextHandler(activeStatus)}
          </p>
        </button>
        <div className="flex ">
          <p className=" self-center">STATUS: &nbsp;</p>
          <p
            className={`  self-center text-left ${activeStatusColorHandler(
              activeStatus
            )}`}
          >
            {activeStatusTextHandler(activeStatus)}
          </p>
        </div>

        <p className="text-dGolden text-end mr-1">{timeNow()}</p>
      </header>
      {renderContent}
      <FooterBar />
    </>
  );
};

export default SettingsScreen;
