import React from "react";

const ErrorMessage = (props) => {
  const { errorM, className } = props;

  return (
    <div
      className={` max-w-[31.5rem] mt-1  ${className}`}
    >
      <p className="text-eRed whitespace-normal px-1 text-sm text-center">
        {errorM}
      </p>
    </div>
  );
};

export default ErrorMessage;
