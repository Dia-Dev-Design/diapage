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
                        At eos omnis autem non ut. Ullam sed non. Aut in in voluptatem
                        asperiores praesentium iure quos dolores cumque. Quibusdam voluptates
                        omnis dicta omnis ad quis omnis minus et. Voluptatem corrupti ut totam
                        deleniti ut praesentium.
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
                        At eos omnis autem non ut. Ullam sed non. Aut in in voluptatem
                        asperiores praesentium iure quos dolores cumque. Quibusdam voluptates
                        omnis dicta omnis ad quis omnis minus et. Voluptatem corrupti ut totam
                        deleniti ut praesentium.
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
                        At eos omnis autem non ut. Ullam sed non. Aut in in voluptatem
                        asperiores praesentium iure quos dolores cumque. Quibusdam voluptates
                        omnis dicta omnis ad quis omnis minus et. Voluptatem corrupti ut totam
                        deleniti ut praesentium.
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
                        At eos omnis autem non ut. Ullam sed non. Aut in in voluptatem
                        asperiores praesentium iure quos dolores cumque. Quibusdam voluptates
                        omnis dicta omnis ad quis omnis minus et. Voluptatem corrupti ut totam
                        deleniti ut praesentium.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services;