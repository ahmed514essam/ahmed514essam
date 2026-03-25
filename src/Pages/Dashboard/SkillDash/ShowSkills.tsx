import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./ShowSkills.module.css";

interface Skill {
  id: number;
  name: string;
  type: string;
  imageUrl: string;
}

const SkillDashboard = () => {
   const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
  }, []);
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    fetch("http://ahmed514essamapi.runasp.net/api/Skill")
      .then(res => res.json())
      .then(data => setSkills(data))
      .catch(err => console.log(err));
  }, []);

  const handleEdit = (id: number) => {
    navigate(`/edit-skill/${id}`);
  };

  const handleDelete = (id: number) => {
    const confirmDelete = window.confirm("هل أنت متأكد من حذف هذه المهارة؟");
    if (confirmDelete) {
      fetch(`http://ahmed514essamapi.runasp.net/api/Skill/${id}`, {
        method: "DELETE"
      })
        .then(res => {
          if (res.ok) {
            setSkills(skills.filter(skill => skill.id !== id));
            alert("تم حذف المهارة بنجاح");
          } else {
            alert("حدث خطأ أثناء الحذف");
          }
        })
        .catch(err => console.log(err));
    }
  };



  return (
    <div className={style.skillContent}>
      {skills.map(skill => (
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
            />
          </span>

          <div className={style.actionBtns}>
            <button className={style.editBtn} onClick={() => handleEdit(skill.id)}>
              تعديل
            </button>
            <button className={style.deleteBtn} onClick={() => handleDelete(skill.id)}>
              حذف
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillDashboard;