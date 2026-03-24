import styles from "./ShowProject.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
// import { useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface DataItem {
  id: number; // لازم يكون عندك id من الـ API
  Name: string;
  Type?: string;
  Image: string;
 
}
const ShowSkills = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<DataItem[]>([]);
  const [isOverviewOpen, setIsOverviewOpen] = useState<boolean>(false);
  const [currentItem, setCurrentItem] = useState<DataItem | null>(null);

  // جلب المشاريع من API
  const fetchProjects = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://ahmed514essamapi.runasp.net/api/Skill");
      if (!res.ok) throw new Error("Failed to fetch projects");
      const projects: DataItem[] = await res.json();
      setData(projects);
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
      else setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const displayOverview = (item: DataItem) => {
    setIsOverviewOpen(true);
    setCurrentItem(item);
  };

  const closeOverview = () => {
    setIsOverviewOpen(false);
    setCurrentItem(null);
  };

  // حذف مشروع
  const handleDelete = async (id: number) => {
    if (!window.confirm("Are you sure you want to delete this skill?")) return;
    try {
      const res = await fetch(`http://ahmed514essamapi.runasp.net/api/Skill/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete skill");
      // تحديث القائمة بعد الحذف
      setData((prev) => prev.filter((item) => item.id !== id));
      alert("Skill deleted successfully");
    } catch (err: unknown) {
      if (err instanceof Error) alert(err.message);
      else alert("Unexpected error occurred");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;



  return (
    <>
      <section className={styles.sectionContent}>
        <h1>My Skills</h1>

<div className={styles.addedButtonDiv}>
  <Link className={styles.linkSelfAdded} to={"./AddSkill.tsx"}><i className="bi bi-plus"></i> Add Skill</Link>
</div>


        <div className={styles.contentProjects}>
          {data.map((item) => (
            <div className={styles.card} key={item.id}>
              <div className={styles.imagess}>
                <img src={item.Image} alt={item.Name} loading="lazy" />
              </div>
              <h3>{item.Name}</h3>
              <p className={styles.subTitle}>{item.Type}</p>
              <p className={styles.overParar} onClick={() => displayOverview(item)}>
                More
              </p>

              <div className={styles.divButtons}>
               

                {/* زرار تعديل وحذف */}
           

<button
  className={styles.editButton}
  onClick={() => navigate(`/edit-project/${item.id}`)}
>
  <FontAwesomeIcon icon={faEdit} /> Edit
</button>



                <button className={styles.deleteButton} onClick={() => handleDelete(item.id)}>
                  <FontAwesomeIcon icon={faTrash} /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {isOverviewOpen && currentItem && (
        <div className={styles.overlay} onClick={closeOverview}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeOverview}>
              &times;
            </button>

            <div className={styles.cardov}>
              <div className={styles.imagessov}>
                <img src={currentItem.Image} alt={currentItem.Name} />
              </div>
              <h3>{currentItem.Name}</h3>
              <p>{currentItem.Type}</p>
              <div className={styles.divButtonsov}>
              
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShowSkills;
