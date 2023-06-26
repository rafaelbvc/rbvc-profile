import React, { useEffect, useState } from "react";

const DefaultBtn = (props) => {
  const { urlBtn, textBtn, actionBtn, hiddenBtn } = props;

  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(hiddenBtn);
  }, [hiddenBtn, actionBtn]);

  return (
    <>
      <div
        className="w-[240px]   mx-auto bg-darkPurple p-1 cursor-pointer"
        onClick={actionBtn}
        hidden={isVisible}
      >
        <span className="font-roboto text-lg ">{textBtn}</span>
      </div>
    </>
  );
};

export default DefaultBtn;
