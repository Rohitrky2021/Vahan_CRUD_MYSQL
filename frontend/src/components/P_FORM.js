import React, { useState } from "react";
import "./P_FORM.css"; // Import custom CSS
import hero from "../assets/cms.png";

function P_FORM({ onAddPerson }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    dateOfBirth: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.mobileNumber ||
      !formData.dateOfBirth
    ) {
      setError("All fields are required.");
      return;
    }
    setError("");
    onAddPerson(formData);
    setFormData({
      name: "",
      email: "",
      mobileNumber: "",
      dateOfBirth: "",
    });
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h2 className="form-title">
          <img src={hero} alt="Logo"></img>
        </h2>
        {error && <div className="form-error">{error}</div>}
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <input
              type="text"
              className="form-input"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-input"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-input"
              name="mobileNumber"
              placeholder="Mobile Number"
              value={formData.mobileNumber}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              className="form-input"
              name="dateOfBirth"
              placeholder="Date of Birth"
              value={formData.dateOfBirth}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="form-button">
            Add Person
          </button>
        </form>
      </div>
    </div>
  );
}

export default P_FORM;
