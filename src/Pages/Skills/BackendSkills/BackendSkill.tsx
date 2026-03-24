import style from "./BackendSkill.module.css" ;

const BackendSkills = () => {
    const skills = [
     
        { name: "C#", img: "/skills/SharpC.png" },
        { name: "SQL", img: "/skills/sql.png" },
        { name: "Web Design", img: "/skills/design.png" },
         {name:"OOP" , img: "/skills/OOP.png"},
        {name:"Proplem Solving" , img:"/skills/ProplemSolving.png"},
        {name:"Data Structure" , img: "/skills/DS.png"}
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