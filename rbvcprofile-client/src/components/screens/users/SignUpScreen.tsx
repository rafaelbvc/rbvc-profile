import { useState } from "react";
import { timeNow } from "../../../utils/handleTime";
import FooterBar from "../../FooterBar";
import DefaultBtn from "../../buttons/DefaultBtn";
import DragCloseMenu from "../../menus/DragCloseMenu";
import { useVisibilityContext } from "../../../contexts/useVisibilityContext";
import { IUsers } from "../../../interfaces/IUsers";
import { useAddNewUserMutation } from "./usersApiSlice";

const SignUpScreen = () => {
  const { setSignUpVisibilityState } = useVisibilityContext();
  const [addNewUser] = useAddNewUserMutation();
  const [newUser, setNewUser] = useState<IUsers>({
    firstName: "",
    lastName: "",
    phone: "",
    password: "",
    email: "",
  });

  const createUser = async (e) => {
    e.preventDefault();
    await addNewUser(newUser);
    setNewUser({
      ...newUser,
      firstName: "",
      lastName: "",
      phone: "",
      password: "",
      email: "",
    });
  };

  // const validateForm = () => {
  //   const firstNameValidation = new RegExp("/([A-z],{3,14})/")

  return (
    <>
      <DragCloseMenu
        changeMaxW={"max-w-[32rem] mb-[0.3rem]"}
        textHeader="sign up"
        onClick={() => setSignUpVisibilityState(" hidden")}
      />

      <form onSubmit={createUser}>
        <div className="flex flex-wrap  sm:flex-nowrap mx-auto">
          <div className="vInputsResponsive w-full mx-1 sm:ml-1">
            <label htmlFor="firstName" className="vLabels">
              First Name
            </label>
            <input
              type="text"
              className="vInputs"
              value={newUser?.firstName}
              onChange={(e) =>
                setNewUser({ ...newUser, firstName: e.target.value })
              }
            />
          </div>
          <div className="vInputsResponsive w-full mx-1 sm:mr-1">
            <label htmlFor="phone" className="vLabels">
              Phone
            </label>
            <input
              type="text"
              className="vInputs"
              value={newUser?.phone}
              onChange={(e) =>
                setNewUser({ ...newUser, phone: e.target.value })
              }
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
              value={newUser?.lastName}
              onChange={(e) =>
                setNewUser({ ...newUser, lastName: e.target.value })
              }
            />
          </div>
          <div className="vInputsResponsive w-full mx-1 sm:ml-1">
            <label htmlFor="email" className="vLabels">
              E-mail
            </label>
            <input
              type="email"
              className="vInputs"
              value={newUser?.email}
              onChange={(e) =>
                setNewUser({ ...newUser, email: e.target.value })
              }
            />
          </div>
        </div>

        <div className="flex flex-wrap  sm:flex-nowrap mx-auto">
          <div className="vInputsResponsive w-full mx-1 sm:ml-1">
            <label htmlFor="password" className="vLabels">
              Password
            </label>
            <input
              type="text"
              className="vInputs"
              value={newUser?.password}
              onChange={(e) =>
                setNewUser({ ...newUser, password: e.target.value })
              }
            />
          </div>
          <div className="vInputsResponsive w-full mx-1 sm:ml-1">
            <label className="vLabels ">Created At</label>
            <input
              type="text"
              className="vInputs text-right   text-dGolden"
              readOnly
              value={timeNow()}
            />
          </div>
        </div>

        <menu className="flex justify-between mx-2">
          <DefaultBtn textBtn="reset" onClick={""} />
          <DefaultBtn textBtn="submit" typeBtn="submit" />
        </menu>
      </form>
      <FooterBar />
    </>
  );
};

export default SignUpScreen;
