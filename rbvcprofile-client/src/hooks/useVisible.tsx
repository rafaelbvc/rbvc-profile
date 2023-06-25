import React, { createContext } from "react";

const useVisible = () => {
  const isVisible = createContext("hidden");

  return <div>useVisible</div>;
};

export default useVisible;
