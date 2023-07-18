import { useCallback, useEffect, useState } from "react";
import { useVisibilityContext } from "../../../../contexts/useVisibilityContext";
import DefaultBtn from "../../../buttons/DefaultBtn";
import DragCloseMenu from "../../../menus/DragCloseMenu";
import { SubmitHandler, useForm } from "react-hook-form";
import FooterBar from "../../../FooterBar";
import { useUserDataContext } from "../../../../contexts/useUserDataContext";
import CircleLoader from "../../../loadingSpinners/CircleLoader";
import { timeNow } from "../../../../utils/handleTime";
import { IUsers } from "../../../../interfaces/IUsers";

const VisitorMessages = () => {
  const { setVisitorsMessageVisibilityState } = useVisibilityContext();

  // const { userData, sucessState, errorType, loadingState } =
  const { userData, loadingState } = useUserDataContext();

  const [users, setUsers] = useState<any>();
  const [readOrEditInput, setReadOrEditInput] = useState(false);

  const handleUsers = useCallback(async () => {
    const data = await userData?.entities["64afe564a008d1eec567a9c6"];
    setUsers(data);
  }, [userData]);

  const {
    reset,
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<any>();

  const onSubmit: SubmitHandler<IUsers> = (data) => {
    const datas = data;
    if (!datas) {
      console.log("No data", errors);
    } else if (errors !== undefined || errors) {
      console.log("Errors", errors);
    }
    console.log(datas, "Users Data");
  };

  // const messagesWatch = watch();
  // console.log(messagesWatch);

  useEffect(() => {
    handleUsers();
  }, [loadingState, userData, handleUsers]);

  return (
    <>
      <DragCloseMenu
        textHeader="messages"
        onClick={() => setVisitorsMessageVisibilityState(" hidden")}
      />
      <div className="flex flex-col min-w-[21rem]">
        <header className="flex justify-between gap-4 mt-1 px-1">
          <p className="font-poppins">
            {users?.firstName} &nbsp; {users?.lastName}
          </p>
          <p className="font-poppins self-center text-dGolden">{timeNow()}</p>
        </header>
        <>
          {loadingState ? (
            <CircleLoader isLoading={loadingState} />
          ) : (
            <form
              className="mt-1 flex flex-col "
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                // defaultValue={"title"}
                placeholder="title"
                className="px-1 mb-1 font-poppings  text-base border-1 border-dGoldenAlpha rounded min-w-[21rem]"
                type="text"
                readOnly={readOrEditInput}
                {...register("titleMessage", { maxLength: 30, min: 6 })}
              />
              <textarea
                // defaultValue={"type your message here..."}
                id="TextMessage"
                placeholder="type your message here..."
                className="px-1 font-poppings  text-base border-1 border-dGoldenAlpha rounded min-w-[21rem]"
                maxLength={5000}
                rows={10}
                spellCheck={true}
                readOnly={readOrEditInput}
                wrap="hard"
                {...register("textMessage")}
              />
              <menu className="flex justify-between m-1">
                <DefaultBtn
                  textBtn="edit"
                  onClick={() => setReadOrEditInput(false)}
                />
                <DefaultBtn
                  textBtn="reset"
                  onClick={() => {
                    reset();
                    setReadOrEditInput(false);
                  }}
                />
                <DefaultBtn textBtn="create" type="subimt" />
              </menu>
            </form>
          )}
        </>
      </div>
      <FooterBar />
    </>
  );
};

export default VisitorMessages;
