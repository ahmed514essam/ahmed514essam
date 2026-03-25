import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomeInf.module.css";

const AddHome = () => {
   const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
  }, []);
  const [form, setForm] = useState({
    subTitle: "",
    description: "",
    facebook: "",
    instagram: "",
    github: "",
    linkedin: "",
    whatsapp: "",
    cv: "",
  });

  const [image, setImage] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();

    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value);
    });

    if (image) {
      formData.append("image", image);
    }

    await fetch("http://ahmed514essamapi.runasp.net/api/Home", {
      method: "POST",
      body: formData,
    });

    alert("Added Successfully");
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Add Home Data</h2>

        <input name="subTitle" placeholder="Sub Title" onChange={handleChange} />
        <textarea name="description" placeholder="Description" onChange={handleChange} />

        <input name="facebook" placeholder="Facebook" onChange={handleChange} />
        <input name="instagram" placeholder="Instagram" onChange={handleChange} />
        <input name="github" placeholder="GitHub" onChange={handleChange} />
        <input name="linkedin" placeholder="LinkedIn" onChange={handleChange} />
        <input name="whatsapp" placeholder="WhatsApp" onChange={handleChange} />
        <input name="cv" placeholder="CV Link" onChange={handleChange} />

<label htmlFor="image">Upload Image</label>
        <input type="file" id="image" onChange={(e) => setImage(e.target.files?.[0] || null)} />

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddHome;