  import "./Header.css" ;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse , faPhone , faInfo , faPager , faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import Menu from "./Menu/Menu";

  const Header = () => {
    const location = useLocation();
    return (
        <>

<header>

<div className="titleSide">
<h1 className="Title">
<span className="yTitle">M</span>y  <span className="yTitle">P</span>ort<span className="yTitle">f</span>olio
</h1>
</div>


<span className="menuSmallScreen">
<Menu/>
</span>


<div className="linksSide">





<span className="linksSapnSide">

<Link to={""} className={`navi-link ${location.pathname === "/" ? "active" : ""}`}>
<span className="oneLinkOnSide">

  <span className="iconWithOneLink">
  <FontAwesomeIcon className="iconForLink" icon={faHouse} />  </span>
  <span className="icory">

Home
</span>
</span>
</Link>

<Link to={"/about"} className={`navi-link ${location.pathname === "/about" ? "active" : ""}`}>
<span className="oneLinkOnSide">
<span className="iconWithOneLink">
<FontAwesomeIcon  className="iconForLink" icon={faInfo} />
  </span>
  <span className="icory">

About
</span>
</span>
 
</Link>

<Link to={"/myprojects"} className={`navi-link ${location.pathname === "/myprojects" ? "active" : ""}`}>
<span className="oneLinkOnSide">

<span className="iconWithOneLink">
<FontAwesomeIcon  className="iconForLink" icon={faPager} />
  </span>
  <span className="icory">

Projects
</span>
</span>
</Link>

<Link to={"/myskills"} className={`navi-link ${location.pathname === "/myskills" ? "active" : ""}`}>
<span className="oneLinkOnSide">

<span className="iconWithOneLink">
<FontAwesomeIcon  className="iconForLink" icon={faLayerGroup} />
  </span>
  <span className="icory">

Skills
</span>
</span>
</Link>

<Link to={"/contactme"} className={`navi-link ${location.pathname === "/contactme" ? "active" : ""}`}>
<span className="oneLinkOnSide">

<span className="iconWithOneLink">
<FontAwesomeIcon  className="iconForLink" icon={faPhone} />
  </span>
  <span className="icory">

Contact
</span>
</span>
</Link>



</span>




</div>





</header>

        </>
    );
  }
  export default Header ;