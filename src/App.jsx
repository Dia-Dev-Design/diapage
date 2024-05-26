import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Services from "./components/Services";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="landing-page-container">
      <NavBar />
      <Header />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
