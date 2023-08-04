import { useSelector } from "react-redux";
import { selectCurrentToken } from "../components/screens/auth/authSlice";
//@ts-ignore
import jwtDecode from "jwt-decode";

const useAuth = () => {
  const token = useSelector(selectCurrentToken);
  let isSubscribed = false;
  let isAdmin = false;
  let status = "Visitor";

  if (token) {
    const decoded: any = jwtDecode(token);
    const { email, roles } = decoded.UserInfo;

    isSubscribed = roles.includes("Subscribed");
    isAdmin = roles.includes("Admin");

    if (isSubscribed) status = "Subscribed";
    if (isAdmin) status = "Admin";

    return { email, roles, status, isSubscribed, isAdmin };
  }

  return { username: "", roles: [], isSubscribed, isAdmin, status };
};
export default useAuth;
