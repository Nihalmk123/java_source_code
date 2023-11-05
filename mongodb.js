const { MongoClient } = require("mongodb");
const dataBase = "employee";
const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

async function dbConnection() {
  let result = await client.connect();
  const db = result.db(dataBase);
  return db.collection("inventory");
  //   const response = await collection.find({ status: "A" }).toArray();
  //   console.log(response);
}

module.exports = dbConnection;