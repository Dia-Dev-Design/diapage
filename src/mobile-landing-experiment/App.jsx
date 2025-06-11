import React from 'react';

const Component2_3 = ({ className }) => (
  <svg
    className={`component-2-3 ${className}`}
    fill="none"
    height="101"
    viewBox="0 0 100 101"
    width="100"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      height: '100px',
      position: 'relative',
      width: '99.38px',
    }}
  >
    <path
      d="M86.1363 20.5H13.8636C13.366 20.5 12.9602 20.8743 12.9602 21.3333V79.6667C12.9602 80.1289 13.366 80.5 13.8636 80.5H86.1363C86.6375 80.5 87.0397 80.1289 87.0397 79.6667V21.3333C87.0397 20.8743 86.6375 20.5 86.1363 20.5ZM14.767 22.1667H85.2329V33H14.767V22.1667ZM85.2329 78.8333H14.767V34.6667H85.2329V78.8333Z"
      fill="#070D0D"
    />
    {/* Add other path elements here */}
  </svg>
);

const Button = ({ className }) => (
  <button
    className={`button ${className}`}
    style={{
      all: 'unset',
      backgroundColor: '#02a66a',
      borderRadius: '8px',
      boxSizing: 'border-box',
      height: '61px',
      overflow: 'hidden',
      position: 'relative',
      width: '179px',
    }}
  >
    <div
      style={{
        color: '#ffffff',
        fontFamily: '"Aileron-Bold", Helvetica',
        fontSize: '24px',
        fontWeight: 700,
        height: '29px',
        left: '27px',
        letterSpacing: 0,
        lineHeight: 'normal',
        position: 'absolute',
        textAlign: 'center',
        top: '15px',
      }}
    >
      Contact Us
    </div>
  </button>
);

const ServiceCard = () => (
  <div
    style={{
      backgroundColor: '#ffffff',
      borderRadius: '20px',
      height: '221px',
      left: '18px',
      overflow: 'hidden',
      position: 'absolute',
      top: '1300px',
      width: '359px',
    }}
  >
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        gap: '16px',
        justifyContent: 'center',
        left: '8px',
        position: 'relative',
        top: '16px',
        width: '343px',
      }}
    >
      <Component2_3 className="component" />
      <div
        style={{
          alignItems: 'flex-start',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          position: 'relative',
          width: '219px',
        }}
      >
        <div
          style={{
            color: '#77b9f3',
            fontFamily: '"Aileron-Bold", Helvetica',
            fontSize: '24px',
            fontWeight: 700,
            letterSpacing: 0,
            lineHeight: 'normal',
            marginTop: '-1px',
            position: 'relative',
            width: 'fit-content',
          }}
        >
          Web Dev
        </div>
        <p
          style={{
            alignSelf: 'stretch',
            color: '#070D0D',
            fontFamily: '"Aileron-Regular", Helvetica',
            fontSize: '16px',
            fontWeight: 400,
            letterSpacing: 0,
            lineHeight: 'normal',
            position: 'relative',
          }}
        >
          Save time and cut costs with automated, streamlined processes.
          Safeguard your data and observe compliance with advanced measures
          and best practices. Keep your software up-to-date and optimized with
          ongoing care.
        </p>
      </div>
    </div>
  </div>
);

const FrameWrapper = () => (
  <div
    style={{
      backgroundColor: '#ffffff',
      borderRadius: '20px',
      height: '221px',
      left: '18px',
      overflow: 'hidden',
      position: 'absolute',
      top: '1537px',
      width: '359px',
    }}
  >
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        gap: '16px',
        justifyContent: 'center',
        left: '8px',
        position: 'relative',
        top: '16px',
        width: '343px',
      }}
    >
      <Component2_3 className="component-2-3" />
      <div
        style={{
          alignItems: 'flex-start',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          position: 'relative',
          width: '219px',
        }}
      >
        <div
          style={{
            color: '#77b9f3',
            fontFamily: '"Aileron-Bold", Helvetica',
            fontSize: '24px',
            fontWeight: 700,
            letterSpacing: 0,
            lineHeight: 'normal',
            marginTop: '-1px',
            position: 'relative',
            width: 'fit-content',
          }}
        >
          UI/UX Design
        </div>
        <p
          style={{
            alignSelf: 'stretch',
            color: '#070D0D',
            fontFamily: '"Aileron-Regular", Helvetica',
            fontSize: '16px',
            fontWeight: 400,
            letterSpacing: 0,
            lineHeight: 'normal',
            position: 'relative',
          }}
        >
          Create intuitive and visually appealing interfaces that enhance user experience.
          Develop user-centered designs that align with your brand identity and business goals.
          Conduct user research and testing to ensure optimal usability and satisfaction.
        </p>
      </div>
    </div>
  </div>
);

const ServiceCardWrapper = () => (
  <div
    style={{
      backgroundColor: '#ffffff',
      borderRadius: '20px',
      height: '221px',
      left: '18px',
      overflow: 'hidden',
      position: 'absolute',
      top: '1774px',
      width: '359px',
    }}
  >
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        gap: '16px',
        justifyContent: 'center',
        left: '8px',
        position: 'relative',
        top: '16px',
        width: '343px',
      }}
    >
      <Component2_3 className="component-2-1" />
      <div
        style={{
          alignItems: 'flex-start',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          position: 'relative',
          width: '219px',
        }}
      >
        <div
          style={{
            color: '#77b9f3',
            fontFamily: '"Aileron-Bold", Helvetica',
            fontSize: '24px',
            fontWeight: 700,
            letterSpacing: 0,
            lineHeight: 'normal',
            marginTop: '-1px',
            position: 'relative',
            width: 'fit-content',
          }}
        >
          Mobile App Dev
        </div>
        <p
          style={{
            alignSelf: 'stretch',
            color: '#070D0D',
            fontFamily: '"Aileron-Regular", Helvetica',
            fontSize: '16px',
            fontWeight: 400,
            letterSpacing: 0,
            lineHeight: 'normal',
            position: 'relative',
          }}
        >
          Develop cross-platform mobile applications that work seamlessly on iOS and Android devices.
          Implement robust features and functionalities tailored to your specific business needs.
          Ensure optimal performance, security, and user experience in mobile environments.
        </p>
      </div>
    </div>
  </div>
);

const DivWrapper = () => (
  <div
    style={{
      backgroundColor: '#ffffff',
      borderRadius: '20px',
      height: '221px',
      left: '18px',
      overflow: 'hidden',
      position: 'absolute',
      top: '2011px',
      width: '359px',
    }}
  >
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        gap: '16px',
        justifyContent: 'center',
        left: '8px',
        position: 'relative',
        top: '16px',
        width: '343px',
      }}
    >
      <Component2_3 className="component-2-3-instance" />
      <div
        style={{
          alignItems: 'flex-start',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          position: 'relative',
          width: '219px',
        }}
      >
        <div
          style={{
            color: '#77b9f3',
            fontFamily: '"Aileron-Bold", Helvetica',
            fontSize: '24px',
            fontWeight: 700,
            letterSpacing: 0,
            lineHeight: 'normal',
            marginTop: '-1px',
            position: 'relative',
            width: 'fit-content',
          }}
        >
          Cloud Solutions
        </div>
        <p
          style={{
            alignSelf: 'stretch',
            color: '#070D0D',
            fontFamily: '"Aileron-Regular", Helvetica',
            fontSize: '16px',
            fontWeight: 400,
            letterSpacing: 0,
            lineHeight: 'normal',
            position: 'relative',
          }}
        >
          Design and implement scalable cloud architectures to support your growing business needs.
          Migrate existing systems to cloud platforms for improved efficiency and cost-effectiveness.
          Provide ongoing cloud management and optimization services to ensure peak performance.
        </p>
      </div>
    </div>
  </div>
);

const Frame = () => (
  <div
    style={{
      backgroundColor: '#01402f',
      height: '1018px',
      left: 0,
      position: 'absolute',
      top: '2280px',
      width: '393px',
    }}
  >
    <div
      style={{
        color: '#eeeeee',
        fontFamily: '"Aileron-Bold", Helvetica',
        fontSize: '48px',
        fontWeight: 700,
        left: '16px',
        letterSpacing: 0,
        lineHeight: 'normal',
        position: 'absolute',
        textAlign: 'center',
        top: '31px',
      }}
    >
      Get in touch
    </div>
    <div
      style={{
        position: 'absolute',
        top: '105px',
        left: '16px',
        width: '361px',
        color: '#ffffff',
        fontFamily: '"Aileron-Regular", Helvetica',
        fontSize: '16px',
      }}
    >
      <p style={{ marginBottom: '20px' }}>
        Let's discuss on something cool together
      </p>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <img
          src="https://c.animaapp.com/dL8BWMJz/img/envelopefill.svg"
          alt="Envelope"
          style={{ marginRight: '10px', width: '20px', height: '20px' }}
        />
        <span>SaulDesign@gmail.com</span>
      </div>
      <div
        style={{
          backgroundColor: '#f2f2f2',
          borderRadius: '24px',
          padding: '20px',
          color: '#070D0D',
        }}
      >
        <h3 style={{ fontSize: '20px', marginBottom: '20px' }}>I'm interested in...</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
          {['UI/UX design', 'Web design', 'Graphic design', 'Design system', 'Other'].map((item) => (
            <div
              key={item}
              style={{
                padding: '10px 20px',
                borderRadius: '8px',
                border: '2px solid #070D0D4C',
                color: '#070D0D4C',
              }}
            >
              {item}
            </div>
          ))}
        </div>
        <div style={{ marginBottom: '20px' }}>
          <input
            type="text"
            placeholder="Your name"
            style={{
              width: '100%',
              padding: '10px',
              borderBottom: '2px solid #070D0D4C',
              marginBottom: '20px',
            }}
          />
          <input
            type="email"
            placeholder="Your email"
            style={{
              width: '100%',
              padding: '10px',
              borderBottom: '2px solid #070D0D4C',
              marginBottom: '20px',
            }}
          />
          <textarea
            placeholder="Your message"
            style={{
              width: '100%',
              padding: '10px',
              borderBottom: '2px solid #070D0D4C',
              resize: 'vertical',
            }}
          />
        </div>
        <button
          style={{
            backgroundColor: '#02a66a',
            color: '#ffffff',
            padding: '15px 30px',
            borderRadius: '16px',
            border: 'none',
            fontSize: '18px',
            cursor: 'pointer',
          }}
        >
          Send Message
        </button>
      </div>
    </div>
  </div>
);

const Div = () => (
  <div
    style={{
      height: '117px',
      left: 0,
      position: 'absolute',
      top: 0,
      width: '393px',
    }}
  >
    <img
      src="https://c.animaapp.com/dL8BWMJz/img/secondary-logo.svg"
      alt="Secondary logo"
      style={{
        height: '80px',
        left: '16px',
        position: 'absolute',
        top: '24px',
        width: '56px',
      }}
    />
    <img
      src="https://c.animaapp.com/dL8BWMJz/img/ic-round-menu.svg"
      alt="Ic round menu"
      style={{
        height: '32px',
        left: '345px',
        position: 'absolute',
        top: '48px',
        width: '32px',
      }}
    />
    <p
      style={{
        color: 'transparent',
        fontFamily: '"Aileron-Bold", Helvetica',
        fontSize: '32px',
        fontWeight: 700,
        height: '38px',
        left: '72px',
        letterSpacing: 0,
        lineHeight: 'normal',
        position: 'absolute',
        textAlign: 'center',
        top: '39px',
        whiteSpace: 'nowrap',
      }}
    >
      <span style={{ color: '#48d994' }}>Dia</span>
      <span style={{ color: '#070d0d' }}> dev & Design</span>
    </p>
  </div>
);

const SectionComponentNode = () => (
  <div
    style={{
      height: '401px',
      left: 0,
      position: 'absolute',
      top: '117px',
      width: '393px',
    }}
  >
    <div
      style={{
        alignItems: 'flex-start',
        display: 'inline-flex',
        flexDirection: 'column',
        gap: '32px',
        left: '16px',
        position: 'relative',
        top: '13px',
      }}
    >
      <p
        style={{
          color: 'transparent',
          fontFamily: '"Aileron-Bold", Helvetica',
          fontSize: '48px',
          fontWeight: 700,
          letterSpacing: 0,
          lineHeight: 'normal',
          marginTop: '-1px',
          position: 'relative',
          width: 'fit-content',
        }}
      >
        <span style={{ color: '#070d0d' }}>Every-</span>
        <span style={{ color: '#02a66a' }}>Día</span>
        <span style={{ color: '#070d0d' }}>
          .  
          <br />
          We create.  
          <br />
          You succeed.{' '}
        </span>
      </p>
      <p
        style={{
          color: '#070D0D',
          fontFamily: '"Aileron-Regular", Helvetica',
          fontSize: '16px',
          fontWeight: 400,
          letterSpacing: 0,
          lineHeight: 'normal',
          position: 'relative',
          width: '361px',
        }}
      >
        We partner with you to craft tailored applications that meet your
        unique requirements, operational needs, and strategic goals. Our focus
        is on efficiency, productivity, and innovation.
      </p>
      <Button className="button-instance" />
    </div>
  </div>
);

export default function App () {
  return (
    <div
      style={{
        backgroundColor: '#f2f2f2',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <div
        style={{
          backgroundColor: '#f2f2f2',
          height: '3298px',
          position: 'relative',
          width: '393px',
        }}
      >
        <div
          style={{
            color: '#070d0d',
            fontFamily: '"Aileron-Bold", Helvetica',
            fontSize: '48px',
            fontWeight: 700,
            height: '58px',
            left: '16px',
            letterSpacing: 0,
            lineHeight: 'normal',
            position: 'absolute',
            textAlign: 'center',
            top: '903px',
          }}
        >
          We are
        </div>
        <div
          style={{
            alignItems: 'flex-start',
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
            left: '16px',
            position: 'absolute',
            top: '988px',
            width: '361px',
          }}
        >
          <p
            style={{
              alignSelf: 'stretch',
              color: '#070D0D',
              fontFamily: '"Aileron-Regular", Helvetica',
              fontSize: '16px',
              fontWeight: 400,
              letterSpacing: 0,
              lineHeight: 'normal',
              marginTop: '-1px',
              position: 'relative',
            }}
          >
            We are committed to empowering your business with cutting-edge
            solutions that align with your goals. Our primary focus is on
            delivering customized technology that caters to your unique
            requirements. Simultaneously we support our community through
            continuous learning and creative collaboration, turning our efforts
            into sustainable, fulfilling careers and successful businesses.
          </p>
        </div>
        <div
          style={{
            color: '#070d0d',
            fontFamily: '"Aileron-Bold", Helvetica',
            fontSize: '48px',
            fontWeight: 700,
            left: '63px',
            letterSpacing: 0,
            lineHeight: 'normal',
            position: 'absolute',
            textAlign: 'right',
            top: '1206px',
          }}
        >
          What we do
        </div>
        <ServiceCard />
        <FrameWrapper />
        <ServiceCardWrapper />
        <DivWrapper />
        <Frame />
        <Div />
        <SectionComponentNode />
        <div
          style={{
            height: '372px',
            left: 0,
            position: 'absolute',
            top: '518px',
            width: '393px',
          }}
        >
          <img
            src="https://c.animaapp.com/dL8BWMJz/img/design-inspiration-bro.svg"
            alt="Design inspiration"
            style={{
              height: '342px',
              left: '16px',
              position: 'absolute',
              top: '3px',
              width: '362px',
            }}
          />
        </div>
      </div>
    </div>
  );
};
