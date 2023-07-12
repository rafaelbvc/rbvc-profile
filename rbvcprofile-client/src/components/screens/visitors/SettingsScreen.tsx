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
import DefaultBtn from "../../buttons/DefaultBtn";

const SettingsScreen = () => {
  const { userData, loadingState, errorType } = useUserDataContext();

  const data = useMemo(
    () => userData?.entities["648b8ab03107216e8579c631"],
    [userData]
  ); // todo bring the Authed user

  const { setSettingsVisibilityState } = useVisibilityContext();

  const [users, setUsers] = useState<any>(data);
  const [activeStatus, setActiveStatus] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [editVisitor, setEditVisitorData] = useState<boolean>(true);

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

  const handleEditData = () => {
    if (editVisitor) {
      setEditVisitorData(false);
    } else {
      setEditVisitorData(true);
    }
  };

  console.log(editVisitor, "sett");

  const renderContent = isLoading ? (
    <CircleLoader isLoading={isLoading} />
  ) : errorType ? (
    <p>{`Unfortunately we got that problem ${errorType}`}</p>
  ) : (
    <SignInSignUpScreen filledData={users} editVisitor={editVisitor} />
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
          <p className="text-sm self-center">
            &nbsp; {activateStatusTextHandler(activeStatus)}
          </p>
        </button>
        <div className="flex ">
          <p className="font-poppins text-sm self-center">STATUS: &nbsp;</p>
          <p
            className={`font-poppins text-sm self-center text-left ${activeStatusColorHandler(
              activeStatus
            )}`}
          >
            {activeStatusTextHandler(activeStatus)}
          </p>
        </div>

        <p className="text-dGolden text-end">{timeNow()}</p>
      </header>

      {renderContent}
      <menu className="mt-1 ml-5">
        <DefaultBtn
          textBtn="messages"
          className="w-[200px]"
          // onClick={() =>
          //   setVisitorsMessageVisibilityState(
          //     handleVisibility(visitorsMessagesVisibility)
          //   )
          // } todo
        />
        <DefaultBtn textBtn="edit" onClick={() => handleEditData} />
        <DefaultBtn textBtn="save" type="submit" onClick={handleEditData} />
      </menu>
      <FooterBar />
    </>
  );
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
