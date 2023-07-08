import { useEffect, useState } from "react";
import { useVisibilityContext } from "../../../contexts/useVisibilityContext";
import DefaultBtn from "../../buttons/DefaultBtn";
import DragCloseMenu from "../../menus/DragCloseMenu";
import { useGetUsersQuery } from "../visitors/visitorApiSlice";
import { SubmitHandler, useForm } from "react-hook-form";
import FooterBar from "../../FooterBar";

const VisitorMessages = () => {
  const { setVisitorsMessageVisibilityState } = useVisibilityContext();

  const { data: usersById } = useGetUsersQuery();
  const [users, setUsers] = useState(usersById);
  const [readOrEditInput, setReadOrEditInput] = useState(false);

  const {
    reset,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<any>();

  const onSubmit: SubmitHandler<any> = (data) => {
    const datas = data;
    if (!datas.lenght) {
      console.log("noff data", errors);
    } else if (errors !== undefined || errors.lenght) {
      console.log("erros de erros", errors);
    }
    console.log(datas, "fwefwefedatasubmit");
  };

  // const messagesWatch = watch();
  // console.log(messagesWatch);

  const handleUsers = () => {
    setUsers(usersById?.entities["648b8ab03107216e8579c631"]);
  };

  useEffect(() => {
    handleUsers();
  }, [users]);

  return (
    <>
      <DragCloseMenu
        textHeader="messages"
        onClick={() => setVisitorsMessageVisibilityState(" hidden")}
      />
      <div className="flex flex-col min-w-[21rem]">
        <div className="flex justify-between gap-4 mt-1">
          <p className="font-poppins self-center">
            {users?.firstName} &nbsp; {users?.lastName}
          </p>
          <p className="font-poppins self-center text-dGolden">lastUpdate</p>
        </div>
        <form className="mt-1 flex flex-col" onSubmit={handleSubmit(onSubmit)}>
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
          <menu className="justify-between">
            <DefaultBtn
              textBtn="edit"
              onClick={() => setReadOrEditInput(false)}
            />
            <DefaultBtn
              textBtn="save"
              onClick={() => setReadOrEditInput(true)}
            />
            <DefaultBtn
              textBtn="reset"
              onClick={() => {
                reset();
                setReadOrEditInput(false);
              }}
            />
            <DefaultBtn textBtn="submit" type="subimt" />
          </menu>
        </form>
      </div>
      <FooterBar />
    </>
  );
};

export default VisitorMessages;
