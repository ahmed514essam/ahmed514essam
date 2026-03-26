import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AboutInfo.module.css";

const AddAbout = () => {
   const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
      console.log(token);

    if (!token) {
      navigate("/login");
    }
  }, []);
 const [form, setForm] = useState({
  Name: "",
  BirthDate: "",
  Phone: "",
  From: "",
  Address: "",
  Email: "",
  WhoAmI: "",
  Education:"",
  FacebookLink: "",
  InstagramLink: "",
  GithubLink: "",
  LinkedinLink: "",
  WhatsLink: "",
});

  const [images, setImages] = useState<File[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value as string);
    });

images.forEach((img) => formData.append("Images", img));
    const res = await fetch("https://ahmed514essamapi.runasp.net/api/About", {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok)
      {
         return alert("Failed to add home data");
        }
    alert("Added Successfully");
    setForm({
 Name: "",
  BirthDate: "",
  Phone: "",
  From: "",
  Address: "",
  Email: "",
  WhoAmI: "",
  Education:"",
  FacebookLink: "",
  InstagramLink: "",
  GithubLink: "",
  LinkedinLink: "",
  WhatsLink: "",
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
        <input name="Education" placeholder="Education" onChange={handleChange} />


<input name="FacebookLink" placeholder="Facebook" onChange={handleChange} />
<input name="InstagramLink" placeholder="Instagram" onChange={handleChange} />
<input name="GithubLink" placeholder="GitHub" onChange={handleChange} />
<input name="LinkedinLink" placeholder="LinkedIn" onChange={handleChange} />
<input name="WhatsLink" placeholder="WhatsApp" onChange={handleChange} />



        <label htmlFor="images">Upload Images</label>
        <input
          id="images"
          type="file"
          multiple
          onChange={(e) => setImages(Array.from(e.target.files || []))}
        />

        <button type="submit">Add</button>
        <button className={styles.backButton} type="button" onClick={() => navigate("/maindashboard")}>Back To Dashboard</button>
      </form>
    </div>
  );
};

export default AddAbout;