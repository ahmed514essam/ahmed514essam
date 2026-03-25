import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AboutInfo.module.css";

const AddAbout = () => {
   const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
  }, []);
  const [form, setForm] = useState({
    Name: "",
    BirthDate: "",
    Phone: "",
    From:"",
    Address:"",
    Email:"",
    WhoAmI:"",
    facebook: "",
    instagram: "",
    github: "",
    linkedin: "",
    whatsapp: "",
    cv: "",
  });

  const [images, setImages] = useState<File[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value as string);
    });

    images.forEach((img) => formData.append("images", img));

    const res = await fetch("http://ahmed514essamapi.runasp.net/api/About", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) return alert("Failed to add home data");

    alert("Added Successfully");
    setForm({
 Name: "",
    BirthDate: "",
    Phone: "",
    From:"",
    Address:"",
    Email:"",
    WhoAmI:"",
    facebook: "",
    instagram: "",
    github: "",
    linkedin: "",
    whatsapp: "",
    cv: "",
    });
    setImages([]);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Add About Info</h2>

        <input name="Name" placeholder="Name" onChange={handleChange} />
        <input name="BirthDate" placeholder="BirthDate" onChange={handleChange} />
                <input name="Phone" placeholder="Phone" onChange={handleChange} />
        <input name="From" placeholder="From" onChange={handleChange} />

        <input name="Address" placeholder="Address" onChange={handleChange} />
        <input name="Email" placeholder="Email" onChange={handleChange} />
        <input name="WhoAmI" placeholder="WhoAmI" onChange={handleChange} />


        <input name="facebook" placeholder="Facebook" onChange={handleChange} />
        <input name="instagram" placeholder="Instagram" onChange={handleChange} />
        <input name="github" placeholder="GitHub" onChange={handleChange} />
        <input name="linkedin" placeholder="LinkedIn" onChange={handleChange} />
        <input name="whatsapp" placeholder="WhatsApp" onChange={handleChange} />
        <input name="cv" placeholder="CV Link" onChange={handleChange} />

        <label htmlFor="images">Upload Images</label>
        <input
          id="images"
          type="file"
          multiple
          onChange={(e) => setImages(Array.from(e.target.files || []))}
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddAbout;