const NavBar = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth', // Add smooth scrolling behavior
    });
  };
  return (
    <div className="landing-page-nav-container">
        <header className="dia-dev-design-title">Día Dev & Design</header>
        <button className="contact-us-button" onClick={scrollToBottom}>Contact Us</button>
    </div>
  )
}

export default NavBar