import React, { useState } from "react";
import myStyles from "./uploadPdf.module.css";

export function UploadPdf() {
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState("general");
  const [error, setError] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const handleSubmit = async (e) => {
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
      const MY_CLOUD_NAME = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
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
          `Document Upload Successful\n\nCategory: ${category}\nDocument URL: ${data.secure_url}\n\nThe PDF has been successfully uploaded to our system.`
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
    <div className={myStyles.container}>
      <div className={myStyles.upload_form_box}>
        <h2 className={myStyles.section_title}>Upload PDF Document</h2>
        <form onSubmit={handleSubmit}>
          <div className={myStyles.form_group}>
            <label htmlFor="pdfInput">Select PDF File*</label>
            <input
              type="file"
              id="pdfInput"
              accept=".pdf"
              onChange={(e) => setFile(e.target.files[0])}
              required
            />
          </div>

          <div className={myStyles.form_group}>
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

          {error && <p className={myStyles.error_message}>{error}</p>}

          <button
            type="submit"
            className={myStyles.upload_button}
            disabled={!file || isUploading}
          >
            {isUploading ? "Uploading..." : "Upload Document"}
          </button>
        </form>
      </div>
    </div>
  );
}
