import WebDev from "../../src/assets/WebDev.svg";
import CustomApplications from "../../src/assets/CustomApplications.svg";
import ProblemSolutions from "../../src/assets/ProblemSolutions.svg";
import TalentIncubator from "../../src/assets/TalenIncubator.svg";

const Services = () => {
  return (
    <div className="services-container">
      <h1 className="services-main-header">What We Do</h1>

      <div className="services-wrap-container">
        <div className="service-card1">
          <div className="services-image-container">
            <img src={WebDev} alt="" />
          </div>

          <div>
            <h1 className="services-header">Web Dev</h1>

            <p className="services-description">
              Save time and cut costs with automated, streamlined processes.
              Safeguard your data and observe compliance with advanced measures
              and best practices. Keep your software up-to-date and optimized
              with ongoing care.
            </p>
          </div>
        </div>

        <div className="service-card2">
          <div className="services-image-container">
            <img src={CustomApplications} alt="" />
          </div>

          <div>
            <h1 className="services-header">Custom Applications</h1>

            <p className="services-description">
              Solutions for your unique business needs and goals. Applications
              that evolve as your business grows. Seamlessly compatible with all
              devices and screen sizes. Intuitive design and engaging
              interfaces.
            </p>
          </div>
        </div>

        <div className="service-card3">
          <div className="services-image-container">
            <img src={ProblemSolutions} alt="" />
          </div>

          <div>
            <h1 className="services-header">Problem Solutions</h1>

            <p className="services-description">
              Solutions that address your specific challenges. Fast and
              efficient responses that minimize downtime and disruption. Drive
              savings through swift and effective issue resolution.
            </p>
          </div>
        </div>

        <div className="service-card4">
          <div className="services-image-container">
            <img src={TalentIncubator} alt="" />
          </div>

          <div>
            <h1 className="services-header">Talent Incubator</h1>

            <p className="services-description">
              Fosters the next generation of tech talent. Our program is
              designed to nurture recent graduates and emerging professionals.
              We aim to cultivate skilled professionals who can contribute to
              the technological advancement of Puerto Rico and the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
