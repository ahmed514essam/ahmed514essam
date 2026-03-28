import { useState, FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Certificate.module.css";

const AddCertificate = () => {
   const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
  }, []);
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [image, setImage] = useState("");
    const token = localStorage.getItem("token");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await fetch("https://ahmed514essamapi.runasp.net/api/Certificate", {
        method: "POST",
        headers: { "Content-Type": "application/json" ,
            Authorization: `Bearer ${token}`,
          
        },
        body: JSON.stringify({
          Name: name,
          CertificatesLink: link,
          Images: image,
        }),
      });
      alert("تمت إضافة الشهادة بنجاح!");
      navigate("/certificates"); // ارجع لصفحة عرض الشهادات
    } catch (error) {
      console.error("Error adding certificate:", error);
      alert("حدث خطأ أثناء إضافة الشهادة");
    }
  };

  return (
    <div className={styles.container}>
      <h1>إضافة شهادة جديدة</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          اسم الشهادة:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          رابط الشهادة:
          <input
            type="url"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            required
          />
        </label>
        <label>
          رابط الصورة:
          <input
            type="url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </label>
        <button type="submit" className={styles.btn}>
          إضافة الشهادة
        </button>
      </form>
    </div>
  );
};

export default AddCertificate;