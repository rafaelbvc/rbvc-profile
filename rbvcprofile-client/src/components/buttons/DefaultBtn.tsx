import React, { useEffect, useState } from "react";

const DefaultBtn = (props) => {
  const { urlBtn, textBtn, onClick, hiddenBtn, styleBtn } = props;

  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(hiddenBtn);
  }, [hiddenBtn, onClick]);

  return (
    <>
      <div
        className={` md:w-[5rem] lg:w-[5.64rem] p-1 cursor-pointer   lg:mx-4 xl:mx-5  2xl:mx-6 ${styleBtn}`}
        onClick={onClick}
        hidden={isVisible}
      >
        <span className="mx-auto whitespace-nowrap md:text-dGrayTitle text-dGolden font-popins text-reg hover:underline  hover:underline-offset-8 hover:decoration-dBlack md:hover:decoration-dGolden">
          {textBtn}
        </span>
      </div>
    </>
  );
};

export default DefaultBtn;
