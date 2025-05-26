import { useState } from "react";
import styles from "./authUploadPdf.module.css";

export function Auth() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState("general");
  const [error, setError] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const correctEmail = "sampadmondal137@gmail.com";
  const correctPassword = "@Sampad2003";

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (email === correctEmail && password === correctPassword) {
      setStep(2);
    } else if (email !== correctEmail && password === correctPassword) {
      alert("Invalid email");
    } else if (email === correctEmail && password !== correctPassword) {
      alert("Invalid password");
    } else {
      alert("Invalid credentials");
    }
  };

  const handleUploadSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setError("Please select a PDF file");
      return;
    }

    if (!file.type.includes("pdf")) {
      setError("Please upload only PDF files");
      return;
    }

    setIsUploading(true);
    setError("");

    try {
      const MY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "notice");
      formData.append("resource_type", "raw");
      formData.append("folder", `notice/${category}`);

      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${MY_CLOUD_NAME}/raw/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      if (data.secure_url) {
        alert(
          `Document uploaded successfully.\n\nCategory: ${category}\n\nURL: ${data.secure_url}\n\nYour file has been securely stored and is now accessible.`
        );
        setFile(null);
        e.target.reset();
      } else {
        setError("Upload failed: " + (data.error?.message || "Unknown error"));
      }
    } catch (err) {
      setError("Upload failed: " + err.message);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className={styles.container}>
      {step === 1 && (
        <div className={styles.form_box}>
          <h2 className={styles.section_title}>Admin Login</h2>
          <form onSubmit={handleLoginSubmit}>
            <div className={styles.form_group}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleLoginChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleLoginChange}
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className={styles.button}
              disabled={!formData.email || !formData.password}
            >
              Login
            </button>
          </form>
        </div>
      )}

      {step === 2 && (
        <div className={styles.form_box}>
          <h2 className={styles.section_title}>Upload PDF Document</h2>
          <form onSubmit={handleUploadSubmit}>
            <div className={styles.form_group}>
              <label htmlFor="pdfInput">Select PDF File*</label>
              <input
                type="file"
                id="pdfInput"
                accept=".pdf"
                onChange={(e) => setFile(e.target.files[0])}
                required
              />
            </div>

            <div className={styles.form_group}>
              <label htmlFor="categorySelect">Select Notice Type*</label>
              <select
                id="categorySelect"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="general">General Notice</option>
                <option value="admission">Admission Notice</option>
                <option value="tender">Tender Notice</option>
                <option value="other">Upcoming Events</option>
              </select>
            </div>

            {error && <p className={styles.error_message}>{error}</p>}

            <button
              type="submit"
              className={styles.button}
              disabled={!file || isUploading}
            >
              {isUploading ? "Uploading..." : "Upload Document"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
