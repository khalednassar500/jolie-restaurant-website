import "../styles/App.css";
import "../styles/homepage.css";
import "../styles/about-us.css";
import Homepage from "./homepage/Homepage";
import AboutUs from "./about-us/AboutUs";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/about-us" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
