import styled from 'styled-components';

const InnerContainer = styled.div`
  width: 549px;
  height: 444px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  display: inline-flex;
`;

const Section = styled.div`
  width: 100%;
  height: 47px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4px;
`;

const LargeText = styled.div`
  width: 100%;
  color: #070d0d;
  font-size: 1.25rem;
  font-weight: bold;
  font-family: 'Aileron';
`;

const SmallText = styled.div`
  width: 100%;
  color: #070d0d;
  font-size: 1rem;
  font-weight: normal;
  font-family: 'Aileron';
`;

export default function App() {
  return (
    <InnerContainer>
      <Section>
        <LargeText>Tailored</LargeText>
        <SmallText>Solutions for your unique business needs and goals.</SmallText>
      </Section>
      <Section>
        <LargeText>Scalable</LargeText>
        <SmallText>Applications that evolve as your business grows.</SmallText>
      </Section>
      <Section>
        <LargeText>Responsive</LargeText>
        <SmallText>Seamlessly compatible with all devices and screen sizes.</SmallText>
      </Section>
      <Section>
        <LargeText>Cross-Platform Integration</LargeText>
        <SmallText>Incorporate custom applications with your current systems and software.</SmallText>
      </Section>
      <Section style={{ height: '66px' }}>
        <LargeText>Robust Architecture</LargeText>
        <SmallText>Reliable and scalable software that can handle increasing loads and complexities.</SmallText>
      </Section>
      <Section>
        <LargeText>User-Centered Experience</LargeText>
        <SmallText>Intuitive design and engaging interfaces.</SmallText>
      </Section>
      <Section>
        <LargeText>Agile Development</LargeText>
        <SmallText>To deliver projects on time and adapt to changing requirements quickly.</SmallText>
      </Section>
    </InnerContainer>
  );
}