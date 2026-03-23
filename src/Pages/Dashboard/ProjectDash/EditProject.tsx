import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./EditProject.module.css";

interface ProjectData {
  name: string;
  subTitle?: string;
  description: string;
  demo: string;
  repo: string;
}

const EditProject = () => {
  const { id } = useParams(); // 👈 نجيب id من URL
  const navigate = useNavigate();

  const [form, setForm] = useState<ProjectData>({
    name: "",
    subTitle: "",
    description: "",
    demo: "",
    repo: "",
  });

  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(true);

  // ✅ جلب بيانات المشروع
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(
          `http://ahmed514essamapi.runasp.net/api/Project/${id}`
        );

        if (!res.ok) throw new Error("Failed to fetch project");

        const data = await res.json();

        setForm({
          name: data.name || "",
          subTitle: data.subTitle || "",
          description: data.description || "",
          demo: data.demo || "",
          repo: data.repo || "",
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
        `http://ahmed514essamapi.runasp.net/api/Project/${id}`,
        {
          method: "PUT",
          body: formData,
        }
      );

      if (!res.ok) throw new Error("Update failed");

      alert("Project updated successfully");

      navigate("/projects"); // 👈 رجوع لصفحة المشاريع
    } catch (err: unknown) {
      if (err instanceof Error) alert(err.message);
      else alert("Unexpected error occurred");
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Edit Project</h2>

        <input
          name="name"
          placeholder="Project Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          name="subTitle"
          placeholder="Sub Title"
          value={form.subTitle}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
        />

        <input
          name="demo"
          placeholder="Demo Link"
          value={form.demo}
          onChange={handleChange}
        />

        <input
          name="repo"
          placeholder="GitHub Repo"
          value={form.repo}
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

export default EditProject;