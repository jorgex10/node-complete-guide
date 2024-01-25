const mondodb = require("mongodb");
const getDb = require("../util/database").getDb;

const ObjectId = mondodb.ObjectId;

class User {
  constructor(username, email) {
    this.name = username;
    this.email = email;
  }

  save() {
    const db = getDb();

    return db.collection("users").insertOne(this);
  }

  static findById(userId) {
    const db = getDb();

    return db.collection("users").findOne({ _id: new ObjectId(userId) });
  }
}

module.exports = User;
