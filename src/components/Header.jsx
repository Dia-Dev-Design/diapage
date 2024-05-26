import headerImg from "../assets/headerImage.svg";

const Header = () => {
  return (
    <div className="landing-page-header-container">
        <div className="landing-page-header-content">
          <h1 className="landing-page-header">
            Every <span className="green-text" id="dia">Día</span> is Creative, Building & Successful
          </h1>
          <p className="landing-page-header-description">
            At eos omnis autem non ut. Ullam sed non. Aut in in voluptatem
            asperiores praesentium iure quos dolores cumque. Quibusdam voluptates
            omnis dicta omnis ad quis omnis minus et. Voluptatem corrupti ut totam
            deleniti ut praesentium.
          </p>
          <button className="contact-us-button">Contact Us</button>
        </div>
        <div className="landing-page-header-image-container">
          <img src={headerImg} alt="" />
        </div>
      </div>
  )
}

export default Header