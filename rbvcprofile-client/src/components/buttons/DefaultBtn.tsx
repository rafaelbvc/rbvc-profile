import { useEffect, useState } from "react";

const DefaultBtn = (props) => {
  const { textBtn, onClick, hiddenBtn, styleBtn } = props;

  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(hiddenBtn);
  }, [hiddenBtn, onClick]);

  return (
    <div className="sm:w-[8rem] md:ml-6 lg:ml-3">
      <button
        type="button"
        className={` md:w-[5rem] lg:w-[5.64rem] p-1  lg:mx-3 ${styleBtn}`}
        onClick={onClick}
        hidden={isVisible}
        // disabled={isAuth}
      >
        <span className="mx-auto vBtnStyle">{textBtn}</span>
      </button>
    </div>
  );
};

export default DefaultBtn;
