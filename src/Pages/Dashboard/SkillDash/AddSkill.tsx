import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AddSkill.module.css";

const AddSkill = () => {
   const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
  }, []);
  const [form, setForm] = useState({
    name: "",
    type: "",
   
  });

  const [image, setImage] = useState<File | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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

    try {
      const res = await fetch(
        "http://ahmed514essamapi.runasp.net/api/Skill",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!res.ok) throw new Error("Failed to add skill");

      alert("Skill added successfully");

      // reset
      setForm({
        name: "",
        type: "",
      });
      setImage(null);
    } catch (err: unknown) {
  if (err instanceof Error) {
    alert(err.message);
  } else {
    alert("Unexpected error occurred");
  }
}
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Add Skill</h2>

        <input
          name="name"
          placeholder="Skill Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          name="subTitle"
          placeholder="Type"
          value={form.type}
          onChange={handleChange}
        />


        <label htmlFor="image">Upload Image</label>
        <input
          type="file"
          id="image"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
        />

        <button type="submit">Add Skill</button>
      </form>
    </div>
  );
};

export default AddSkill;