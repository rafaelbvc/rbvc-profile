import React from "react";
import { useGetUsersQuery } from "../menus/visitor/visitorApiSlice";
import SettingsScreen from "./SettingsScreen";
import DragCloseMenu from "../menus/DragCloseMenu";

const SettingsScreenData = () => {
  const {
    userData: users,
    isError,
    error,
    loading,
    isLoading,
    isSucess,
  } = useGetUsersQuery();

  let content;

  if (isLoading)
    content = isError ? (
      <details>
        <p>Error</p>
        {`The following ${error?.data?.message} occurs`}
      </details>
    ) : null;

  if (isError) {
    content = isError ? (
      <p className={isError ? "errmsg" : "offscreen"}>{error?.data?.message}</p>
    ) : null;
  }

  if (isSucess) {
    const { ids } = users;

    const usersContent = ids?.lenght
      ? ids.map((userId) => <SettingsScreen key={userId} />)
      : null;

    content = usersContent;
  }
  return content;
};

export default SettingsScreenData;
