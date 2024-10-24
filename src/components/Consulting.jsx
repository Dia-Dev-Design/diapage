import styled from "styled-components"

import Fishermen from '../assets/Fishermen.svg'
import Sea from '../assets/Sea.svg'

const ConsultingPageContainer = styled.div`
    height: 83vh;
    width: 100%;
    ${'' /* background-image: url(${Sea});
    background-position: center;
    background-size: 100% 105%;
    background-repeat: no-repeat; */}
    z-index: 10;
    ${'' /* overflow-y: visible; */}
    ${'' /* position: absolute; */}
    
`
const SeaImage = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 12;
  ${'' /* top: 110em; */}
`
const ConsultingContent = styled.div`
  width: 100%;
  height: 50%;
  position: absolute;
  ${'' /* top: 50%; */}
  z-index: 13;
`

const FishermenContainer = styled.div`
  width: 14%;
  height: 7vw;
  position: relative;
  left: 15.4%;
  top: 17%;
  z-index: 13
`

const FishermenImage = styled.img`
  width: 100%;
  height: 100%;
`

const Consulting = () => {
  return (
    <ConsultingPageContainer >

        <FishermenContainer>
          <FishermenImage src={Fishermen} alt='fishermen'/>
        </FishermenContainer>
        <SeaImage src={Sea} />



        <ConsultingContent>

          {/* <img src={Sea} alt='sea-image'/> */}
          <h1>Consulting</h1>
          <p>At {'<Día Dev & Design>'}, we offer tailored solutions to meet your unique challenges, ensuring that your business benefits from rapid responses and minimal downtime. Our team conducts thorough analyses to pinpoint the root causes of technical issues, helping you enhance your operational efficiency and streamline your processes. By addressing problems quickly and effectively, we drive cost savings and maximize the value of your technology investments. Let us help you boost your business performance with our cost-efficient services.</p>
          <p>At {'<Día Dev & Design>'}, we are committed to fostering a collaborative partnership with your team, ensuring we fully grasp the context and impact of each issue. Using advanced tools and techniques, we conduct comprehensive diagnostics to identify problems and perform in-depth root cause analysis to ensure recurring issues are fixed. Our tailored strategies are crafted to meet your specific objectives.  We also offer preventative monitoring through systems which are designed to anticipate and mitigate future issues. Additionally, we offer continuous support with ongoing recommendations to drive your business's continual improvement.</p>
        </ConsultingContent>


    </ConsultingPageContainer>
  )
}

export default Consulting