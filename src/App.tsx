import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Root from "./Root";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Skills from "./Pages/Skills/Skills";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/ContactUs/Contact";
import MainDashboard from "./Pages/Dashboard/MainDashboard";
import Login from "./Pages/Dashboard/Login";







function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root/>}>
 <Route path="/" element={<Home/>} />
 <Route path="/about" element={<About/>} />
 <Route path="/myskills" element={<Skills/>}/>
 <Route path="/myprojects" element={<Projects/>} />
 <Route path="contactme" element={<Contact/>} />
<Route path="/maindashboard" element={<MainDashboard/>}/>
  <Route path="/login" element={<Login />} />
;




        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;