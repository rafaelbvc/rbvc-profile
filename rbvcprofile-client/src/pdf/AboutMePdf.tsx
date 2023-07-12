import { useRef } from "react";
import ReactToPrint from "react-to-print";
import AboutMeScreen from "../components/screens/AboutMeScreen";

const AboutMePdf = () => {
  let aboutMePdfRef = useRef<any>(null);

  const marginTop = "20mm";
  const marginRight = "20mm";
  const marginBottom = "20mm";
  const marginLeft = "20mm";

  const getPageMargins = () => {
    return `@page { 
    removeAfterPrint: true; 
    margin: ${marginTop} ${marginRight} ${marginBottom} ${marginLeft} !important; 
    size: 210mm 297mm;
    display: true;
    }`;
  };

  return (
    <div>
      <ReactToPrint
        trigger={() => (
          <div className="flex justify-end w-full">
            <button className="text-dGolden animate-ping font-poppins text-semibold text-xxs mx-[22%]  mb-[-0.75rem]">
              PRINT
            </button>
          </div>
        )}
        content={() => aboutMePdfRef.current}
      />

      <style>
        {getPageMargins()}
        <AboutMeScreen ref={aboutMePdfRef} />
      </style>
    </div>
  );
};

export default AboutMePdf;
