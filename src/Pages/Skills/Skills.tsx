import { useState } from "react";
import style from "./Skill.module.css";
import AllSkills from "./AllSkills/AllSkills";
import FrontendSkills from "./FrontendSkills/FrontendSkills";
import ProgrammingSkills from "./ProgrammingSkills/ProgrammingSkills";
import "./Skily.css" ;
import BackendSkills from "./BackendSkills/BackendSkill";

const Skills = () => {
const [ category , setCategory ] = useState<number>(1);

//const choOne = () => {
//setCategory(1)
//document.querySelector(".choOneClassOne")?.classList.add("tmtm");
//document.querySelector(".choTwoClassTwo")?.classList.remove("tmtm");
//document.querySelector(".choThreeClassThree")?.classList.remove("tmtm");
//document.querySelector(".choFourClassFour")?.classList.remove("tmtm");
//}
// const choTwo = () => {
// setCategory(2)
// document.querySelector(".choOneClassOne")?.classList.remove("tmtm");
// document.querySelector(".choTwoClassTwo")?.classList.add("tmtm");
// document.querySelector(".choThreeClassThree")?.classList.remove("tmtm");
// document.querySelector(".choFourClassFour")?.classList.remove("tmtm");
// }
// const choThree = () => {
// setCategory(3)
// document.querySelector(".choOneClassOne")?.classList.remove("tmtm");
// document.querySelector(".choTwoClassTwo")?.classList.remove("tmtm");
// document.querySelector(".choThreeClassThree")?.classList.add("tmtm");
// document.querySelector(".choFourClassFour")?.classList.remove("tmtm");
// }
// const choFour = () => {
// setCategory(4)
// document.querySelector(".choOneClassOne")?.classList.remove("tmtm");
// document.querySelector(".choTwoClassTwo")?.classList.remove("tmtm");
// document.querySelector(".choThreeClassThree")?.classList.remove("tmtm");
// document.querySelector(".choFourClassFour")?.classList.add("tmtm");
// }
  return (
    <section className={style.skillSection}>
      <h1>My Skills</h1>
  
{/* <div className={style.btnCategories}>
  <button className="choOneClassOne tmtm" onClick={choOne}>ALL</button>
  <button className="choTwoClassTwo" onClick={choTwo}>Frontend technique</button>
  <button className="choThreeClassThree" onClick={choThree}>Backend technique</button>
  <button className="choFourClassFour" onClick={choFour}>Programming technique</button>
</div> */}

<div className={style.btnCategories}>
  <button 
    className={category === 1 ? style.active : ""}
    onClick={() => setCategory(1)}
  >
    ALL
  </button>

  <button 
    className={category === 2 ? style.active : ""}
    onClick={() => setCategory(2)}
  >
    Frontend
  </button>

  <button 
    className={category === 3 ? style.active : ""}
    onClick={() => setCategory(3)}
  >
    Backend
  </button>

  <button 
    className={category === 4 ? style.active : ""}
    onClick={() => setCategory(4)}
  >
    Programming
  </button>
</div>


{category === 1 ? <AllSkills/> : category === 2 ? <FrontendSkills/> : category ===3 ? <BackendSkills/> : category === 4 ? <ProgrammingSkills/> : null}

    </section>
  );
};

export default Skills;