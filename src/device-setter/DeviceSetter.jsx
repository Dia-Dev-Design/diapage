import { useEffect, useState } from "react";

import MobileApp from "../mobile/App";
// import MobileApp from '../mobile-landing-experiment/App'
// import MobileApp from '../mobile-landing-experiment-2/App'
import TabletApp from '../tablet/App'
import LaptopApp from '../laptop/App'

const DeviceSetter = () => {

    const [deviceWidth, setDeviceWidth] = useState(null)

    window.addEventListener('resize', () => {
      let width = window.document.body.getBoundingClientRect().width
      setDeviceWidth(width)
    })

    useEffect(() => {
      let width = window.document.body.getBoundingClientRect().width
      setDeviceWidth(width)
    }, [])

    return (
      <>
        {

          deviceWidth > 1024 ?

            <LaptopApp /> 
          
          :

          deviceWidth ?

            <MobileApp /> 
          
          :

          null

        }

      </>
    )

};

export { DeviceSetter }
