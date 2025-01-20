import { useEffect, useState } from "react";

import MobileApp from "../mobile/App";
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
          deviceWidth > 999 ? 

            <LaptopApp /> 
          
          : 

          deviceWidth > 768 ? 

            <TabletApp /> 
          
          :

          deviceWidth  ?

            <MobileApp /> 
          
          :

          null

        }

      </>
    )

};

export { DeviceSetter }