import { useEffect, useMemo, useState } from "react";
import { useUserDataContext } from "../../../contexts/useUserDataContext";
import SignInSignUpScreen from "./SignInSignUpScreen";
import CircleLoader from "../../loadingSpinners/CircleLoader";
import DragCloseMenu from "../../menus/DragCloseMenu";
import FooterBar from "../../FooterBar";
import { useVisibilityContext } from "../../../contexts/useVisibilityContext";
import StatusIcon from "../../svg/StatusIcon";
import {
  activateStatusTextHandler,
  activeStatusColorHandler,
  activeStatusIconColorHandler,
  activeStatusTextHandler,
} from "../../../utils/activeStatusHandler";
import { timeNow } from "../../../utils/handleTime";

const SettingsScreen = () => {
  const { userData, loadingState, errorType } = useUserDataContext();


  const data = useMemo(
    () => userData?.entities["64b0d584d0a4f8263c629f5f"],
    [userData]
  ); // todo bring the Authed user

  const { setSettingsVisibilityState } = useVisibilityContext();


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
  ) : errorType ? (
    <p>{`Unfortunately we got that problem ${errorType}`}</p>
  ) : (
    <SignInSignUpScreen
      filledData={users}
      formType={true}
    />
  );

  // const onSubmit = async (data) => {
  //   console.log(data);
  // };

  // const onWatch = watch();
  // console.log(onWatch);

  useEffect(() => {
    handleLoading(loadingState);
    handleUsers(data);
  }, [loadingState, data]);
  return (
    <>
      <DragCloseMenu
        textHeader="visitor settings"
        onClick={() => setSettingsVisibilityState(" hidden")}
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


