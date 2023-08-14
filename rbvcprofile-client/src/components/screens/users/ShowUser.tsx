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

  let content: JSX.Element;

  const handleContent = () => {
    if (isLoading) {
      content = <CircleLoader isLoading={isLoading} />;
    }
    if (isError) {
      content = <p>{error?.data?.message}</p>;
    }

    if (isSuccess) {
      const { entities } = users;

      const userId = entities["64cefc01fbffa3b6dcbdbc88"];

      content = <User key={userId} userId={userId} />;

      // content = ids.map((ids) => <User key={ids} userId={ids} />);
    }
  };

  useEffect(() => {
    handleContent();
  }, [isLoading, users, isError]);

  return content;
};

export default ShowUser;
