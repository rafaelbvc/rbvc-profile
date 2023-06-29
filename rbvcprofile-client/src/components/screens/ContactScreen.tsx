import { useVisibilityContext } from "../../contexts/VisibilityContext";
import DragCloseMenu from "../menus/DragCloseMenu";
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
      <div className="container flex flex-row min-w-[21rem] max-w-[39.5rem] p-2">
        <YoutubeLogo widthSVG="60px" />
        <DiscordLogo widthSVG="60px" />
        <WhatsAppLogo widthSVG="60px" />
        <LinkedInLogo widthSVG="60px" />
        <EmailLogo widthSVG="60px" />
      </div>
    </>
  );
};

export default ContactScreen;
