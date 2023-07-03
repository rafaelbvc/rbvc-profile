import { useVisibilityContext } from "../../contexts/useVisibilityContext";
import DragCloseMenu from "../menus/DragCloseMenu";
import AdressLogo from "../svg/AdressLogo";
import DiscordLogo from "../svg/DiscordLogo";
import EmailLogo from "../svg/EmailLogo";
import LinkedInLogo from "../svg/LinkedInLogo";
import WhatsAppLogo from "../svg/WhatsAppLogo";
import YoutubeLogo from "../svg/YoutubeLogo";

const ContactScreen = () => {
  const { setContactVisibilityState } = useVisibilityContext();

  return (
    <>
      <DragCloseMenu
        textHeader={"contact"}
        onClick={() => setContactVisibilityState(" hidden")}
      />
      <div className="container flex flex-col bg-dGrayBGScreens  rounded justify-between min-w-[21rem] max-w-[39.5rem] p-1 px-4 gap-1">
        <div className="flex items-center    justify-between">
          <YoutubeLogo width="1.5rem " className="w-[2rem] self-center" />

          <p className="font-poppins   w-[11.25rem] text-start">ToDo</p>
          <p className="font-poppins  text-dGolden w-[4.1rem] text-right">
            Youtube
          </p>
        </div>
        <div className="flex items-center    justify-between">
          <DiscordLogo width="1.5rem " className="w-[2rem] self-center" />
          <p className="font-poppins  w-[11.25rem] text-start">ToDo</p>
          <p className="font-poppins text-dGolden w-[4.1rem] text-right">
            Discord
          </p>
        </div>

        <a
          href="https://api.whatsapp.com/send?phone=1599825428"
          target="_blank"
          rel="noreferrer"
          className="flex items-center  justify-between"
        >
          <WhatsAppLogo width="1.5rem" className="w-[2rem] self-center" />
          <p className="font-poppins  w-[11.25rem] text-start">
            (+55) 15 99825-4287
          </p>
          <p className="font-poppins text-dGolden w-[4.1rem] text-right">
            Mobile
          </p>
        </a>

        <a
          className="flex items-center    justify-between"
          href="https://www.linkedin.com/in/rafael-vendramini/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInLogo width="1.5rem" className="self-center w-[2rem] " />

          <p className="font-poppins  w-[11.25rem] text-start">
            /rafael-vendramini/
          </p>
          <p className="font-poppins text-dGolden w-[4.1rem] text-right">
            Linked In
          </p>
        </a>

        <a
          href="mailto:rafaelbvc@hotmail.com"
          className="flex items-center    justify-between"
        >
          <EmailLogo width="1.5rem" className="w-[2rem] self-center" />
          <p className="font-poppins w-[11.25rem] text-start">
            rafaelbvc@hotmail.com
          </p>
          <p className="font-poppins text-dGolden w-[4.1rem] text-right">
            E-mail
          </p>
        </a>

        <div className="flex items-center justify-between">
          <AdressLogo width="1.5rem" className="w-[2rem] self-center" />
          <p className="font-poppins w-[11.25rem] text-start">São Paulo</p>
          <p className="font-poppins text-dGolden w-[4.1rem] text-right">
            &nbsp; Brazil
          </p>
        </div>
      </div>
      <div className="min-w-[21rem] max-w-[39.5rem] bg-gradient-to-r from-dGolden via-dGolden to-dBlack h-[1px]" />
    </>
  );
};

export default ContactScreen;

// import { useVisibilityContext } from "../../contexts/VisibilityContext";
// import DragCloseMenu from "../menus/DragCloseMenu";
// import DiscordLogo from "../svg/DiscordLogo";
// import EmailLogo from "../svg/EmailLogo";
// import LinkedInLogo from "../svg/LinkedInLogo";
// import WhatsAppLogo from "../svg/WhatsAppLogo";
// import YoutubeLogo from "../svg/YoutubeLogo";

// const ContactScreen = () => {
//   const { setContactVisibilityState } = useVisibilityContext();

//   return (
//     <>
//       <DragCloseMenu
//         textHeader={"contact"}
//         onClick={() => setContactVisibilityState(" hidden")}
//       />

//       <div className="container flex flex-cols p-1 px-4 gap-4">
//         <div className=" flex flex-col  gap-1">
//           <YoutubeLogo width="1.5rem" />
//           <DiscordLogo width="1.5rem" />
//           <WhatsAppLogo width="1.5rem" />
//           <a
//             className=""
//             href="https://www.linkedin.com/in/rafael-vendramini/"
//             target="_blank"
//           >
//             <LinkedInLogo width="1.5rem" />
//           </a>
//           <a
//             href="mailto:rafaelbvc@hotmail.com"
//             className="flex justify-between  "
//           >
//             <EmailLogo width="1.5rem" />
//           </a>
//           <p className="font-poppins">São Paulo</p>
//         </div>

//         <div className="flex flex-col  gap-1 ">
//           <p className="font-poppins ">ToDo</p>
//           <p className="font-poppins ">ToDo</p>
//           <p className="font-poppins">(+55) 15 99825-4287 </p>
//           <p className="font-poppins">/rafael-vendramini/</p>
//           <p className="font-poppins ">rafaelbvc@hotmail.com</p>
//           <p className="font-poppins">Itapetininga</p>
//         </div>

//         <div className="flex flex-col  gap-1">
//           <p className="font-poppins text-dGolden">Youtube</p>
//           <p className="font-poppins text-dGolden">Discord</p>
//           <p className="font-poppins text-dGolden"> Mobile</p>
//           <p className="font-poppins text-dGolden">Linked In</p>
//           <p className="font-poppins text-dGolden">E-mail</p>
//           <p className="font-poppins text-dGolden">Brazil</p>
//         </div>
//       </div>
//       <div className="min-w-[21rem] max-w-[39.5rem] bg-gradient-to-r from-dGolden via-dGolden to-dBlack h-[1px]" />
//     </>
//   );
// };

// export default ContactScreen;
