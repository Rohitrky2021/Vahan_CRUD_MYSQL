const Sequelize = require("sequelize"); // Importing Sequelize library
const sequelize = require("../config/config"); // Importing database configuration

// Defining the Person model
const Person = sequelize.define("person", {
  // Definition of fields
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true, // Ensuring uniqueness of email
    validate: {
      isEmail: true, // Validating email format
    },
  },
  mobileNumber: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true, // Ensuring uniqueness of mobile number
    validate: {
      isNumeric: true, // Validating numeric format
    },
  },
  dateOfBirth: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
});

module.exports = Person; // Exporting the Person model
