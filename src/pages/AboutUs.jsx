import styled from 'styled-components'

import Story from '../components/Story'

import TargetIcon from '../assets/TargetIcon.svg'
import EyeIcon from '../assets/EyeIcon.svg'
import HandsIcon from '../assets/HandsIcon.svg'
import Fishermen from '../assets/Fishermen.svg'
import Sea from '../assets/Sea.svg'
import LeftCard from '../assets/LeftCard.png'
import RightCard from '../assets/RightCard.png'
import Plant from '../assets/Plant.svg'
import HandsOnTraining from '../assets/Hands-On-Training.svg'
import Performance from '../assets/Performance.svg'
import CommunityEngagement from '../assets/Community-Engagement.svg'
import BallonDog from '../assets/BalloonDog.svg'
import BottomWavyTopRectangle from '../assets/Bottom-Wavy-Top-Rectangle.svg'

const AboutUs = () => {
  return (
    <>
        <Story />
        <img src={TargetIcon} alt='target-icon'/>
        <p>We are committed to empowering your business with cutting-edge solutions that align with your goals.</p>
        <img src={EyeIcon} alt='eye-icon'/>
        <p>Our primary focus is on delivering customized technology that caters to your unique requirements.</p>
        <img src={HandsIcon} alt='hands-icon'/>
        <p>Simultaneously we support our community through continuous learning and creative collaboration, turning our efforts into sustainable, fulfilling careers and successful businesses.</p>
        <img src={Fishermen} alt='fishermen'/>
        <img src={Sea} alt='sea-image'/>
        <h1>Consulting</h1>
        <p>At {'<Día Dev & Design>'}, we offer tailored solutions to meet your unique challenges, ensuring that your business benefits from rapid responses and minimal downtime. Our team conducts thorough analyses to pinpoint the root causes of technical issues, helping you enhance your operational efficiency and streamline your processes. By addressing problems quickly and effectively, we drive cost savings and maximize the value of your technology investments. Let us help you boost your business performance with our cost-efficient services.</p>
        <p>At {'<Día Dev & Design>'}, we are committed to fostering a collaborative partnership with your team, ensuring we fully grasp the context and impact of each issue. Using advanced tools and techniques, we conduct comprehensive diagnostics to identify problems and perform in-depth root cause analysis to ensure recurring issues are fixed. Our tailored strategies are crafted to meet your specific objectives.  We also offer preventative monitoring through systems which are designed to anticipate and mitigate future issues. Additionally, we offer continuous support with ongoing recommendations to drive your business's continual improvement.</p>
        <div>
            <img src={LeftCard} alt='left-we-build-card'/>
            <img src={RightCard} alt='right-you-get-card'/>
        </div>
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
    </>
  )
}

export default AboutUs