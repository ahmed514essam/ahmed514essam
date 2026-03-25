import { useEffect, useState, FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./Certificate.module.css";

const EditCertificate = () => {
   const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
  }, []);
  const { id } = useParams();
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    const fetchCertificate = async () => {
      try {
        const response = await fetch(`https://ahmed514essamapi.runasp.net/api/Certificate/${id}`);
        const data = await response.json();
        setName(data.Name);
        setLink(data.CertificatesLink);
        setImage(data.Images);
      } catch (error) {
        console.error("Error fetching certificate:", error);
      }
    };
    fetchCertificate();
  }, [id]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await fetch(`https://ahmed514essamapi.runasp.net/api/Certificate/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Id: id,
          Name: name,
          CertificatesLink: link,
          Images: image,
        }),
      });
      alert("تم تحديث الشهادة بنجاح!");
      navigate("/certificates"); // ارجع لصفحة عرض الشهادات
    } catch (error) {
      console.error("Error updating certificate:", error);
      alert("حدث خطأ أثناء تعديل الشهادة");
    }
  };

  return (
    <div className={styles.container}>
      <h1>تعديل الشهادة</h1>
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
          حفظ التعديلات
        </button>
      </form>
    </div>
  );
};

export default EditCertificate;