import { useVisibilityContext } from "../../contexts/useVisibilityContext";
import FooterBar from "../FooterBar";
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
        dragCloseMenuStyle={"mb-2"}
        changeMaxW={"max-w-[29rem]"}
        textHeader={"contact"}
        onClick={() => setContactVisibilityState(" hidden")}
      />
      <div className="flex flex-col bg-dGrayBGScreens  rounded justify-between min-w-[21rem] max-w-[39.5rem] p-1 px-4 gap-2">
        <a
          className="flex items-center    justify-between"
          href="https://www.youtube.com/@rafaelvendramini2598" target="_blank"
        >
          <YoutubeLogo width="1.5rem " className="w-[2rem] self-center" />

          <p className="font-poppins   w-[11.25rem] text-start">
            @rafaelvendramini2598
          </p>
          <p className="font-poppins  text-dGolden w-[4.1rem] text-right">
            Youtube
          </p>
        </a>
        <a
          className="flex items-center    justify-between"
          href="https://discord.com/channels/1137311403305349130/1137311404207112295 "
          target="_blank"
        >
          <DiscordLogo width="1.5rem " className="w-[2rem] self-center" />
          <p className="font-poppins  w-[11.25rem] text-start">
            rafaelvendramini
          </p>
          <p className="font-poppins text-dGolden w-[4.1rem] text-right">
            Discord
          </p>
        </a>

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
      <FooterBar footerStyle="mt-2" />
    </>
  );
};

export default ContactScreen;
