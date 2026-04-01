import style from "./FrontendSkills.module.css" ;

const FrontendSkills = () => {
    const skills = [
       { name: "HTML5", img: "/skills/html.png" },
        { name: "CSS3", img: "/skills/css.png" },
        { name: "JavaScript", img: "/skills/js.png" },
        { name: "TypeScript", img: "/skills/typescript.png" },
        { name: "Bootstrap", img: "/skills/bootstrap.png" },
        { name: "React JS", img: "/skills/react.png" },
        { name: "Vite", img: "/skills/vite.png" },
        { name: "Figma", img: "/skills/figma.png" },
        { name: "Web Design", img: "/skills/design.png" }
      ];
    return (
        <>
        <div className={style.skillContent}>
        {skills.map((skill, index) => (
          <div key={index} className={style.oneskill}>
            <span className={style.nameofSkill}>{skill.name}</span>
            <span className={style.imgSpan}>
              <img src={skill.img} alt={skill.name} loading="lazy" />
            </span>
          </div>
        ))}
      </div>
        </>
    );
};
export default FrontendSkills ;