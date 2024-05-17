/* eslint-disable react/jsx-pascal-case */ // Disabling Pascal case check for JSX elements

import React, { useState, useEffect } from "react";
import axios from "axios";
import P_FORM from "./P_FORM"; // Importing the form component
import P_List from "./P_List"; // Importing the list component

function Persons() {
  // State variables for storing persons and error message
  const [persons, setPersons] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  // Fetching data from the server on component mount
  useEffect(() => {
    fetchData();
  }, []);

  // Function to fetch data from the server
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/persons");
      setPersons(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Function to handle addition of a new person
  const handleAddPerson = async (formData) => {
    try {
      await axios.post("http://localhost:3000/api/persons", formData);
      fetchData(); // Fetch data after adding a person
    } catch (error) {
      console.error("Error adding person:", error);
    }
  };

  // Function to handle updating an existing person
  const handleUpdatePerson = async (id, newData) => {
    // Validation for required fields
    if (
      !newData.name ||
      !newData.email ||
      !newData.mobileNumber ||
      !newData.dateOfBirth
    ) {
      setErrorMessage("All fields are required.");
      setTimeout(() => {
        setErrorMessage("");
      }, 3000); // Clear the error message after 3 seconds
      return;
    }
    try {
      await axios.put(`http://localhost:3000/api/persons/${id}`, newData);
      fetchData(); // Fetch data after updating a person
    } catch (error) {
      console.error("Error updating person:", error);
    }
  };

  // Function to handle deletion of a person
  const handleDeletePerson = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/persons/${id}`);
      fetchData(); // Fetch data after deleting a person
    } catch (error) {
      console.error("Error deleting person:", error);
    }
  };

  // Rendering JSX for the component
  return (
    <div
      style={{
        backgroundColor: "#f0f0f0",
        padding: "10px",
        borderRadius: "10px",
        // marginTop: "90px",
      }}
    >
      {/* Heading for the form */}
      <h1
        className="text-center fw-bold mt-5 mb-4"
        style={{
          fontFamily: "Arial, sans-serif",
          color: "#333",
          textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
        }}
      >
        Form For Persons
      </h1>

      {/* Error message display */}
      {errorMessage && (
        <div
          className="alert alert-danger text-center"
          role="alert"
          style={{
            backgroundColor: "#f8d7da",
            color: "#721c24",
            borderRadius: "5px",
            padding: "10px",
            marginBottom: "20px",
          }}
        >
          {errorMessage}
        </div>
      )}

      {/* Form component for adding new persons */}
      <P_FORM onAddPerson={handleAddPerson} />

      {/* List component for displaying existing persons */}
      <P_List
        persons={persons}
        onUpdatePerson={handleUpdatePerson}
        onDeletePerson={handleDeletePerson}
        buttonStyles={{
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          padding: "10px 3.5rem", // Added padding x of 3.5rem
          cursor: "pointer",
          margin: "100px",
          boxShadow: "2px 2px 4px rgba(0,0,0,0.3)",
        }}
        deleteButtonStyles={{
          backgroundColor: "#dc3545",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          padding: "5px 3.5rem", // Added padding x of 3.5rem
          cursor: "pointer",
          margin: "5px",
          boxShadow: "2px 2px 4px rgba(0,0,0,0.3)",
        }}
      />
    </div>
  );
}

export default Persons;
