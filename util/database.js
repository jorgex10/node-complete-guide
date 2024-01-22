const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "node-complete",
  process.env.DB_NAME || "root",
  process.env.DB_PASSWORD || "nuttertools",
  {
    dialect: "mysql",
    host: "localhost",
  }
);

module.exports = sequelize;
