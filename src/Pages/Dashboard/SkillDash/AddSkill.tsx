import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AddSkill.module.css";

const AddSkill = () => {
   const navigate = useNavigate();

 useEffect(() => {
    const token = localStorage.getItem("token");
      console.log(token);

    if (!token) {
      navigate("/login");
    }
  }, []);

  const [form, setForm] = useState({
    Id:0,
    Name: "",
    Type: "",
   
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


    await fetch("https://ahmed514essamapi.runasp.net/api/Skill", {
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
        <h2>Add Skill</h2>

        <input
          name="name"
          placeholder="Project Name"
          value={form.Name}
          onChange={handleChange}
        />

        <input
          name="subTitle"
          placeholder="Sub Title"
          value={form.Type}
          onChange={handleChange}
        />

     
      

       <label htmlFor="image">Upload Images</label>
        <input
          id="image"
          type="file"
          multiple
          onChange={(e) => setImage(Array.from(e.target.files || []))}
        />


        <button type="submit">Add Skill</button>
                                <button className={styles.backButton} type="button" onClick={() => navigate("/maindashboard")}>Back To Dashboard</button>

      </form>
    </div>
  );
};

export default AddSkill;