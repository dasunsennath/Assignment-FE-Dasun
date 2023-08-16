import "./App.css";
import Home from "./Pages/Home/Home";
import WeatherDetail from "./Pages/WeatherDetails/WeatherDeatil";
import Logo from "./Assets/Logo/Logo.png"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { APP_NAME, FOOTER_TEXT } from "./Constant/appInfo";
function App() {
  return (
    <div className="main">
      <header className="header">
        <div className="container">
          <div className="row ">
            <div className="col-12 d-flex justify-content-center align-items-center text-center mt-5 gap-3">
              <img src={Logo} alt="logo" className="logo" />
              <p className="fs-4 text-white mt-3">{APP_NAME}</p>
            </div>
          </div>
        </div>
      </header>
     
     
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":city" element={<WeatherDetail />} />
        </Routes>
      </Router>
      

      <footer className="footer">
        <div className="container">
          <span className="text-gary">{FOOTER_TEXT}</span>{" "}
        </div>
      </footer>
    </div>
  );
}

export default App;


