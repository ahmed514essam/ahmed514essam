import { useEffect, useState } from "react";
import styles from "./HomeInf.module.css";
import { useNavigate } from "react-router-dom";

interface HomeFormData {
  subTitle?: string;
  Summary?: string;
  FacebookLink?: string;
  InstagramLink?: string;
  GithubLink?: string;
  LinkedinLink?: string;
  WhatsLink?: string;
  DownloadResume?: string;
}

  


const EditHome = () => {
   const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
  }, []);
  

  const [form, setForm] = useState<HomeFormData>({});
  const [image, setImage] = useState<File[]>([]);


  // 👇 يجيب البيانات القديمة
  useEffect(() => {
    fetch("https://ahmed514essamapi.runasp.net/api/Home")
      .then((res) => res.json())
      .then((data) => setForm(data));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

   const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value as string);
    });

    image.forEach((img) => formData.append("image", img));

  


try {
  const res = await fetch("https://ahmed514essamapi.runasp.net/api/Home", {
    method: "PUT",
    body: formData,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  if (!res.ok) throw new Error("Update failed");

      alert("Updated Successfully");
      setImage([]);
    } catch (err) {
      alert((err as Error).message);
}




    alert("Updated Successfully");
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Edit Home Data</h2>

        <input placeholder="SubTitle" name="subTitle" value={form.subTitle || ""} onChange={handleChange} />
        <textarea placeholder="Summary" name="Summary" value={form.Summary || ""} onChange={handleChange} />

        <input placeholder="Facebook" name="FacebookLink" value={form.FacebookLink || ""} onChange={handleChange} />
        <input placeholder="Instagram" name="InstagramLink" value={form.InstagramLink || ""} onChange={handleChange} />
        <input name="GithubLink" placeholder="GithubLink" value={form.GithubLink || ""} onChange={handleChange} />
        <input name="LinkedinLink" placeholder="LinkedinLink" value={form.LinkedinLink || ""} onChange={handleChange} />
        <input name="WhatsLink" placeholder="WhatsLink" value={form.WhatsLink || ""} onChange={handleChange} />
        <input name="DownloadResume" placeholder="DownloadResume" value={form.DownloadResume || ""} onChange={handleChange} />


     <label htmlFor="image">Upload Images</label>
        <input
          id="image"
          type="file"
          multiple
          onChange={(e) => setImage(Array.from(e.target.files || []))}
        />


        <button type="submit">Update</button>
                        <button className={styles.backButton} type="button" onClick={() => navigate("/maindashboard")}>Back To Dashboard</button>

      </form>
    </div>
  );
};

export default EditHome;