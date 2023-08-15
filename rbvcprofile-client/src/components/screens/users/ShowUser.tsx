import { useCallback, useEffect } from "react";
import { IUsers } from "../../../interfaces/IUsers";
import { useGetUsersQuery } from "./usersApiSlice";

const ShowUser = () => {
  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUsersQuery("usersList", {
    pollingInterval: 60000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });

  let content: IUsers;

  if (isLoading) {
    content = { stateData: "isLoading" };
  }
  if (isError) {
    content = { stateData: "isError" };
  }

  if (isSuccess) {
    const ids = users?.ids;

    const entities = users?.entities[ids[0]];
    content = entities;
  }

  return { content, isLoading, isError, error };
};

export default ShowUser;
