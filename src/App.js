import "./App.css";
import Home from "./Components/Pages/Home/Home";
import WeatherDetail from "./Components/Pages/WeatherDetails/WeatherDeatil";
import Logo from "./img/Logo.png";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="main">
      <header className="header">
        <div className="container">
          <div className="row ">
            <div className="col-12 d-flex justify-content-center align-items-center text-center mt-5 gap-3">
              <img src={Logo} alt="logo" className="logo" />
              <p className="fs-4 text-white mt-3">Weather App</p>
            </div>
          </div>
        </div>
      </header>
     
     
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather" element={<WeatherDetail />} />
        </Routes>
      </Router>
      

      <footer className="footer">
        <div className="container">
          <span className="text-gary">2021 Fidenz Technology</span>{" "}
        </div>
      </footer>
    </div>
  );
}

export default App;


