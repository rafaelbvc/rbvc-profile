import { useState, CSSProperties, useEffect } from "react";
import ClipLoader from "react-spinners/CircleLoader";
import FooterBar from "../FooterBar";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const CircleLoader = ({ isLoading }) => {
  let [loading, setLoading] = useState<boolean>(isLoading);
  const [color] = useState("#00FF00");

  const handleLoading = () => {
    if (!loading) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  };

  useEffect(() => {
    handleLoading();
  }, [isLoading]);

  return (
    <div className="mt-4">
      <ClipLoader
        color={color}
        loading={!loading}
        cssOverride={override}
        size={100}
        ara-label="Loading Spinner"
        data-testid="loader"
      />
      <p className="font-poppins text-center mt-2">Loading...</p>
      <FooterBar />
    </div>
  );
};

export default CircleLoader;
