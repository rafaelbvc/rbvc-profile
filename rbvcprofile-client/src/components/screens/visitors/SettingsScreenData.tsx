import { useVisibilityContext } from "../../../contexts/useVisibilityContext";
import DragCloseMenu from "../../menus/DragCloseMenu";
import SettingsScreen from "./SettingsScreen";
import { useGetUsersQuery } from "./visitorApiSlice";

const SettingsScreenData = () => {

// export const useAsyncLocalState = (loader) => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [loadError, setLoadError] = useState(false);
//   const [payload, setPayload] = useState(null);
//   useEffect(() => {
//     const load = async () => {
//       try {
//         setIsLoading(true);
//         setLoadError(false);
//         const result = await loader();
//         setPayload(result);
//         setIsLoading(false);
//       } catch (e) {
//         setLoadError(true);
//         setIsLoading(false);
//       }
//     };
//     load();
//   }, [loader]);
// return { isLoading, loadError, payload };
// };
  // const {
  //   data: users,
  //   isError,
  //   error,
  //   loading,
  //   isLoading,
  //   isSucess,
  // } = useGetUsersQuery();
  // const { setSettingsVisibilityState } = useVisibilityContext();
  // let content;
  // if (isLoading) content = <p>Loading....</p>;
  // if (isError) {
  //   content = <p className="errmsg">{error?.data?.message}</p>;
  // }
  // if (isSucess) {
  //   const { ids } = users;
  //   console.log("sucess")
  //   // const screenDataContent = ids?.lenght
  //   //   ? ids.map((userId) => <SettingsScreen key={userId} userId={userId} />)
  //   //   : null;
  //   // content = (
  //   //   // <>
  //   //   //   <DragCloseMenu
  //   //   //     textHeader="user settings"
  //   //   //     onClick={() => setSettingsVisibilityState(" hidden")}
  //   //   //   />
  //   //   //   <div>{screenDataContent}</div>
  //   //   //   <footer className="bg-gradient-to-r from-dBlack via-dGolden to-dGolden h-[1px] " />
  //   //   // </>
  //   // );
  // }
  // return content;
};

export default SettingsScreenData;

// import { useVisibilityContext } from "../../../contexts/useVisibilityContext";
// import DragCloseMenu from "../../menus/DragCloseMenu";
// import SettingsScreen from "./SettingsScreen";
// import { useGetUsersQuery } from "./visitorApiSlice";

// const SettingsScreenData = () => {
//   const {
//     data: users,
//     isError,
//     error,
//     loading,
//     isLoading,
//     isSucess,
//   } = useGetUsersQuery();

//   const { setSettingsVisibilityState } = useVisibilityContext();

//   let content;

//   if (isLoading) content = <p>Loading....</p>;

//   if (isError) {
//     content = <p className="errmsg">{error?.data?.message}</p>;
//   }

//   if (isSucess) {

//     const { ids } = users;

//     console.log("sucess")

//     const screenDataContent = ids?.lenght
//       ? ids.map((userId) => <SettingsScreen key={userId} userId={userId} />)
//       : null;

//     content = (
//       <>
//         <DragCloseMenu
//           textHeader="user settings"
//           onClick={() => setSettingsVisibilityState(" hidden")}
//         />
//         <div>{screenDataContent}</div>
//         <footer className="bg-gradient-to-r from-dBlack via-dGolden to-dGolden h-[1px] " />
//       </>
//     );
//   }
//   return content;
// };

// export default SettingsScreenData;
