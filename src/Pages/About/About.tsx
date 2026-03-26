import style from "./about.module.css";
import CursorImages from "./CursorImages/CursorImages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

interface AboutType {
  name: string;
  birthDate: string;
  phone: string;
  from: string;
  address: string;
  email: string;
  whoAmI: string;
  facebookLink: string;
  linkedinLink: string;
  githubLink: string;
  whatsLink: string;
  instagramLink: string;
  images: { id: number; url: string }[];
}

const About = () => {
  const [about, setAbout] = useState<AboutType | null>(null);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const res = await fetch(
          "https://ahmed514essamapi.runasp.net/api/About"
        );

        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();
        setAbout(data[0]);
      } catch (err) {
        console.error(err);
      }
    };

    fetchAbout();
  }, []);

  if (!about) return <p>Loading...</p>;

  return (
    <>
      <section className={style.sectionAboutMe}>
        <span className={style.ooo}>
          <div className={style.imagess}>
            <CursorImages images={about.images} />
          </div>
        </span>

        <span className={style.oot}>
          <div className={style.personData}>
            <p>
              Name :
              <span className={style.answersData}>{about.name}</span>
            </p>

            <p>
              Birth Date :
              <span className={style.answersData}>
                {about.birthDate}
              </span>
            </p>

            <p>
              Phone :
              <span className={style.answersData}>{about.phone}</span>
            </p>

            <p>
              From :
              <span className={style.answersData}>{about.from}</span>
            </p>

            <p>
              Address :
              <span className={style.answersData}>{about.address}</span>
            </p>

            <p>
              Email :
              <span className={style.answersData}>{about.email}</span>
            </p>
          </div>

          <div className={style.SocialIcons}>
            <div className={style.oneIcon} id={style.idConFace}>
              <a href={about.facebookLink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </div>

            <div className={style.oneIcon} id={style.idConLink}>
              <a href={about.linkedinLink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>

            <div className={style.oneIcon} id={style.idConGithup}>
              <a href={about.githubLink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>

            <div className={style.oneIcon} id={style.idConWhats}>
              <a href={about.whatsLink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
          </div>
        </span>
      </section>

      <section className={style.infoMe}>
        <div className={style.whome}>
          <h2>
            Who am I<span>?</span>
          </h2>
          <p>{about.whoAmI}</p>
        </div>

        <div className={style.educations}>
          <h2>Education :- </h2>
          <p>
            studies a Bachelor's degree in Computer Science at the Future
            Academy. 2021-2025
          </p>
        </div>

        <div className={style.certifications}>
          <h2>Certificates :-</h2>
          <p>Eraasoft certified Frontend Web Developer</p>

          <a
            href="https://drive.google.com/file/d/1DH96jq-mVLTynMliffdSOQdJL2dHR5ey/view"
            target="_blank"
            rel="noopener noreferrer"
            className={style.openCertificate}
          >
            <FontAwesomeIcon icon={faLink} /> Open
          </a>
        </div>
      </section>
    </>
  );
};

export default About;