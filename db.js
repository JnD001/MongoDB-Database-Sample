const { MongoClient } = require('mongodb');


const uri = 'mongodb+srv://*#######*.grwuh.mongodb.net/Login?retryWrites=true&w=majority';

const client = new MongoClient(uri);

let db;

async function connectDB() {
  if (!db) {
    try {
      await client.connect();
      console.log("Connected to MongoDB");
      db = client.db('Login'); 
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      process.exit(1); // Exit if there's a connection error
    }
  }
  return db;
}

module.exports = { connectDB };
