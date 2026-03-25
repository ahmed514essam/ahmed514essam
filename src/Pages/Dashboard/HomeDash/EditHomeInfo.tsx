import { useEffect, useState } from "react";
import styles from "./HomeInf.module.css";
import { useNavigate } from "react-router-dom";

interface HomeFormData {
  subTitle?: string;
  description?: string;
  facebook?: string;
  instagram?: string;
  github?: string;
  linkedin?: string;
  whatsapp?: string;
  cv?: string;
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
  const [image, setImage] = useState<File | null>(null);

  // 👇 يجيب البيانات القديمة
  useEffect(() => {
    fetch("http://ahmed514essamapi.runasp.net/api/Home")
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

    if (image) {
      formData.append("image", image);
    }

  


try {
  const res = await fetch("http://ahmed514essamapi.runasp.net/api/Home", {
    method: "PUT",
    body: formData,
  });

  if (!res.ok) throw new Error("Update failed");

  alert("Updated Successfully");
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
        <textarea placeholder="Summar" name="description" value={form.description || ""} onChange={handleChange} />

        <input placeholder="Facebook" name="facebook" value={form.facebook || ""} onChange={handleChange} />
        <input placeholder="Instagram" name="instagram" value={form.instagram || ""} onChange={handleChange} />
        <input name="github" placeholder="GitHub" value={form.github || ""} onChange={handleChange} />
        <input name="linkedin" placeholder="Linkedin" value={form.linkedin || ""} onChange={handleChange} />
        <input name="whatsapp" placeholder="WhatsApp" value={form.whatsapp || ""} onChange={handleChange} />
        <input name="cv" placeholder="My Resume" value={form.cv || ""} onChange={handleChange} />

<label htmlFor="image">Upload Image</label>
        <input id="image"  type="file" onChange={(e) => setImage(e.target.files?.[0] || null)} />

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditHome;