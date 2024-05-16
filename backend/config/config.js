const Sequelize = require("sequelize");

const sequelize = new Sequelize("Vahan", "root", "Rohit123@", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
