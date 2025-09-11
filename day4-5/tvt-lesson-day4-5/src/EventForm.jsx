import React, { useState } from "react";

export default function EventForm() {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    location: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Sự kiện: ${formData.name}\nNgày: ${formData.date}\nĐịa điểm: ${formData.location}\nMô tả: ${formData.description}`
    );
    // reset form
    setFormData({
      name: "",
      date: "",
      location: "",
      description: "",
    });
  };

  return (
    <div style={{ maxWidth: "500px", margin: "20px auto" }}>
      <h2>Tạo sự kiện mới</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Tên sự kiện:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nhập tên sự kiện"
            style={{ width: "100%", padding: "6px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Ngày:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            style={{ width: "100%", padding: "6px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Địa điểm:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Nhập địa điểm"
            style={{ width: "100%", padding: "6px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Mô tả:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Mô tả sự kiện"
            style={{ width: "100%", padding: "6px" }}
          />
        </div>

        <button type="submit" style={{ padding: "8px 16px" }}>
          Lưu sự kiện
        </button>
      </form>
    </div>
  );
}
