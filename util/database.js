const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "node-complete",
  process.env.DB_name,
  process.env.DB_PASSWORD,
  { dialect: "mysql", host: "localhost" }
);

module.exports = sequelize;
