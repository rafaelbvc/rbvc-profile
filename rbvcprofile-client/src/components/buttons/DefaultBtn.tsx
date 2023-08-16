import { useEffect, useState } from "react";

// interface IDefaultBtn {
//   textBtn: string;
//   onClick: () => void;
//   hiddenBtn: boolean;
//   styleBtn: string;
// }

const DefaultBtn = (props) => {
  const { textBtn, onClick, hiddenBtn, styleBtn, typeBtn } = props;

  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(hiddenBtn);
  }, [hiddenBtn, onClick]);

  return (
    <button
      type={typeBtn}
      className={`w-[3.4rem] md:w-[4rem] lg:w-[5.5rem] p-1 mx-3 ${styleBtn}`}
      onClick={onClick}
      hidden={isVisible}
      // disabled={isAuth}
    >
      <span className="vBtnStyle">{textBtn}</span>
    </button>
  );
};

export default DefaultBtn;
