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
        className={` md:w-[5rem] lg:w-[5.64rem] p-1 cursor-pointer lg:mx-3 ${styleBtn}`}
        onClick={onClick}
        hidden={isVisible}
        // disabled={isAuth}
      >
        <span className="mx-auto whitespace-nowrap md:text-dGrayTitle text-dGolden font-popins text-reg hover:underline  hover:underline-offset-8 hover:decoration-dBlack md:hover:decoration-dGolden">
          {textBtn}
        </span>
      </button>
    </>
  );
};

export default DefaultBtn;
