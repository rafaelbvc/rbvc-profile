import { useState, CSSProperties, useEffect } from "react";
import ClipLoader from "react-spinners/CircleLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const CircleLoader = ({ isLoading }) => {
  // let [loading, setLoading] = useState(true);
  const [color] = useState("#00FF00");

  useEffect(() => {}, [isLoading]);

  return (
    <div className="mt-4">
      <ClipLoader
        color={color}
        loading={isLoading}
        cssOverride={override}
        size={100}
        ara-label="Loading Spinner"
        data-testid="loader"
      />
      <p className="font-poppins text-center mt-2">Loading...</p>
      <footer className="bg-gradient-to-r from-dBlack via-dGolden to-dGolden h-[1px] mt-2" />
    </div>
  );
};

export default CircleLoader;
