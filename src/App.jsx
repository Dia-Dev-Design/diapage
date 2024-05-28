import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <div className="landing-page-container">
      <NavBar className="navbar"/>
      <Header className="header"/>
      <AboutUs className="about-us"/>
    </div>
  );
}

export default App;
