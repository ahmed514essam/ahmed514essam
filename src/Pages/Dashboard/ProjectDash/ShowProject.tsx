import styles from "./Project.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface DataItem {
  id: number; // لازم يكون عندك id من الـ API
  name: string;
  SubTitle?: string;
  description: string;
  image: string;
  demo: string;
  repo: string;
}

const Projects = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<DataItem[]>([]);
  const [isOverviewOpen, setIsOverviewOpen] = useState<boolean>(false);
  const [currentItem, setCurrentItem] = useState<DataItem | null>(null);

  // جلب المشاريع من API
  const fetchProjects = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://ahmed514essamapi.runasp.net/api/Project");
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
    if (!window.confirm("Are you sure you want to delete this project?")) return;
    try {
      const res = await fetch(`http://ahmed514essamapi.runasp.net/api/Project/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete project");
      // تحديث القائمة بعد الحذف
      setData((prev) => prev.filter((item) => item.id !== id));
      alert("Project deleted successfully");
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
        <h1>My Projects</h1>

        <div className={styles.contentProjects}>
          {data.map((item) => (
            <div className={styles.card} key={item.id}>
              <div className={styles.imagess}>
                <img src={item.image} alt={item.name} loading="lazy" />
              </div>
              <h3>{item.name}</h3>
              <p className={styles.aboutProj}>{item.about}</p>
              <p className={styles.overParar} onClick={() => displayOverview(item)}>
                More
              </p>

              <div className={styles.divButtons}>
                <Link className={styles.linkDemo} to={item.demo}>
                  Demo
                </Link>
                <Link className={styles.linkRepo} to={item.repo}>
                  <FontAwesomeIcon icon={faGithub} />
                </Link>

                {/* زرار تعديل وحذف */}
                <button
                  className={styles.editButton}
                  onClick={() => window.location.href = `/edit-project/${item.id}`}
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
                <img src={currentItem.image} alt={currentItem.name} />
              </div>
              <h3>{currentItem.name}</h3>
              <p>{currentItem.description}</p>
              <div className={styles.divButtonsov}>
                <Link className={styles.linkdemOver} to={currentItem.demo || "#"}>
                  Demo
                </Link>
                <Link className={styles.linkGithupOver} to={currentItem.repo || "#"}>
                  <FontAwesomeIcon icon={faGithub} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;