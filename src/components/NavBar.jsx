import styled from "styled-components";

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 98%;
  height: 77px;
`

const Title = styled.header`
  width: 298px;
  height: 44px;
  font-size: 2em;
  font-weight: 700;
`

const ContactButton = styled.button`
  width: 150px;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  color: #FFFFFF;
  background-color: var(--green);
  height: 45px;
  padding: 0;
  border: none;
  border-radius: 8px;
  transition: background-color 0.1s ease-in-out;

  &:hover {
    background-color: #a9e6b9;
  }
`
const ContactLink = styled.a`
  text-decoration: none
`

const NavBar = () => {

  
  
  
  const scrollToBottom = () => {
    console.log("This is document", )
    window.scrollTo({
      top: document.getElementById('contact').getBoundingClientRect().top,
      behavior: 'smooth', // Add smooth scrolling behavior
    });
  };

  return (
    <NavContainer>
        <Title>Día Dev & Design</Title>
          {/* <ContactLink href='#contact'> */}
        <ContactButton 
        onClick={scrollToBottom}
        >
            Contact Us
        
        </ContactButton>
          {/* </ContactLink> */}
    </NavContainer>
  )
}

export default NavBar