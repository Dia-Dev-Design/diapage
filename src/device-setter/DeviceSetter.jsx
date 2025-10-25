import { useEffect, useState } from "react";

import MobileApp from "../mobile/App";

// import TabletApp from '../tablet/App'
import LaptopApp from "../laptop/App";

const DeviceSetter = () => {
  const [deviceWidth, setDeviceWidth] = useState(null);

  const resize = () => {
    let width = window.document.body.getBoundingClientRect().width;
    setDeviceWidth(width);
  };

  useEffect(() => {
    resize();

    window.addEventListener("resize", () => {
      resize();
    });

    return () => {
      window.removeEventListener("resize", () => {
        setDeviceWidth(null);
      });
    };
  }, []);

    return (
      <>
        {

          deviceWidth > 1024 ?

            <LaptopApp resize={resize} /> 

          :

          deviceWidth ?

            <MobileApp resize={resize} /> 

          :

          null

        }

      </>
    )

};

export { DeviceSetter }
