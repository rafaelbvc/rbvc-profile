import FooterBar from "../../FooterBar";
// import visitorMessages from "./visitorMessages";

const ShowUserMessagesComponent = () => {
  // const { isLoading,  } = visitorMessages();

  return (
    <section className="mt-3">
      <header className="flex justify-between px-1">
        {/* <p className="text-dGolden">{`Created: ${createdAt}`}</p>
        <p className="text-dGolden">{`Updated: ${updatedAt}`}</p> */}
      </header>
      <p className="px-1 text-base border-1 border-dGoldenAlpha rounded min-w-[21rem] text-left h-7">
        {/* {title} */}
      </p>
      <textarea
        id="showMessages"
        rows={10}
        readOnly
        className="px-1 mt-1 text-base border-1 border-dGoldenAlpha rounded min-w-[21rem] mb-3"
        // value={message}
      />
      <FooterBar />
    </section>
  );
};

export default ShowUserMessagesComponent;
