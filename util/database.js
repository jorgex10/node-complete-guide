// const Sequelize = require("sequelize");

// const sequelize = new Sequelize(
//   "node-complete",
//   process.env.DB_NAME || "root",
//   process.env.DB_PASSWORD || "nuttertools",
//   {
//     dialect: "mysql",
//     host: "localhost",
//   }
// );

// module.exports = sequelize;

const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect(
    `mongodb+srv://jorgex10:${process.env.MONGODB_PASSWORD}@cluster0.7wosptt.mongodb.net/?retryWrites=true&w=majority`
  )
    .then((client) => {
      console.log("Connected!");
      callback(client);
    })
    .catch((err) => console.log(err));
};

module.exports = mongoConnect;
