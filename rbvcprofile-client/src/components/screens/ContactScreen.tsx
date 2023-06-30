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
      <div className="container flex flex-row justify-between min-w-[21rem] max-w-[39.5rem] p-1 gap-2">
        <div>Rusa blabla</div>
        <div>
          <div className="flex items-center gap-2 my-2">
            <p className="font-poppins font-mid">Youtube, Soon... </p>
            <YoutubeLogo width="3rem" />
          </div>
          <div className="flex items-center gap-2 my-2 justify-between">
            <p className="font-poppins">Youtube</p>
            <DiscordLogo width="3rem" />
          </div>
          <div className="flex items-center gap-2 my-2 justify-between">
            <p className="font-poppins">Youtube</p>
            <WhatsAppLogo width="3rem" />
          </div>
          <div className="flex items-center gap-2 my-2 justify-between">
            <p className="font-poppins">Youtube</p>
            <LinkedInLogo width="3rem" />
          </div>
          <div className="flex items-center gap-2 my-2 justify-between">
            <p className="font-poppins">Youtube</p>
            <EmailLogo width="3rem" />
          </div>
        </div>
      </div>
      <div className="min-w-[21rem] max-w-[39.5rem] bg-gradient-to-r from-dGolden via-dGolden to-dBlack h-[1px]" />
    </>
  );
};

export default ContactScreen;
