import style from "./BackendSkill.module.css" ;

const BackendSkills = () => {
    const skills = [
        { name: "ASP.NET MVC", img: "skills/html.png" },
        { name: "Cloudnary ", img: "skills/css.png" },
        { name: "Fluent API", img: "skills/js.png" },
        { name: "Restful API", img: "skills/typescript.png" },
        { name: "JWT", img: "skills/bootstrap.png" },
        { name: "React JS", img: "skills/react.png" },
        { name: "Redux", img: "skills/redux.png" },
    
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
export default BackendSkills ;