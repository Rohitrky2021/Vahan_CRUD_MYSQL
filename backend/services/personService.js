const Person = require("../models/Person"); // Importing the Person model

// Function to create a new person
const createPerson = async (name, email, mobileNumber, dateOfBirth) => {
  try {
    // Creating a new person instance
    const newPerson = await Person.create({
      name,
      email,
      mobileNumber,
      dateOfBirth,
    });
    return newPerson;  
  } catch (error) {
    // Throwing an error if creation fails
    throw new Error("Error creating person: " + error.message);
  }
};


// Function to get all persons
const getAllPersons = async () => {
  try {
    // Finding all persons from the database
    const persons = await Person.findAll();
    return persons; // Returning all persons
  } catch (error) {
    // Throwing an error if retrieval fails
    throw new Error("Error getting all persons: " + error.message);
  }
};


// Function to get a single person by ID
const getPersonById = async (id) => {
  try {
    // Finding a person by ID from the database
    const person = await Person.findByPk(id);
    // If person not found, throwing an error
    if (!person) {
      throw new Error("Person not found");
    }
    return person; // Returning the found person
  } catch (error) {
    //   if retrieval fails
    throw new Error("Error getting person by ID: " + error.message);
  }
};



// Function to update a person by ID
const updatePersonById = async (id, name, email, mobileNumber, dateOfBirth) => {
  try {
    // Updating the person with the provided ID
    const updatedPerson = await Person.update(
      { name, email, mobileNumber, dateOfBirth },
      { where: { id } }
    );
    // If no rows were affected, throwing an error
    if (updatedPerson[0] === 0) {
      throw new Error("Person not found");
    }
    return { message: "Person updated successfully" };  
  } catch (error) {
    // Throwing an error if update fails
    throw new Error("Error updating person: " + error.message);
  }
};



// Function to delete a person by ID
const deletePersonById = async (id) => {
  try {
    // Deleting the person with the provided ID
    const deletedRows = await Person.destroy({ where: { id } });
    // If no rows were affected, throwing an error
    if (deletedRows === 0) {
      throw new Error("Person not found");
    }
    return { message: "Person deleted successfully" };  
  } catch (error) {
    // Throwing an error if deletion fails
    throw new Error("Error deleting person: " + error.message);
  }
};

module.exports = {
  createPerson,
  getAllPersons,
  getPersonById,
  updatePersonById,
  deletePersonById,
};
