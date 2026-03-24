import { useEffect, useState } from "react";
import style from "./Skills.module.css";

interface Skill {
  id: number;
  name: string;
  type: string;
  imageUrl: string;
}

interface Props {
  filterType?: string;
}

const SkillList = ({ filterType }: Props) => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://ahmed514essamapi.runasp.net/api/Skill")
      .then((res) => res.json())
      .then((data) => {
        let result = data;

        if (filterType) {
          result = data.filter(
            (skill: Skill) => skill.type.toLowerCase() === filterType.toLowerCase()
          );
        }

        setSkills(result);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [filterType]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className={style.skillContent}>
      {skills.map((skill) => (
        <div key={skill.id} className={style.oneskill}>
          <span className={style.nameofSkill}>{skill.name}</span>

          <span className={style.imgSpan}>
            <img
              src={
                skill.imageUrl.startsWith("http")
                  ? skill.imageUrl
                  : `http://ahmed514essamapi.runasp.net${skill.imageUrl}`
              }
              alt={skill.name}
              loading="lazy"
            />
          </span>
        </div>
      ))}
    </div>
  );
};

export default SkillList;