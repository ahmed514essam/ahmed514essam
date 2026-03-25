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
import ShowProject from "./Pages/Dashboard/ProjectDash/ShowProject";
import AddProject from "./Pages/Dashboard/ProjectDash/AddProject";
import EditProject from "./Pages/Dashboard/ProjectDash/EditProject";
import ShowSkills from "./Pages/Dashboard/SkillDash/ShowSkills";
import EditSkill from "./Pages/Dashboard/SkillDash/EditSkill";
import AddSkill from "./Pages/Dashboard/SkillDash/AddSkill";
import AddAbout from "./Pages/Dashboard/AboutDash/AddAboutDash";
import EditAbout from "./Pages/Dashboard/AboutDash/EditAboutDash";
import AddCertificate from "./Pages/Dashboard/certificatesDash/AddCertificate";
import EditCertificate from "./Pages/Dashboard/certificatesDash/EditCertificate";
import AllCertificates from "./Pages/Dashboard/certificatesDash/AllCertificates";
import AddHome from "./Pages/Dashboard/HomeDash/AddHomeInfo";
import EditHome from "./Pages/Dashboard/HomeDash/EditHomeInfo";






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

<Route path="/showProjects" element={<ShowProject />} />
<Route path="/addProject" element={<AddProject />} />
<Route path="/edit-project/:id" element={<EditProject />} />

<Route path="/showSkills" element={<ShowSkills />} />
<Route path="/edit-skill/:id" element={<EditSkill />} />
<Route path="/add-skill" element={<AddSkill />} />

<Route path="/addabout" element={<AddAbout />} />
<Route path="editabout" element={<EditAbout />} />

<Route path="/addcertificate" element={<AddCertificate />} />
<Route path="/edit-certificate/:id" element={<EditCertificate />} />
<Route path="/all-certificates" element={<AllCertificates />} />

<Route path="addhome" element={<AddHome/>} />
<Route path="edithome" element={<EditHome/>} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;