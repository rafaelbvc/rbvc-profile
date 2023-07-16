import { forwardRef, useEffect, useRef, useState } from "react";
import RbvcLogo from "../svg/RbvcLogo";

const RBVCLogoBtn = ({ onClick }) => {
  const [wwidth] = useState(window.innerWidth);
  const [disableC, setDisableC] = useState(false);

  const logoRBVCFocusRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (wwidth >= 768) {
      setDisableC(true);
    }
  }, [wwidth]);

  return (
    <button
      ref={logoRBVCFocusRef}
      id="RBVCLogoBtnId"
      className="flex"
      onClick={onClick}
      disabled={disableC}
    >
      <RbvcLogo />
      <div className="self-center cursor-pointer">
        <p className="text-start font-semibold mb-[-0.7rem] tracking-widest">
          RAFAEL VENDRAMINI
        </p>
        <p className="text-dGolden tracking-tight">RBVC Soluções Tecnológicas</p>
      </div>
    </button>
  );
};

export default forwardRef(RBVCLogoBtn);
