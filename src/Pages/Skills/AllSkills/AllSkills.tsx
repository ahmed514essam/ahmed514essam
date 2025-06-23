import style from "./AllSkills.module.css" ;

const AllSkills = () => {
    const skills = [
        { name: "HTML5", img: "/skills/html.png" },
        { name: "CSS3", img: "/skills/css.png" },
        { name: "JavaScript", img: "/skills/js.png" },
        { name: "TypeScript", img: "/skills/typescript.png" },
        { name: "Bootstrap", img: "/skills/bootstrap.png" },
        { name: "React JS", img: "/skills/react.png" },
        { name: "Redux", img: "/skills/redux.png" },
        { name: "npm", img: "/skills/npm.png" },
        { name: "Vite", img: "/skills/vite.png" },
        { name: "Next JS", img: "/skills/next.png" },
        { name: "Figma", img: "/skills/figma.png" },
        { name: "C++", img: "/skills/C++.png" },
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
export default AllSkills ;