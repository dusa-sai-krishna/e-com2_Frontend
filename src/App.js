import logo from './logo.svg';
import './App.css';
import Navigation from "./customer/components/Navigation";
import HomePage from "./customer/pages/HomePage";
import HomeSectionCarousel from "./customer/components/HomeSectionCarousel/HomeSectionCarousel";
import Footer from "./customer/components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
        <div>
          <HomePage />
          <Footer />
        </div>
    </div>
  );
}

export default App;
