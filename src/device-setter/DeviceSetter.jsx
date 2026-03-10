import { useEffect, useState } from "react";

import MobileApp from "../mobile/App";

// import TabletApp from '../tablet/App'
import LaptopApp from "../laptop/App";

const DeviceSetter = () => {
  const [deviceWidth, setDeviceWidth] = useState(null);

  const resize = () => {
    let width = window.innerWidth;
    setDeviceWidth(width);
  };

  useEffect(() => {
    resize();

    let timeoutId;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        resize();
      }, 150);
    };

    window.addEventListener("resize", debouncedResize);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", debouncedResize);
    };
  }, []);

  return (
    <>
      {deviceWidth > 1024 ? (
        <LaptopApp resize={resize} />
      ) : deviceWidth ? (
        <MobileApp resize={resize} />
      ) : null}
    </>
  );
};

export { DeviceSetter };
