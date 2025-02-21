  import style from "./Home.module.css" ;
//   import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSnowflake } from "@fortawesome/free-solid-svg-icons";
import PersonalImage from "../../../public/PersonalImage/two.png"
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedinIn, faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons";


  const Home = () => {

 const name = "I'm Ahmed Essam El Sayed" ;

//  const PersonalImage = "PersonalImage/two.png";



    return (
        <>

<section className={style.contentHomePage}>

<div className={style.detailsHalf}>

<div className={style.detaisInfo}>
<h2 className={style.helloMessage
}>Hello Everyone</h2>
<h1>
<Typewriter
        options={{
          strings: [name],
          autoStart: true,
          loop: true,
          delay: 80,
        }}
      />
</h1>

<h2 className={style.jopMessage}>And I'm a <span className={style.spanJopTitle}>Frontend Developer</span></h2>

<p>
A software developer specializing in front-end development with React JS and Next JS, utilizing JavaScript. I am dedicated to continually enhancing my skills and experience and am excited to collaborate with you to deliver well-organized and high-quality software solutions.
</p>

<div className={style.SocialIcons}>

<div className={style.oneIcon} id={style.idConFace}   ><a href="https://www.facebook.com/ahmed.egyptian.9889" target="_blank" className={style.defineIcon} id={style.idFacebook}>  <FontAwesomeIcon className={style.iconSelf} icon={faFacebookF} />  </a></div>
<div className={style.oneIcon} id={style.idConLink}><a href="https://www.linkedin.com/in/ahmed-essam-618055230" target="_blank" className={style.defineIcon} id={style.idLinkedin}>  <FontAwesomeIcon className={style.iconSelf} icon={faLinkedinIn} />  </a></div>
<div className={style.oneIcon} id={style.idConGithup}><a  href="https://github.com/ahmed514essam" target="_blank" className={style.defineIcon} id={style.idGithup}>  <FontAwesomeIcon className={style.iconSelf} icon={faGithub} />  </a></div>
<div className={style.oneIcon} id={style.idConWhats}><a href="https://api.whatsapp.com/send?phone=+201094461846&text=Hi" target="_blank" className={style.defineIcon} id={style.idWhatsApp}>  <FontAwesomeIcon className={style.iconSelf} icon={faWhatsapp} />  </a></div>


</div>


<section  className={style.sectionDownload}>
<a rel="noreferrer" target="_self" href="https://drive.google.com/uc?export=download&id=11jTqpUULT9SKcTv8kZSPqnh-_euQ1iLP" download="My_Resume.pdf">
Download My Resume</a>
</section>


</div>

</div>


{/* =========================================================================================================================
Between Two Halfs
======================================================================================================================== */}


<div className={style.imageHalf}>










<div className={style.contentader}>

<div className={style.contentImge}>





<img src={PersonalImage} />



</div>

</div>














</div>

</section>
        </>
    );
  };
  export default Home ;