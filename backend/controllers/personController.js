const Person = require("../models/Person");

exports.createPerson = async (req, res) => {
  try {
    const { name, email, mobileNumber, dateOfBirth } = req.body;
    const newPerson = await Person.create({
      name,
      email,
      mobileNumber,
      dateOfBirth,
    });
    res.status(201).json(newPerson);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.getAllPersons = async (req, res) => {
  try {
    const persons = await Person.findAll();
    res.status(200).json(persons);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.getPersonById = async (req, res) => {
  try {
    const person = await Person.findByPk(req.params.id);
    if (!person) {
      return res.status(404).json({ message: "Person not found" });
    }
    res.status(200).json(person);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.updatePersonById = async (req, res) => {
  try {
    const { name, email, mobileNumber, dateOfBirth } = req.body;
    const updatedPerson = await Person.update(
      { name, email, mobileNumber, dateOfBirth },
      { where: { id: req.params.id } }
    );
    if (updatedPerson[0] === 0) {
      return res.status(404).json({ message: "Person not found" });
    }
    res.status(200).json({ message: "Person updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.deletePersonById = async (req, res) => {
  try {
    const deletedRows = await Person.destroy({ where: { id: req.params.id } });
    if (deletedRows === 0) {
      return res.status(404).json({ message: "Person not found" });
    }
    res.status(200).json({ message: "Person deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
