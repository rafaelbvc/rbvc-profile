import { useEffect, useState } from "react";
import RbvcLogo from "../svg/RbvcLogo";

const RBVCLogoBtn = ({ onClick }) => {
  const [wwidth] = useState(window.innerWidth);
  const [disableC, setDisableC] = useState(false);

  useEffect(() => {
    if (wwidth >= 768) {
      setDisableC(true);
    }
  }, [wwidth]);

  return (
    <button className="flex " onClick={onClick} disabled={disableC}>
      <RbvcLogo />
      <div className={`self-center cursor-pointer flex-nowrap`}>
        <p className="font-popins font-semibold mb-[-0.35rem] tracking-wider whitespace-nowrap">
          RAFAEL VENDRAMINI
        </p>
        <p className="font-popins text-dGolden text-sm whitespace-nowrap">
          RBVC Soluções Tecnológicas
        </p>
      </div>
    </button>
  );
};

export default RBVCLogoBtn;
