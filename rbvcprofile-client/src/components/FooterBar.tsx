type TFooterBar = {
  footerStyle?: string;
};

const FooterBar = ({ footerStyle }: TFooterBar) => {
  return (
    <footer
      className={`bg-gradient-to-r from-dBlack via-dGolden to-dGolden h-[1px] ${footerStyle}`}
    />
  );
};

export default FooterBar;
