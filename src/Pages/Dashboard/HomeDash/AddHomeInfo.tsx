import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomeInf.module.css";

const AddHome = () => {
const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
      console.log(token);

    if (!token) {
      navigate("/login");
    }
  }, []);

  const [form, setForm] = useState({
    subTitle: "",
    Summary: "",
    FacebookLink: "",
    InstagramLink: "",
    GithubLink: "",
    LinkedinLink: "",
    WhatsLink: "",
    DownloadResume: "",
  });

    const [image, setImage] = useState<File[]>([]);


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
   
   
image.forEach((img) => formData.append("Image", img));


    await fetch("https://ahmed514essamapi.runasp.net/api/Home", {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    alert("Added Successfully");
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Add Home Data</h2>

        <input name="subTitle" placeholder="subTitle" onChange={handleChange} />
        <textarea name="Summary" placeholder="Summary" onChange={handleChange} />

        <input name="FacebookLink" placeholder="Facebook" onChange={handleChange} />
        <input name="InstagramLink" placeholder="InstagramLink" onChange={handleChange} />
        <input name="GithubLink" placeholder="GithubLink" onChange={handleChange} />
        <input name="LinkedinLink" placeholder="LinkedinLink" onChange={handleChange} />
        <input name="WhatsLink" placeholder="WhatsLink" onChange={handleChange} />
        <input name="DownloadResume" placeholder="DownloadResume" onChange={handleChange} />




  <label htmlFor="image">Upload Images</label>
        <input
          id="image"
          type="file"
          multiple
          onChange={(e) => setImage(Array.from(e.target.files || []))}
        />




        <button type="submit">Add</button>
                        <button className={styles.backButton} type="button" onClick={() => navigate("/maindashboard")}>Back To Dashboard</button>

      </form>
    </div>
  );
};

export default AddHome;