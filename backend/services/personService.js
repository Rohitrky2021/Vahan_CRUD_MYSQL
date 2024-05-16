const Person = require("../models/Person");

// Create a new person
const createPerson = async (name, email, mobileNumber, dateOfBirth) => {
  try {
    const newPerson = await Person.create({
      name,
      email,
      mobileNumber,
      dateOfBirth,
    });
    return newPerson;
  } catch (error) {
    throw new Error("Error creating person: " + error.message);
  }
};

// Get all persons
const getAllPersons = async () => {
  try {
    const persons = await Person.findAll();
    return persons;
  } catch (error) {
    throw new Error("Error getting all persons: " + error.message);
  }
};

// Get a single person by ID
const getPersonById = async (id) => {
  try {
    const person = await Person.findByPk(id);
    if (!person) {
      throw new Error("Person not found");
    }
    return person;
  } catch (error) {
    throw new Error("Error getting person by ID: " + error.message);
  }
};

// Update a person by ID
const updatePersonById = async (id, name, email, mobileNumber, dateOfBirth) => {
  try {
    const updatedPerson = await Person.update(
      { name, email, mobileNumber, dateOfBirth },
      { where: { id } }
    );
    if (updatedPerson[0] === 0) {
      throw new Error("Person not found");
    }
    return { message: "Person updated successfully" };
  } catch (error) {
    throw new Error("Error updating person: " + error.message);
  }
};

// Delete a person by ID
const deletePersonById = async (id) => {
  try {
    const deletedRows = await Person.destroy({ where: { id } });
    if (deletedRows === 0) {
      throw new Error("Person not found");
    }
    return { message: "Person deleted successfully" };
  } catch (error) {
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
