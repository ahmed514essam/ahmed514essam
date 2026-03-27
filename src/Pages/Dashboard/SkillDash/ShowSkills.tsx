import styles from "./Project.module.css";
import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

interface DataItem {
  Id: number;
  Name: string;
 Type:string;
  images: { id: number; url: string }[];
}

const ShowSkill = () => {
  const navigate = useNavigate();

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<DataItem[]>([]);
  // const [isOverviewOpen, setIsOverviewOpen] = useState(false);
  // const [currentItem, setCurrentItem] = useState<DataItem | null>(null);

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
          "https://ahmed514essamapi.runasp.net/api/Skill"
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
        `https://ahmed514essamapi.runasp.net/api/Skill/${id}`,
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
  // const displayOvView = (item: DataItem) => {
  //   setIsOverviewOpen(true);
  //   setCurrentItem(item);
  // };

  // const closeOverview = () => {
  //   setIsOverviewOpen(false);
  //   setCurrentItem(null);
  // };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      {/* <section className={styles.sectionContent}> */}
      
                <section>
      <h1>My Skills</h1>

      <table className={styles.skillTable}>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.Id}>
              {/* Image */}
              <td>
                <img
                  src={item.images?.[0]?.url}
                  alt={item.Name}
                  className={styles.skillImg}
                />
              </td>

              {/* Name */}
              <td>{item.Name}</td>

              {/* Type */}
              <td>{item.Type}</td>

              {/* Actions */}
              <td>
                <button
                title="edit"
                  className={styles.editBtn}
                  onClick={() =>
                    navigate(`/edit-skill/${item.Id}`)
                  }
                >
                  <FontAwesomeIcon icon={faEdit} />
                </button>

                <button
                title="delete"
                  className={styles.deleteBtn}
                  onClick={() => handleDelete(item.Id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
    </>
  );
};

export default ShowSkill;