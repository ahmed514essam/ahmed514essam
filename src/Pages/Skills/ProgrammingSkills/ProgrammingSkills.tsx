import style from "./ProgrammingSkills.module.css" ;

const ProgrammingSkills = () => {
    const skills = [
       
        {name:"NPM" , img :"/skills/npm.png"},
        { name: "C++", img: "/skills/C++.png" },
        { name: "Redux", img: "/skills/redux.png" },
        {name:"Proplem Solving" , img:"/skills/ProplemSolving.png"},
         {name:"OOP" , img: "/skills/OOP.png"},
        {name:"Data Structure", img :"/public/skills/DS.png"},
        {name:"Algorithm", img :"/public/skills/aloogrthim.png"}

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
export default ProgrammingSkills ;