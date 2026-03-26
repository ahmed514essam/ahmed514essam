import { useEffect, useState } from "react";
import styles from "./AboutInfo.module.css";
import { useNavigate } from "react-router-dom";

interface AboutFormData {
     Name?: string,
    BirthDate?: string,
    Phone?: string,
    From?:string,
    Address?:string,
    Email?:string,
    WhoAmI?:string,
    Education?:string,
    FacebookLink?: string,
    InstagramLink?: string,
    GithubLink?: string,
    LinkedinLink?: string,
    WhatsLink?: string,
}





const EditAbout = () => {

 const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
  }, []);

  const [form, setForm] = useState<AboutFormData>({});
  const [images, setImages] = useState<File[]>([]);

  // جلب البيانات القديمة
  useEffect(() => {
    fetch("https://ahmed514essamapi.runasp.net/api/About")
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

    images.forEach((img) => formData.append("images", img));

    try {
      const res = await fetch("https://ahmed514essamapi.runasp.net/api/About", {
        method: "PUT",
        body: formData,
      });

      if (!res.ok) throw new Error("Update failed");


      alert("Updated Successfully");
      setImages([]);
    } catch (err) {
      alert((err as Error).message);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Edit About Data</h2>

      
     

  <input name="Name" placeholder="Name" value={form.Name || ""} onChange={handleChange} />
        <input name="BirthDate" placeholder="BirthDate" value={form.BirthDate || ""} onChange={handleChange} />
                <input name="Phone" placeholder="Phone" value={form.Phone || ""} onChange={handleChange} />
        <input name="From" placeholder="From" value={form.From} onChange={handleChange} />

        <input name="Address" placeholder="Address" value={form.Address || ""} onChange={handleChange} />
        <input name="Email" placeholder="Email" value={form.Email || ""} onChange={handleChange} />
        <input name="WhoAmI" placeholder="WhoAmI" value={form.WhoAmI} onChange={handleChange} />
        <input name="Education" placeholder="Education" value={form.Education} onChange={handleChange} />


        <input placeholder="Facebook" name="FacebookLink" value={form.FacebookLink || ""} onChange={handleChange} />
        <input placeholder="Instagram" name="InstagramLink" value={form.InstagramLink || ""} onChange={handleChange} />
        <input name="GithubLink" placeholder="GitHub" value={form.GithubLink || ""} onChange={handleChange} />
        <input name="LinkedinLink" placeholder="Linkedin" value={form.LinkedinLink || ""} onChange={handleChange} />
        <input name="WhatsLink" placeholder="WhatsApp" value={form.WhatsLink || ""} onChange={handleChange} />

        <label htmlFor="images">Upload Images</label>
        <input
          id="images"
          type="file"
          multiple
          onChange={(e) => setImages(Array.from(e.target.files || []))}
        />

        <button type="submit">Update</button>
                <button className={styles.backButton} type="button" onClick={() => navigate("/maindashboard")}>Back To Dashboard</button>

      </form>
    </div>
  );
};

export default EditAbout;