import { useState } from "react";
import styles from "./AddProject.module.css";

const AddProject = () => {
  const [form, setForm] = useState({
    name: "",
    subTitle: "",
    description: "",
    demo: "",
    repo: "",
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
        "http://ahmed514essamapi.runasp.net/api/Project",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!res.ok) throw new Error("Failed to add project");

      alert("Project added successfully");

      // reset
      setForm({
        name: "",
        subTitle: "",
        description: "",
        demo: "",
        repo: "",
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
        <h2>Add Project</h2>

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

        <label htmlFor="image">Upload Image</label>
        <input
          type="file"
          id="image"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
        />

        <button type="submit">Add Project</button>
      </form>
    </div>
  );
};

export default AddProject;