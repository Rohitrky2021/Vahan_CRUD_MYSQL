const Sequelize = require("sequelize"); // Importing Sequelize library

// Creating a Sequelize instance with database configuration
const sequelize = new Sequelize("Vahan", "root", "Rohit123@", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize; // Exporting the Sequelize instance
