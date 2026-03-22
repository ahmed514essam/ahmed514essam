import { useEffect, useState } from "react";
import styles from "./AboutInfo.module.css";

interface AboutFormData {
     Name?: string,
    BirthDate?: string,
    Phone?: string,
    From?:string,
    Address?:string,
    Email?:string,
    WhoAmI?:string,
    facebook?: string,
    instagram?: string,
    github?: string,
    linkedin?: string,
    whatsapp?: string,
    cv?: string,
}

const EditAbout = () => {
  const [form, setForm] = useState<AboutFormData>({});
  const [images, setImages] = useState<File[]>([]);

  // جلب البيانات القديمة
  useEffect(() => {
    fetch("http://ahmed514essamapi.runasp.net/api/About")
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
      const res = await fetch("http://ahmed514essamapi.runasp.net/api/About", {
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


        <input placeholder="Facebook" name="facebook" value={form.facebook || ""} onChange={handleChange} />
        <input placeholder="Instagram" name="instagram" value={form.instagram || ""} onChange={handleChange} />
        <input name="github" placeholder="GitHub" value={form.github || ""} onChange={handleChange} />
        <input name="linkedin" placeholder="Linkedin" value={form.linkedin || ""} onChange={handleChange} />
        <input name="whatsapp" placeholder="WhatsApp" value={form.whatsapp || ""} onChange={handleChange} />
        <input name="cv" placeholder="My Resume" value={form.cv || ""} onChange={handleChange} />

        <label htmlFor="images">Upload Images</label>
        <input
          id="images"
          type="file"
          multiple
          onChange={(e) => setImages(Array.from(e.target.files || []))}
        />

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditAbout;