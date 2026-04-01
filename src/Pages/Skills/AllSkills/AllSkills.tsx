import style from "./AllSkills.module.css" ;

const AllSkills = () => {
    const skills = [
  { name: "HTML5", img: "/skills/html.png" },
        { name: "CSS3", img: "/skills/css.png" },
        { name: "JavaScript", img: "/skills/js.png" },
        { name: "TypeScript", img: "/skills/typescript.png" },
        { name: "Bootstrap", img: "/skills/bootstrap.png" },
        { name: "React JS", img: "/skills/react.png" },
        { name: "Vite", img: "/skills/vite.png" },
        { name: "Figma", img: "/skills/figma.png" },
        { name: "Web Design", img: "/skills/design.png" },

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
        {name:"Node JS", img :"/public/skills/nodee.png"},

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
export default AllSkills ;