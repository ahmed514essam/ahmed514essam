import style from "./BackendSkill.module.css" ;

const BackendSkills = () => {
    const skills = [
      { name: "C#", img: "/skills/SharpC.png" },
        { name: "SQL", img: "/skills/sql.png" },
        {name:"Fluent API " , img: "/skills/fluent.png"},
        {name:"RestFul API" , img: "/skills/restAPI.png"},
        {name:"JWT" , img: "/skills/jwt.png"},
        {name:"Cloudinary" , img: "/skills/cloudinary.png"},
        {name:".NET MVC" , img: "/skills/mvc.png"},
        {name:"Entity Framework", img :"/skills/entityframework.png"},
        {name:"ASP.NET", img :"/skills/aspnet.png"},
        {name:"LINQ" , img :"/skills/linq.png"},
        {name:"Blazor " , img: "/public/skills/Blazor.png"},
        {name:"Node JS", img :"/public/skills/nodee.png"}
    
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