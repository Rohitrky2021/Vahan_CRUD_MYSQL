const Sequelize = require("sequelize");
const sequelize = require("../config/config");

const Person = sequelize.define("person", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  mobileNumber: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isNumeric: true,
    },
  },
  dateOfBirth: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
});

module.exports = Person;
