import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./EditProject.module.css";

interface ProjectData {
  Id:number;
  Name: string;
  Type?: string;
  
}

const EditProject = () => {
   const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
  }, []);

  const { id } = useParams(); // 👈 نجيب id من URL

  const [form, setForm] = useState<ProjectData>({
    Id: 0,
    Name: "",
    Type: "",
    
  });

  const [image, setImage] = useState<File[]>([]);
  const [loading, setLoading] = useState(true);

  // ✅ جلب بيانات المشروع
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(
          `https://ahmed514essamapi.runasp.net/api/Skill/${id}`
        );

        if (!res.ok) throw new Error("Failed to fetch project");

        const data = await res.json();

        setForm({
          Id: data.id || 0,
          Name: data.name || "",
          Type: data.type || "",
      
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

    if (image && image.length > 0) {
      image.forEach((file) => {
formData.append("NewImages", file);      });
    }

    try {
      const res = await fetch(
        `https://ahmed514essamapi.runasp.net/api/Skill/${id}`,
        {
          method: "PUT",
          body: formData,
        }
      );

      if (!res.ok) throw new Error("Update failed");

      alert("Skill updated successfully");

      navigate("/ShowSkills"); // 👈 رجوع لصفحة المهارات
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
          name="Name"
          placeholder="Project Name"
          value={form.Name}
          onChange={handleChange}
        />

        <input
          name="SubTitle"
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


        <button type="submit">Update Skill</button>
                                        <button className={styles.backButton} type="button" onClick={() => navigate("/maindashboard")}>Back To Dashboard</button>

      </form>
    </div>
  );
};

export default EditProject;