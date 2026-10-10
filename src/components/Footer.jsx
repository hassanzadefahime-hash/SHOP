import FooterBrand from "./footer/FooterBrand";
import FooterLinks from "./footer/FooterLinks";
import FooterContact from "./footer/FooterContact";

const Footer = () => {
  return (
    <>
      <div
        className="mt-auto lg:pt-10 lg:pb-10 px-6 overflow-hidden w-full relative grid lg:grid-cols-4 grid-cols-1 gap-8 pt-10 pb-25"
        style={{ background: "#F2F2F2" }}
      >
        <FooterBrand />

        <FooterLinks />

        <FooterContact />
      </div>
    </>
  );
};

export default Footer;
