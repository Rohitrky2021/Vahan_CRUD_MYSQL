const Person = require("../models/Person");  


// Controller function to create a new person
exports.createPerson = async (req, res) => {
  try {
    // Extracting data from request body
    const { name, email, mobileNumber, dateOfBirth } = req.body;
    // Creating a new person instance
    const newPerson = await Person.create({
      name,
      email,
      mobileNumber,
      dateOfBirth,
    });
    // Sending response with the newly created person data
    res.status(201).json(newPerson);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};



// Controller function to get all persons
exports.getAllPersons = async (req, res) => {
  try {
    // Finding all persons from the database
    const persons = await Person.findAll();
    // Sending response with all persons data
    res.status(200).json(persons);
  } catch (error) {
    console.error(error);
  
    res.status(500).json({ message: "Server Error" });
  }
};



// Controller function to get a person by ID
exports.getPersonById = async (req, res) => {
  try {
    // Finding a person by ID from the database
    const person = await Person.findByPk(req.params.id);
    // If person not found, sending 404 response
    if (!person) {
      return res.status(404).json({ message: "Person not found" });
    }
    // Sending response with the found person data
    res.status(200).json(person);
  } catch (error) {
    console.error(error);
 
    res.status(500).json({ message: "Server Error" });
  }
};



// Controller function to update a person by ID
exports.updatePersonById = async (req, res) => {
  try {
    // Extracting data from request body
    const { name, email, mobileNumber, dateOfBirth } = req.body;
    // Updating the person with the provided ID
    const updatedPerson = await Person.update(
      { name, email, mobileNumber, dateOfBirth },
      { where: { id: req.params.id } }
    );
    // If no rows were affected, sending 404 response
    if (updatedPerson[0] === 0) {
      return res.status(404).json({ message: "Person not found" });
    }
    // Sending success response after updating the person
    res.status(200).json({ message: "Person updated successfully" });
  } catch (error) {
    console.error(error);
     
    res.status(500).json({ message: "Server Error" });
  }
};



// Controller function to delete a person by ID
exports.deletePersonById = async (req, res) => {
  try {
    // Deleting the person with the provided ID
    const deletedRows = await Person.destroy({ where: { id: req.params.id } });
    // If no rows were affected, sending 404 response
    if (deletedRows === 0) {
      return res.status(404).json({ message: "Person not found" });
    }
    // Sending success response after deleting the person
    res.status(200).json({ message: "Person deleted successfully" });
  } catch (error) {
    console.error(error);

    res.status(500).json({ message: "Server Error" });
  }
};
