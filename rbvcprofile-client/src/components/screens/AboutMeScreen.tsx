import { useState } from "react";

import DragCloseMenu from "../menus/DragCloseMenu";
import PhotoMyProfileA from "./aboutMePhotos/PhotoMyProfileA.jpg";
import MongoDBLogo from "../svg/MongoDBLogo";
import NextLogo from "../svg/NextLogo";
import NodeLogo from "../svg/NodeLogo";
import PrismaLogo from "../svg/PrismaLogo";
import ReactLogo from "../svg/ReactLogo";
import JavaScriptLogo from "../svg/JavaScriptLogo";
import TailwindCSSLogo from "../svg/TailwindCSSLogo";
import TypeScriptLogo from "../svg/TypeScriptLogo";
import { useVisibilityContext } from "../../contexts/useVisibilityContext";


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

  return (
    <>
      <DragCloseMenu
        textHeader={"about"}
        onClick={() => setAboutVisibilityState(" hidden")}
      />
      <div className="container flex bg-dGrayBGScreens  rounded  flex-col min-w-[21rem] max-w-[39.5rem] mb-1  p-1">
        <div className="flex flex-col items-center  md:flex-row">
          <div className={`${bigIMG ? "max-w-[21rem]" : "w-[12.5rem]"}`}>
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
            <div className="mr-0 flex mb-1 justify-center">
              <p className=" font-poppins font-bold my-5">Skills &</p>
              <p className=" font-poppins text-dGolden font-bold my-5">
                &nbsp; Tools
              </p>
            </div>
            <div className="flex justify-center flex-row flex-wrap gap-4">
              <JavaScriptLogo width={"5rem"} />
              <MongoDBLogo width={"5rem"} />
              <NextLogo width={"5rem"} />
              <NodeLogo width={"5rem"} />
              <PrismaLogo width={"5rem"} />
              <ReactLogo width={"5rem"} />
              <TailwindCSSLogo width={"5rem"} />
              <TypeScriptLogo width={"5rem"} />
            </div>
          </div>
          <div className="p-1">
            <div className="mr-0 flex mb-1 justify-end">
              <p className=" font-poppins font-bold">Full Stack </p>
              <p className=" font-poppins text-dGolden font-bold">
                &nbsp; Developer
              </p>
            </div>
            <p className="text-justify font-poppins mt-2 pl-2">
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
            <div className="mr-0 flex mb-1 justify-end">
              <p className=" font-poppins font-bold">Work </p>
              <p className=" font-poppins text-dGolden font-bold">
                &nbsp; Experience
              </p>
            </div>
            <div>
              <p className="text-justify justify-end font-poppins mt-2 pl-2">
                RBVC Soluções Tecnológicas Freelance Web Developer | May 2023 -
                Present (1 month)
                <br /> • Web development using agile methodology
                <br /> • Proficient in ReactJS, React Native, NextJS, NodeJS,
                and FullStack <br />• Knowledge of SQL and NoSQL databases
                <br />• Experience with Git and DevOps
              </p>
            </div>
            <div className="min-w-[21rem] my-2 max-w-[39.5rem] bg-gradient-to-r from-dGolden via-dGolden to-dBlack h-[1px]" />
          </div>
        </div>
        <div>
          <p className="text-justify justify-end font-poppins mt-2 pl-2">
            MeuCompromisso Fullstack & Mobile Developer | May 2022 - May 2023 (1
            year 1 month)
            <br />• Front-end development using ReactJS and React Native
            <br />• Skills in Components, Containers, Redux, Context API,
            Lifecycle, Jest, Mocha, Styled Components, Forms, Clean Code, Pair
            Programming, CI/CD, BitBucket, GitHub, API Integration and
            Consumption
            <br />• Experience in development and production environments
            <br />• Publishing on-demand in Production, Play Store, and App
            Store
          </p>
        </div>
        <div className="min-w-[21rem] max-w-[39.5rem] bg-gradient-to-r my-2 from-dGolden via-dGolden to-dBlack h-[1px]" />
        <div>
          <p className="text-justify justify-end font-poppins mt-2 pl-2">
            Cadmus Soluções em TI Software Developer | November 2021 - April
            2022 (6 months)
            <br />• Java development using SpringBoot
            <br />• Utilization of ArchUnit for architecture testing
            <br />• JUnit for functional testing
            <br />• Deployment and migration
          </p>
        </div>
        <div className="min-w-[21rem] max-w-[39.5rem] my-2 bg-gradient-to-r from-dGolden via-dGolden to-dBlack h-[1px]" />
        <div>
          <p className="text-justify justify-end font-poppins mt-2 pl-2">
            Autonomous February 2015 - April 2018 (3 years 3 months)
            <br />• Banner design
            <br />• Creation of starter sites and digital banners
            <br />• Flash Action Script (older version)
          </p>
        </div>
      </div>
      <div className="min-w-[21rem] mb-2 max-w-[39.5rem] bg-gradient-to-r from-dGolden via-dGolden to-dBlack h-[1px]" />
    </>
  );
};

export default AboutMeScreen;
