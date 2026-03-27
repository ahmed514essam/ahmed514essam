import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AddProject.module.css";

const AddProject = () => {
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
    SubTitle: "",
    Description: "",
    DemoLink: "",
    RepoLink: "",
  });

  const [image, setImage] = useState<File []>([]);

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


    await fetch("https://ahmed514essamapi.runasp.net/api/Project", {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    alert("Added Successfully");
  };
      // reset
    

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Add Project</h2>

        <input
          name="name"
          placeholder="Project Name"
          value={form.Name}
          onChange={handleChange}
        />

        <input
          name="subTitle"
          placeholder="Sub Title"
          value={form.SubTitle}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          value={form.Description}
          onChange={handleChange}
        />

        <input
          name="demo"
          placeholder="Demo Link"
          value={form.DemoLink}
          onChange={handleChange}
        />

        <input
          name="repo"
          placeholder="GitHub Repo"
          value={form.RepoLink}
          onChange={handleChange}
        />

       <label htmlFor="image">Upload Images</label>
        <input
          id="image"
          type="file"
          multiple
          onChange={(e) => setImage(Array.from(e.target.files || []))}
        />


        <button type="submit">Add Project</button>
                                <button className={styles.backButton} type="button" onClick={() => navigate("/maindashboard")}>Back To Dashboard</button>

      </form>
    </div>
  );
};

export default AddProject;