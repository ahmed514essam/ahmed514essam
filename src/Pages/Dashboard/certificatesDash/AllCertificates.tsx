import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ShowCertificate.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

interface Certificate {
  Id: number;
  Name: string;
  Images: string;
  CertificatesLink: string;
}

const AllCertificates = () => {
   const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
  }, []);
  const [certificates, setCertificates] = useState<Certificate[]>([]);

  // جلب البيانات من API
  const fetchCertificates = async () => {
    try {
      const response = await fetch("https://ahmed514essamapi.runasp.net/api/Certificate");
      const data = await response.json();
      setCertificates(data);
    } catch (error) {
      console.error("Error fetching certificates:", error);
    }
  };

  useEffect(() => {
    fetchCertificates();
  }, []);
    const token = localStorage.getItem("token");

  // دالة الحذف
  const handleDelete = async (id : number) => {
    if (window.confirm("هل أنت متأكد من حذف الشهادة؟")) {
      try {
        await fetch(`https://ahmed514essamapi.runasp.net/api/Certificate/${id}`, {
          method: "DELETE",
 headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        // تحديث القائمة بعد الحذف
setCertificates(certificates.filter(cert => cert['Id'] !== id));
      } catch (error) {
        console.error("Error deleting certificate:", error);
      }
    }
  };

  return (
    <div className={styles.container}>
      <h1> All Certificates</h1>
      <div className={styles.grid}>
        {certificates.map(cert => (
          <div key={cert.Id} className={styles.card}>
            <img src={cert.Images} alt={cert.Name} className={styles.image} />
            <h2>{cert.Name}</h2>
            <a href={cert.CertificatesLink} target="_blank" rel="noopener noreferrer" className={styles.link}>
              View Certificate
            </a>
            <div className={styles.actions}>
              <button
                className={`${styles.btn} ${styles.edit}`}
                onClick={() => navigate(`/edit-certificate/${cert.Id}`)}
              >
                <FontAwesomeIcon icon={faEdit} /> Edit
              </button>
              <button
                className={`${styles.btn} ${styles.delete}`}
                onClick={() => handleDelete(cert.Id)}
              >
                <FontAwesomeIcon icon={faTrash} /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCertificates;