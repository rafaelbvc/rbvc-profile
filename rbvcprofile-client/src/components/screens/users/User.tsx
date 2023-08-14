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
import DefaultBtn from "../../buttons/DefaultBtn";
import CircleLoader from "../../loadingSpinners/CircleLoader";
import { useGetMessagesQuery } from "../messages/messagesApiSlice";

const User = ({ userId }) => {
  const { setUserVisibilityState } = useVisibilityContext();
  const [activeStatus, setActiveStatus] = useState<boolean>(true);
  const createdAt = formatISODate(userId ? userId?.createdAt : timeNow());

  const handleActiveStatus = () => {
    const active = userId?.active;
    if (active !== undefined && active) {
      setActiveStatus(active);
    }
    setActiveStatus(false);
  };

  return (
    <>
      <DragCloseMenu
        changeMaxW={"max-w-[45rem]"}
        textHeader="Profile"
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
      <form>
        <div className="flex flex-wrap  sm:flex-nowrap mx-auto">
          <div className="vInputsResponsive w-full mx-1 sm:ml-1">
            <label htmlFor="firstName" className="vLabels">
              First Name
            </label>
            <input
              type="text"
              className="vInputs"
              readOnly
              value={userId?.firstName}
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
              value={userId?.phone}
            />
          </div>
        </div>

        <div className="flex flex-wrap  sm:flex-nowrap mx-auto">
          <div className="vInputsResponsive w-full mx-1 sm:ml-1">
            <label htmlFor="lastName" className="vLabels">
              Last Name
            </label>
            <input
              type="text"
              className="vInputs"
              readOnly
              value={userId?.lastName}
            />
          </div>

          <div className="vInputsResponsive w-full mx-1 sm:ml-1">
            <label htmlFor="email" className="vLabels">
              E-mail
            </label>
            <input type="email" className="vInputs" value={userId?.email} />
          </div>
        </div>

        <div className="flex flex-wrap  sm:flex-nowrap mx-auto">
          <div className="vInputsResponsive w-full mx-1 sm:ml-1">
            <label htmlFor="password" className="vLabels">
              Password
            </label>
            <input type="text" className="vInputs" value={userId?.password} />
          </div>
          <div className="vInputsResponsive w-full mx-1 sm:ml-1">
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
      <menu className="flex justify-around">
        <DefaultBtn textBtn="edit" onClick={() => null} />
        <DefaultBtn textBtn="delete" onClick={() => null} />
        <DefaultBtn textBtn="feed" onClick={() => null} />
      </menu>
      <FooterBar />
    </>
  );
};

export default User;
