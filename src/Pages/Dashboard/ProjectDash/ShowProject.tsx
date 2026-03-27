import styles from "./Project.module.css";
import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

interface DataItem {
  Id: number;
  Name: string;
  SubTitle: string;
  Description: string;
  DemoLink: string;
  RepoLink: string;
  images: { id: number; url: string }[];
}

const Projects = () => {
  const navigate = useNavigate();

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<DataItem[]>([]);
  const [isOverviewOpen, setIsOverviewOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<DataItem | null>(null);

  // 🔐 Check auth
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/login");
  }, []);

  // 📦 Fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://ahmed514essamapi.runasp.net/api/Project"
        );

        if (!res.ok) throw new Error("Failed to fetch");

        const result = await res.json();
        setData(result);
      } catch (err: Error | unknown) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // 🗑 Delete
  const handleDelete = async (id: number) => {
    const confirmDelete = window.confirm("Are you sure?");
    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");

      const res = await fetch(
        `https://ahmed514essamapi.runasp.net/api/Project/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) throw new Error("Delete failed");

      // update UI
      setData((prev) => prev.filter((item) => item.Id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  // 👁 Open modal
  const displayOvView = (item: DataItem) => {
    setIsOverviewOpen(true);
    setCurrentItem(item);
  };

  const closeOverview = () => {
    setIsOverviewOpen(false);
    setCurrentItem(null);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <section className={styles.sectionContent}>
        <h1>My Projects</h1>

        <div className={styles.contentProjects}>
          {data.map((item) => (
            <div className={styles.card} key={item.Id}>
              
              {/* ✅ عرض أول صورة بس */}
              <div className={styles.imagess}>
                <img
                  src={item.images?.[0]?.url}
                  alt="Project"
                  loading="lazy"
                />
              </div>

              <h3>{item.Name}</h3>
              <p className={styles.aboutProj}>{item.SubTitle}</p>

              <p
                className={styles.overParar}
                onClick={() => displayOvView(item)}
              >
                More
              </p>

              <div className={styles.divButtons}>
                <a
                  className={styles.linkDemo}
                  href={item.DemoLink}
                  target="_blank"
                >
                  Demo
                </a>

                <a
                  className={styles.linkRepo}
                  href={item.RepoLink}
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>

                {/* ✏ Edit */}
                <button
                  title="Edit"
                  onClick={() => navigate(`/dashboard/edit-project/${item.Id}`)}
                >
                  <FontAwesomeIcon icon={faEdit} />
                </button>

                {/* 🗑 Delete */}
                <button title="Delete" onClick={() => handleDelete(item.Id)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🧠 Modal */}
      {isOverviewOpen && currentItem && (
        <div className={styles.overlay} onClick={closeOverview}>
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeButton}
              onClick={closeOverview}
            >
              &times;
            </button>

            <div className={styles.cardov}>
              
              {/* ✅ نفس الفكرة */}
              <div className={styles.imagessov}>
                <img src={currentItem.images?.[0]?.url} alt="Project" />
              </div>

              <h3>{currentItem.Name}</h3>
              <p>{currentItem.Description}</p>

              <div className={styles.divButtonsov}>
                <a
                  className={styles.linkdemOver}
                  href={currentItem.DemoLink}
                  target="_blank"
                >
                  Demo
                </a>

                <a
                  className={styles.linkGithupOver}
                  href={currentItem.RepoLink}
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;