import { useEffect, useState } from "react";
import { useVisibilityContext } from "../../contexts/VisibilityContext";
import DragCloseMenu from "../menus/DragCloseMenu";
import PhotoMyProfileA from "./aboutMePhotos/PhotoMyProfileA.jpg";

const AboutMeScreen = () => {
  const { setAboutVisibilityState } = useVisibilityContext();

  const [bigIMG, setBigIMG] = useState<boolean>(false);

  const handleBigImg = (v: boolean) => {
    if (v) {
      setBigIMG(false);
    } else {
      return setBigIMG(true);
    }
  };

  useEffect(() => {}, [bigIMG]);

  return (
    <>
      <DragCloseMenu
        textHeader={"about me"}
        onClick={() => setAboutVisibilityState(" hidden")}
      />
      <div className="container flex bg-dGrayBGScreens  flex-col min-w-[21rem] max-w-[39.5rem] my-1  p-2">
        <div className="flex flex-col min-w-[21rem] max-w-[39.5rem] md:flex-row">
          <div className={`${bigIMG ?  "max-w-[21rem]" : "w-[12.6rem]"}`}>
            <img
              src={PhotoMyProfileA}
              width={200}
              alt="MyProfileA"
              className={`${
                bigIMG
                  ? "relative border-[1px] border-dGolden min-w-[12.4rem]"
                  : "rounded-full bg-dtBgMainColor border-[1px] border-dGolden m-2 min-w-[12.6rem]"
              }`}
              onClick={() => handleBigImg(bigIMG)}
            />
          </div>
          <div className="p-2">
            <div className="mr-0 flex mb-1 justify-end">
              <p className=" font-poppins font-bold">Full Stack </p>
              <p className=" font-poppins text-dGolden font-bold">
                &nbsp; Developer
              </p>
            </div>
            <p className="text-justify font-poppins mt-2">
              As a ReactJS, NodeJS and Next, Full-stack developer, I have a
              strong background in building full-fledged web applications. With
              advanced knowledge in React, I can create interactive and
              responsive user interfaces while integrating with backend APIs and
              services. Leveraging NextJS, I optimize performance and rendering,
              ensuring a high-quality user experience. I have experience working
              in agile teams, collaborating effectively to deliver projects on
              time and within requirements. I tackle complex technical
              challenges and find innovative solutions for specific problems.
              Furthermore, I stay up-to-date with the latest development
              practices, actively participating in communities and constantly
              seeking to expand my technical expertise. I am passionate about
              learning and applying new technologies, ensuring that my work
              aligns with the latest industry trends. I am available for
              challenging opportunities as a React, NodeJS and NextJS,
              Full-stack developer, and I am excited to contribute to project
              success with my experience and skills.
            </p>
          </div>
        </div>
        {/* seccond section */}
        <div>
          <h3>Skills & Tools</h3>
          <p>descriop</p>
          {/* svgs */}
        </div>
        <h3>Work Experience</h3>
        <p>descr</p>
      </div>
      <div className="min-w-[21rem] max-w-[39.5rem] bg-gradient-to-r from-dGolden via-dGolden to-dBlack h-[1px]" />
    </>
  );
};

export default AboutMeScreen;
