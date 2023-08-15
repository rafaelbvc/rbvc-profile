import { useEffect } from "react";
import CircleLoader from "../../loadingSpinners/CircleLoader";
import User from "./User";
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

  let content: string;

  if (isLoading) {
    content = "isLoading";
  }
  if (isError) {
    content = "Sory we got an issue";
  }

  if (isSuccess) {
    content = users?.ids;
  }
  console.log(content, "werjwefuiojwei");

  return content;
};

export default ShowUser;
