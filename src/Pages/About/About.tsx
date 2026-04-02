import style from "./about.module.css";
import CursorImages from "./CursorImages/CursorImages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedinIn, faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
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

<div className={style.oneIcon} id={style.idConFace}   ><a rel="noopener noreferrer"  href="https://www.facebook.com/ahmed.egyptian.9889" target="_blank" className={style.defineIcon} id={style.idFacebook} title="Visit Facebook">  <FontAwesomeIcon className={style.iconSelf} icon={faFacebookF} />  </a></div>
<div className={style.oneIcon} id={style.idConLink}><a rel="noopener noreferrer" href="https://www.linkedin.com/in/ahmed-essam-618055230" target="_blank" className={style.defineIcon} id={style.idLinkedin} title="Visit LinkedIn">  <FontAwesomeIcon className={style.iconSelf} icon={faLinkedinIn} />  </a></div>
<div className={style.oneIcon} id={style.idConGithup}><a rel="noopener noreferrer" href="https://github.com/ahmed514essam" target="_blank" className={style.defineIcon} id={style.idGithup} title="Visit GitHub">  <FontAwesomeIcon className={style.iconSelf} icon={faGithub} />  </a></div>
<div className={style.oneIcon} id={style.idConWhats}><a rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=+201094461846&text=Hi" target="_blank" className={style.defineIcon} id={style.idWhatsApp} title="Contact via WhatsApp">  <FontAwesomeIcon className={style.iconSelf} icon={faWhatsapp} />  </a></div>


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
       Hello Everyone!  My name is Ahmed Essam Elsayed, and I am a Full Stack Web Developer with a strong focus on Backend Development using ASP.NET technologies.
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
               Bachelor's degree in Computer Science with C+ grade, and I graduated with distinction in
                 at the Future Academy for Specialized Technological Sciences. 2021- 2025
               <p> Graduation Project : A </p>
              </p>
            </div>

            <div className={style.certifications}>
              <h2>Certificates :-</h2>
              <p>
                Eraasoft certified Frontend Web Developer
              </p>
              <a rel="noopener noreferrer" href="https://drive.google.com/file/d/1DH96jq-mVLTynMliffdSOQdJL2dHR5ey/view" target="_blank" className={style.openCertificate} title="Open Certificate"><FontAwesomeIcon icon={faLink} /> Open</a>
                 <p>

 ITIDA certified Entrepreneurship 
              </p>
                            <a rel="noopener noreferrer" href="https://drive.google.com/file/d/1QJNPEuae3fM2aByn8sJ5KDGYdE8diNZH/view" target="_blank" className={style.openCertificate} title="Open Certificate"><FontAwesomeIcon icon={faLink} /> Open</a>
              <p>

JavaScript Specialist Certification

              </p>
                            <a rel="noopener noreferrer" href="https://drive.google.com/file/d/1z6ZWJReEgtXzi3JwjhdFHQdDBdQD5-HB/view" target="_blank" className={style.openCertificate} title="Open Certificate"><FontAwesomeIcon icon={faLink} /> Open</a>
            </div>
           {/* </span> */}




      </section>
    </>
  );
};
export default About;
