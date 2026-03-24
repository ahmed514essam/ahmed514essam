import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./EditProject.module.css";

interface SkillData {
  name: string;
  type?: string;
  
}

const EditSkill = () => {
  const { id } = useParams(); // 👈 نجيب id من URL
  const navigate = useNavigate();

  const [form, setForm] = useState<SkillData>({
    name: "",
    type: "",   
  });

  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(true);

  // ✅ جلب بيانات المشروع
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(
          `http://ahmed514essamapi.runasp.net/api/Skill/${id}`
        );

        if (!res.ok) throw new Error("Failed to fetch skill");

        const data = await res.json();

        setForm({
          name: data.name || "",
          type: data.type || "",
        });
      } catch (err : unknown) {
         if (err instanceof Error) {
    alert(err.message);
  } else {
    alert("Unexpected error occurred");
  }
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ تعديل المشروع
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
      const res = await fetch(
        `http://ahmed514essamapi.runasp.net/api/Skill/${id}`,
        {
          method: "PUT",
          body: formData,
        }
      );

      if (!res.ok) throw new Error("Update failed");

      alert("Skill updated successfully");

      navigate("/skills"); // 👈 رجوع لصفحة المهارات
    } catch (err: unknown) {
      if (err instanceof Error) alert(err.message);
      else alert("Unexpected error occurred");
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Edit Skill</h2>

        <input
          name="name"
          placeholder="Skill Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          name="type"
          placeholder="Skill Type"
          value={form.type}
          onChange={handleChange}
        />

  

        <label htmlFor="image">Change Image</label>
        <input
          type="file"
          id="image"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
        />

        <button type="submit">Update Project</button>
      </form>
    </div>
  );
};

export default EditSkill;