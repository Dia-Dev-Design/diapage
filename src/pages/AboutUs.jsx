import styled from 'styled-components'

import Story from '../components/Story'
import WhyWeDoIt from '../components/WhyWeDoIt'
import Consulting from '../components/Consulting'



import LeftCard from '../assets/LeftCard.png'
import RightCard from '../assets/RightCard.png'
import Plant from '../assets/Plant.svg'
import HandsOnTraining from '../assets/Hands-On-Training.svg'
import Performance from '../assets/Performance.svg'
import CommunityEngagement from '../assets/Community-Engagement.svg'
import BallonDog from '../assets/BalloonDog.svg'
import BottomWavyTopRectangle from '../assets/Bottom-Wavy-Top-Rectangle.svg'

const AboutUsPage = styled.div`
    ${'' /* height: 420vh; */}
    width: 100%;
    display: flex;
    flex-direction: column;
    ${'' /* justify-content: normal; */}

`

const WeBuildContainerLeft = styled.div`
    display: flex;
    height: 67vh;
    width: unset;
    aspect-ratio: 85/100;
    margin-left: 4.7%;
    transform: rotate(-15deg);
    padding: 24px 16px 96px 16px;
    flex-direction: column;
    align-items: flex-start;
    gap: 23px;
    border-radius: 20px;
    border: 8px solid #77B9F3;
    background: rgba(119, 185, 243, 0.30);
    box-shadow: 4px -4px 6px 2px rgba(0, 0, 0, 0.25) inset, -4px 4px 6px 2px rgba(0, 0, 0, 0.25) inset;
    backdrop-filter: blur(5px);
`
const TemporaryDiv = styled.div`
    height: 100vh;
    width: 100%;
    border: 2px solid black;
    display: block;
    ${'' /* overflow-y: hidden; */}
`

const AboutUs = () => {
  return (
    <AboutUsPage>
        <Story />
        <WhyWeDoIt />
        <Consulting />

        <br />

        <TemporaryDiv>
            <WeBuildContainerLeft>
                
            </WeBuildContainerLeft>
            {/* <div>
                <img src={LeftCard} alt='left-we-build-card'/>
                <img src={RightCard} alt='right-you-get-card'/>
            </div> */}
            <img src={Plant} alt='plant-image'/>
            <h1>Tech & Talent Incubator</h1>
            <div>
                <div>
                    <img src={HandsOnTraining} alt='hands-on-training'/>
                    <h4>Hands-On Training</h4>
                    <p>Training and workshops covering the latest technologies and industry best practices.</p>
                </div>
                <div>
                    <img src={Performance} alt='performance'/>
                    <h4>Performance Feedback</h4>
                    <p>Training and workshops covering the latest technologies and industry best practices.</p>
                </div>
                <div>
                    <img src={CommunityEngagement} alt='community-engagement'/>
                    <h4>Community Engagement</h4>
                    <p>Participate in advancing local technological innovation and progress.</p>
                </div>
            </div>
            <img src={BallonDog} alt='ballon-dog'/>
            <img src={BottomWavyTopRectangle} alt='bottom-wavy-top-rectangle'/>

        </TemporaryDiv>


    </AboutUsPage>
  )
}

export default AboutUs