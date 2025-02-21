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
                Address :{" "}
                <span className={style.answersData}>
                  Meet Ghamr, Ad Daqahliyah, Egypt
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

<div className={style.oneIcon} id={style.idConFace}   ><a href="https://www.facebook.com/ahmed.egyptian.9889" target="_blank" className={style.defineIcon} id={style.idFacebook}>  <FontAwesomeIcon className={style.iconSelf} icon={faFacebookF} />  </a></div>
<div className={style.oneIcon} id={style.idConLink}><a href="https://www.linkedin.com/in/ahmed-essam-618055230" target="_blank" className={style.defineIcon} id={style.idLinkedin}>  <FontAwesomeIcon className={style.iconSelf} icon={faLinkedinIn} />  </a></div>
<div className={style.oneIcon} id={style.idConGithup}><a href="https://github.com/ahmed514essam" target="_blank" className={style.defineIcon} id={style.idGithup}>  <FontAwesomeIcon className={style.iconSelf} icon={faGithub} />  </a></div>
<div className={style.oneIcon} id={style.idConWhats}><a href="https://api.whatsapp.com/send?phone=+201094461846&text=Hi" target="_blank" className={style.defineIcon} id={style.idWhatsApp}>  <FontAwesomeIcon className={style.iconSelf} icon={faWhatsapp} />  </a></div>


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
                Hello Everyone! My name is Ahmed Essam El-Sayed, and I am a
                front-end web developer with expertise in React and Next.js
                frameworks. With a year of hands-on experience, I have been
                designing, learning, and expanding my skill set in web
                development. I have a passion for creating dynamic and engaging
                web interfaces using JavaScript and have successfully completed
                several projects. I am eager to grow further in this field and
                would be thrilled to collaborate with you to create a
                high-quality website. I take pride in my ability to think
                creatively, solve problems effectively, and write clean,
                well-structured code. Additionally, I am committed to continuous
                learning and keeping up with modern technologies and trends.
                Currently, I am pursuing a degree in Computer Science at Future
                Academy.
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
              <a href="https://drive.google.com/file/d/1DH96jq-mVLTynMliffdSOQdJL2dHR5ey/view" target="_blank" className={style.openCertificate}><FontAwesomeIcon icon={faLink} /> Open</a>
            </div>
           {/* </span> */}




      </section>
    </>
  );
};
export default About;
