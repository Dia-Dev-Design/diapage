import headerImg from "../assets/headerImage.svg";

const Header = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth', // Add smooth scrolling behavior
    });
  };

  return (
    <div className="landing-page-header-container">
      <div className="landing-page-header-content">
        <h1 className="landing-page-header">
          Every-{" "}
          <span className="green-color" id="dia">
            Día
          </span>{". "}
          We build. We create. You Succeed.
        </h1>
        <p className="landing-page-header-description">
          We partner with you to craft tailored applications that meet your
          unique requirements, operational needs, and strategic goals. Our focus
          is on efficiency, productivity, and innovation.
        </p>
        <button className="contact-us-button" onClick={scrollToBottom}>Contact Us</button>
      </div>
      <div className="landing-page-header-image-container">
        <img src={headerImg} alt="" />
      </div>
    </div>
  );
};

export default Header;
