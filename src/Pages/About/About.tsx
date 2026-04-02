import style from "./about.module.css";
import CursorImages from "./CursorImages/CursorImages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedinIn, faGithub, faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {faLink} from "@fortawesome/free-solid-svg-icons"
const About = () => {
  return (
    <>
      <section className={style.sectionAboutMe}>

<span className={style.ooo}>
            <div className={style.imagess}>
              <CursorImages />
            </div>
</span>
<span className={style.oot}>



            <div className={style.personData}>
              <p>
                Name :{" "}
                <span className={style.answersData}>
                  Ahmed Essam El Sayed Mohamed
                </span>
              </p>
              <p>
                {" "}
                Birth Date :{" "}
                <span className={style.answersData}>Nov 5th 2002</span>
              </p>
              <p>
                Phone :{" "}
                <span className={style.answersData}>+20 109 446 1846</span>
              </p>
              <p>
                From :{" "}
                <span className={style.answersData}>
                  Meet Ghamr, Ad Daqahliyah, Egypt
                </span>
              </p>
                <p>
                Address :{" "}
                <span className={style.answersData}>
                  Cairo , Egypt
                </span>
              </p>
              <p>
                Email :{" "}
                <span className={style.answersData}>
                  ahmedessaam124@gmail.com
                </span>
              </p>
            </div>



            <div className={style.SocialIcons}>

<div className={style.oneIcon} id={style.idConFace}   ><a href="https://www.facebook.com/ahmed.egyptian.9889" target="_blank" rel="noopener noreferrer" title="Facebook" className={style.defineIcon} id={style.idFacebook}>  <FontAwesomeIcon className={style.iconSelf} icon={faFacebookF} />  </a></div>
<div className={style.oneIcon} id={style.idConFace}   ><a href="https://www.instagram.com/ahmed514essam?igsh=NnpnbzV6aXBiMHE5" target="_blank" rel="noopener noreferrer" title="Instagram" className={style.defineIcon} id={style.idFacebook}>   <FontAwesomeIcon icon={faInstagram} />  </a></div>
<div className={style.oneIcon} id={style.idConLink}><a href="https://www.linkedin.com/in/ahmed-essam-618055230" target="_blank" rel="noopener noreferrer" title="LinkedIn" className={style.defineIcon} id={style.idLinkedin}>  <FontAwesomeIcon className={style.iconSelf} icon={faLinkedinIn} />  </a></div>
<div className={style.oneIcon} id={style.idConGithup}><a href="https://github.com/ahmed514essam" target="_blank" rel="noopener noreferrer" title="GitHub" className={style.defineIcon} id={style.idGithup}>  <FontAwesomeIcon className={style.iconSelf} icon={faGithub} />  </a></div>
<div className={style.oneIcon} id={style.idConWhats}><a href="https://api.whatsapp.com/send?phone=+201094461846&text=Hi" target="_blank" rel="noopener noreferrer" title="WhatsApp" className={style.defineIcon} id={style.idWhatsApp}>  <FontAwesomeIcon className={style.iconSelf} icon={faWhatsapp} />  </a></div>


</div>


</span>





</section>




          <section className={style.infoMe}>
            {/* <span className={style.allContentSpanWho}> */}
            <div className={style.whome}>
              <h2>
                Who am I<span>?</span>
              </h2>
              <p>
      Hello Everyone!  My name is Ahmed Essam El sayed, and I'm a Full Stack Web Developer with a strong focus on Backend Development using ASP.NET technologies.
I hold a Bachelor's degree in Computer Science with a "Very Good" grade, and I graduated with distinction in my graduation project, which focused on detecting plant diseases using Machine Learning.
With over a year of hands-on experience, I have transitioned from frontend development with React to building robust, secure, and scalable backend systems.
I specialize in developing high-performance web applications using ASP.NET, Entity Framework, MVC, and RESTful APIs. I have solid experience implementing secure authentication using JWT, managing relational databases with SQL Server, and applying Clean Code principles and Design Patterns to build maintainable and efficient systems.
In addition to my backend expertise, I maintain strong frontend skills using React, enabling me to build complete end-to-end solutions and ensure seamless integration between client and server.
I am passionate about problem-solving, writing clean and scalable code, and continuously improving my skills to stay up-to-date with modern technologies.
I am currently seeking opportunities where I can contribute to building high-quality web applications and grow as a professional backend developer.
              </p>
            </div>

            <div className={style.educations}>
              <h2>Education :- </h2>
              <p>
                studies a Bachelor's degree in Computer Science at the Future
                Academy for Specialized Technological Sciences. 2021- 2025
              </p>
            </div>

            <div className={style.certifications}>
              <h2>Certificates :-</h2>
              <p>
                Eraasoft certified Frontend Web Developer
                
              </p>
              <a href="https://drive.google.com/file/d/1DH96jq-mVLTynMliffdSOQdJL2dHR5ey/view" target="_blank" rel="noopener noreferrer" className={style.openCertificate}><FontAwesomeIcon icon={faLink} /> Open</a>
            </div>
           {/* </span> */}




      </section>
    </>
  );
};
export default About;