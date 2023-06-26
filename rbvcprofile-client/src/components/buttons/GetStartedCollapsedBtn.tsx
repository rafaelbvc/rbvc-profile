// import { useVisibilityContext } from "../../contexts/VisibilityContext";

// const GetStartedCollapsedBtn = ({prop}) => {
//   const { setVVisibilityState } = useVisibilityContext();

//   return (
//     <button
//       onClick={() => setVVisibilityState(prop)}
//       className="flex self-center font-roboto text-lg sm:text-xl text-bold "
//     >
//       Get Started
//     </button>
//   );
// };

// export default GetStartedCollapsedBtn;

import { useVisibilityContext } from "../../contexts/VisibilityContext";

const GetStartedCollapsedBtn = ({onClick}) => {
  const { setVVisibilityState } = useVisibilityContext();

  return (
    <button
      onClick={onClick}
      className="flex self-center font-roboto text-lg sm:text-xl text-bold "
    >
      Get Started
    </button>
  );
};

export default GetStartedCollapsedBtn;

