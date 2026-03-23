import { useNavigate } from "react-router-dom";
import styles from "./MainDashboard.module.css";

const Dashboard = () => {
  const navigate = useNavigate();

  // 🔒 حماية الصفحة
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       navigate("/login");
//     }
//   }, []);

  return (
    <div className={styles.dashboard}>
      <div className={styles.overlay}></div>

      <div className={styles.container}>
        <h1 className={styles.title}>Admin Dashboard</h1>

        <div className={styles.cards}>
          {/* 👇 الجديد */}
          <div className={styles.card} onClick={() => navigate("/home")}>
            <h2>Home Page</h2>
            <p>Edit main page content</p>
          </div>

          <div className={styles.card} onClick={() => navigate("/about")}>
            <h2>About</h2>
            <p>Edit your personal info</p>
          </div>

          <div className={styles.card} onClick={() => navigate("./ProjectDash/ShowProject.tsx")}>
            <h2>Projects</h2>
            <p>Manage your projects</p>
          </div>

          <div className={styles.card} onClick={() => navigate("/skills")}>
            <h2>Skills</h2>
            <p>Update your skills</p>
          </div>

          <div className={styles.card} onClick={() => navigate("/certificates")}>
            <h2>Certificates</h2>
            <p>Edit certificates</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;