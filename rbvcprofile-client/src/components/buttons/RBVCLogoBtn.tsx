import RbvcLogo from "../svg/RbvcLogo";

const RBVCLogoBtn = ({onClick}) => {
  return (
    <div className="flex" onClick={onClick}>
      <RbvcLogo />
      <div className="self-center cursor-pointer flex-nowrap">
        <p className="font-popins font-semibold mb-[-0.35rem] tracking-wider whitespace-nowrap">
          RAFAEL VENDRAMINI
        </p>
        <p className="font-popins text-dGolden text-sm whitespace-nowrap">
          RBVC Soluções Tecnológicas
        </p>
      </div>
    </div>
  );
};

export default RBVCLogoBtn;
