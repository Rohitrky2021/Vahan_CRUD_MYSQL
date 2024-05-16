const express = require("express");
const router = express.Router();
const {
  createPerson,
  getAllPersons,
  getPersonById,
  updatePersonById,
  deletePersonById,
} = require("../controllers/personController");

// Create a new person
router.post("/persons", createPerson);

// Get all persons
router.get("/persons", getAllPersons);

// Get a single person by ID
router.get("/persons/:id", getPersonById);

// Update a person by ID
router.put("/persons/:id", updatePersonById);

// Delete a person by ID
router.delete("/persons/:id", deletePersonById);

module.exports = router;
