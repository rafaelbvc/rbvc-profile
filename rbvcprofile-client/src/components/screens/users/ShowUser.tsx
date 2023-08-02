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
    const { ids } = users;


    content = <User key={ids[0]} userId={ids[0]} />;

    console.log(content)

    // content = ids.map((ids) => <User key={ids} userId={ids} />);
  }

  return content;
};

export default ShowUser;
