import { useEffect, useState } from "react";

const DefaultBtn = (props) => {
  const { textBtn, onClick, hiddenBtn, styleBtn } = props;

  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(hiddenBtn);
  }, [hiddenBtn, onClick]);

  return (
    <>
      <button
        type="button"
        className={`w-[3.4rem] md:w-[4.5rem] lg:w-[5.5rem] p-1 mx-3 ${styleBtn}`}
        onClick={onClick}
        hidden={isVisible}
        // disabled={isAuth}
      >
        <span className="vBtnStyle">{textBtn}</span>
      </button>
    </>
  );
};

export default DefaultBtn;
