import styled from "styled-components";
import HandsOnTraining from "../../assets/Hands-On-Training.svg";
import Performance from "../../assets/Performance.svg";
import CommunityEngagement from "../../assets/Community-Engagement.svg";

// Talent Incubator Section
const TalentSection = styled.section`
  width: 100%;
  padding: 8% 4% 10%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2f2f2;
  position: relative;
  overflow: visible;
`;

const TalentTitle = styled.h2`
  font-size: clamp(3.6rem, 9vw, 4.8rem);
  font-weight: 700;
  font-family: "Aileron-Bold";
  color: #070d0d;
  margin: 10% 0 8%;
  text-align: center;
  z-index: 1;
`;

const TalentCardList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6%;
`;

const TalentCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 6%;
  box-sizing: border-box;
  z-index: 1;
`;

const TalentImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: #f0f0f0;
  margin-bottom: 6%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TalentCardTitle = styled.h4`
  font-size: clamp(1.8rem, 4.5vw, 2rem);
  font-weight: 700;
  font-family: "Aileron-Bold";
  color: #070d0d;
  margin: 0 0 3%;
`;

const TalentCardDescription = styled.p`
  font-size: clamp(1.4rem, 4vw, 1.6rem);
  font-family: "Aileron-Regular";
  color: #070d0d;
  line-height: 1.5;
  margin: 0;
  width: 110%;
  z-index: 99;
  overflow-y: visible;
`;

const Incubator = () => {
  const incubatorPrograms = [
    {
      image: HandsOnTraining,
      title: "Hands-On Training",
      description:
        "Training and workshops covering the latest technologies and industry best practices.",
    },
    {
      image: Performance,
      title: "Performance Feedback",
      description:
        "Training and workshops covering the latest technologies and industry best practices.",
    },
    {
      image: CommunityEngagement,
      title: "Community Engagement",
      description:
        "Participate in advancing local technological innovation and progress.",
    },
  ];

  return (
    <TalentSection>
      <TalentTitle>Tech Incubator</TalentTitle>
      <TalentCardList>
        {incubatorPrograms.map((program, index) => (
          <TalentCard key={index}>
            <TalentImage>
              {program.image ? (
                <img src={program.image} alt={program.title} />
              ) : (
                <span style={{ fontSize: "64px", color: "#ccc" }}>📷</span>
              )}
            </TalentImage>
            <TalentCardTitle>{program.title}</TalentCardTitle>
            <TalentCardDescription>
              {program.description}
            </TalentCardDescription>
          </TalentCard>
        ))}
      </TalentCardList>
    </TalentSection>
  );
};

export default Incubator;
