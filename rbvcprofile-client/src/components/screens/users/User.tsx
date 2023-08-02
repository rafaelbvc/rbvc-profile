import DragCloseMenu from "../../menus/DragCloseMenu";
import { useVisibilityContext } from "../../../contexts/useVisibilityContext";
import StatusIcon from "../../svg/StatusIcon";
import {
  activateStatusTextHandler,
  activeStatusColorHandler,
  activeStatusIconColorHandler,
  activeStatusTextHandler,
} from "../../../utils/activeStatusHandler";
import { useState } from "react";
import { formatISODate, timeNow } from "../../../utils/handleTime";
import FooterBar from "../../FooterBar";
import { selectUserById } from "./usersApiSlice";
import DefaultBtn from "../../buttons/DefaultBtn";
import { useSelector } from "react-redux/es/hooks/useSelector";

const User = ({ userId }) => {
  const user = useSelector((state) => selectUserById(state, userId));
  console.log(user)


  const { setUserVisibilityState } = useVisibilityContext();
  const [activeStatus, setActiveStatus] = useState<boolean>(true);

  // const { data: user } = useGetUsersQuery();

  // console.log(user.entities["64c9c781a78ced4a937dcb82"]);

  // const userById = user.entities["64c9c781a78ced4a937dcb82"];

  const createdAt = formatISODate(user ? user?.createdAt : timeNow());

  const handleActiveStatus = () => {
    const active = user?.active;
    if (active !== undefined && active) {
      setActiveStatus(active);
    }
    setActiveStatus(false);
  };

  if (!user) {
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
        <div className="max-w-[28rem]">
          <form>
            <div className="flex flex-wrap  md:flex-nowrap mx-auto">
              <div className="vInputsResponsive w-full mx-1 sm:ml-1">
                <label htmlFor="firstName" className="vLabels">
                  First Name
                </label>
                <input
                  type="text"
                  className="vInputs"
                  readOnly
                  value={user?.firstName}
                />
              </div>
              <div className="vInputsResponsive w-full mx-1 sm:mr-1">
                <label htmlFor="phone" className="vLabels">
                  Phone
                </label>
                <input
                  type="tel"
                  className="vInputs"
                  readOnly
                  value={user?.phone}
                />
              </div>
            </div>

            <div className="flex flex-col max-w-[28rem] mx-1">
              <label htmlFor="lastName" className="vLabels">
                Last Name
              </label>
              <input
                type="text"
                className="vInputs"
                readOnly
                value={user?.lastName}
              />
              <div />
            </div>
            <div className="flex flex-col mx-1 max-w-[28rem]">
              <label htmlFor="email" className="vLabels">
                E-mail
              </label>
              <input type="email" className="vInputs" value={user?.email} />
            </div>

            <div className="flex justify-between flex-wrap md:flex-nowrap min-w-[20.5rem] max-w-[28rem] mx-1">
              <div className="vInputsResponsive w-full">
                <label htmlFor="password" className="vLabels">
                  Password
                </label>
                <input type="text" className="vInputs" value={user?.password} />
              </div>
              <div className="vInputsResponsive w-full">
                <label className="vLabels ">Created At</label>
                <input
                  type="text"
                  className="vInputs text-right   text-dGolden"
                  readOnly
                  value={createdAt}
                />
              </div>
            </div>
          </form>
        </div>
        <menu className="w-fit mx-auto">
          <DefaultBtn textBtn="edit" onClick={() => null} />
          <DefaultBtn textBtn="inactivate" onClick={() => null} />
          <DefaultBtn textBtn="message" onClick={() => null} />
        </menu>
        <FooterBar />
      </>
    );
  } else return null;
};

export default User;
