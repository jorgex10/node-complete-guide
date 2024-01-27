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

// ............
// NEXT LINES ARE NO LONGER NEEDED BECAUSE WE ARE USING MONGOOSE
// ............

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(
    `mongodb+srv://jorgex10:${process.env.MONGODB_PASSWORD}@cluster0.7wosptt.mongodb.net/shop?retryWrites=true&w=majority`
  )
    .then((client) => {
      console.log("Connected!");

      _db = client.db();
      callback();
    })
    .catch((err) => {
      console.log(err);

      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }

  throw "No database Found!";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
