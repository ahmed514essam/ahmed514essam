import { useNavigate } from "react-router-dom";
import styles from "./MainDashboard.module.css";
import { useEffect } from "react";


const Dashboard = () => {
  const navigate = useNavigate();

  // 🔒 حماية الصفحة
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       navigate("/login");
//     }
//   }, []);







  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
  }, []);






  return (
    <div className={styles.dashboard}>
      <div className={styles.overlay}></div>

      <div className={styles.container}>
        <h1 className={styles.title}>Admin Dashboard</h1>

        <div className={styles.cards}>
          {/* 👇 الجديد */}
          <div className={styles.card} onClick={() => navigate("/addhome")}>
            <h2>Add Home </h2>
            <p>Add main page content</p>
          </div>

  <div className={styles.card} onClick={() => navigate("/edithome")}>
            <h2>Home Page</h2>
            <p>Edit main page content</p>
          </div>

          <div className={styles.card} onClick={() => navigate("/addabout")}>
            <h2>Add About</h2>
            <p>Add your personal info</p>
          </div>

          <div className={styles.card} onClick={() => navigate("/editabout")}>
            <h2>About</h2>
            <p>Edit your personal info</p>
          </div>

          <div className={styles.card} onClick={() => navigate("/showProjects")}>
            <h2>Projects</h2>
            <p>Manage your projects</p>
          </div>

          <div className={styles.card} onClick={() => navigate("/showSkills")}>
            <h2>Skills</h2>
            <p>Update your skills</p>
          </div>

          <div className={styles.card} onClick={() => navigate("/all-certificates")}>
            <h2>Certificates</h2>
            <p>Edit certificates</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;