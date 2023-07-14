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
    <button className="flex" onClick={onClick} disabled={disableC}>
      <RbvcLogo />
      <div className="self-center cursor-pointer">
        <p className="text-start font-semibold mb-[-0.3rem] tracking-widest">
          RAFAEL VENDRAMINI
        </p>
        <p className="text-dGolden">
          RBVC Soluções Tecnológicas
        </p>
      </div>
    </button>
  );
};

export default RBVCLogoBtn;
