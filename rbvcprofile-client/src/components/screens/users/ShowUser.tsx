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

  if (isLoading) {
    content = <CircleLoader isLoading={isLoading} />;
  }
  if (isError) {
    content = <p>{error?.data?.message}</p>;
  }

  if (isSuccess) {
    const { entities } = users;

    const userId = entities["64c9c781a78ced4a937dcb82"];

    console.log(userId, "fffffffffff");

    content = <User key={userId} userId={userId} />;

    // content = ids.map((ids) => <User key={ids} userId={ids} />);

    console.log(content, "wfwefefe");
  }

  return content;
};

export default ShowUser;
