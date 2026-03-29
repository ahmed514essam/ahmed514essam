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
import ProtectedRoute from "./Pages/Components/ProtectedRoute";






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
 
<Route path="/maindashboard" element={
  <ProtectedRoute>
  <MainDashboard/>
  </ProtectedRoute>
  } />
  <Route path="/login" element={<Login />} />

<Route path="/showProjects" element={  <ProtectedRoute>
<ShowProject /> </ProtectedRoute>} />
<Route path="/addProject" element={  <ProtectedRoute>
 <AddProject /> </ProtectedRoute>} />
<Route path="/edit-project/:id" element={  <ProtectedRoute>
 <EditProject /> </ProtectedRoute>} />

<Route path="/showSkills" element={  <ProtectedRoute>
<ShowSkills /> </ProtectedRoute>} />
<Route path="/edit-skill/:id" element={   <ProtectedRoute>
<EditSkill /> </ProtectedRoute>} />
<Route path="/add-skill" element={  <ProtectedRoute>
<AddSkill /> </ProtectedRoute>} />

<Route path="/addabout" element={  <ProtectedRoute>
<AddAbout /> </ProtectedRoute>} />
<Route path="editabout" element={  <ProtectedRoute>
<EditAbout /> </ProtectedRoute>} />

<Route path="/addcertificate" element={  <ProtectedRoute>
<AddCertificate /> </ProtectedRoute>} />
<Route path="/edit-certificate/:id" element={  <ProtectedRoute>
<EditCertificate /></ProtectedRoute>} />
<Route path="/all-certificates" element={  <ProtectedRoute>
<AllCertificates /></ProtectedRoute>} />

<Route path="addhome" element={  <ProtectedRoute>
<AddHome/> </ProtectedRoute>} />
<Route path="edithome" element={  <ProtectedRoute>
<EditHome/> </ProtectedRoute>} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;