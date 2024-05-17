import React, { useState } from "react";

// Form component for adding new persons
function P_FORM({ onAddPerson }) {
  // State variables for form data and error message
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    dateOfBirth: "",
  });
  const [error, setError] = useState("");

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation for required fields
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
    // Calling the onAddPerson function with form data
    onAddPerson(formData);
    // Resetting the form data
    setFormData({
      name: "",
      email: "",
      mobileNumber: "",
      dateOfBirth: "",
    });
  };

  // Rendering JSX for the component
  return (
    <div className="container">
      {/* Row for alignment */}
      <div className="row justify-content-center mt-5">
        {/* Column for layout */}
        <div className="col-md-6">
          {/* Card for styling */}
          <div className="card">
            <div className="card-body">
              {/* Card title */}
              <h5 className="card-title mb-4">Add New Person</h5>
              {/* Error message display */}
              {error && <div className="alert alert-danger">{error}</div>}
              {/* Form */}
              <form onSubmit={handleSubmit}>
                {/* Name input */}
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                {/* Email input */}
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                {/* Mobile number input */}
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="mobileNumber"
                    placeholder="Mobile Number"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                  />
                </div>
                {/* Date of birth input */}
                <div className="mb-3">
                  <input
                    type="date"
                    className="form-control"
                    name="dateOfBirth"
                    placeholder="Date of Birth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                  />
                </div>
                {/* Submit button */}
                <button type="submit" className="btn btn-primary">
                  Add Person
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default P_FORM;
