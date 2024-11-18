const { MongoClient } = require('mongodb');
require('dotenv').config(); // Load environment variables

const uri = process.env.MONGODB_URI; // Access the URI from .env
const client = new MongoClient(uri);

let db;

async function connectDB() {
  if (!db) {
    try {
      await client.connect();
      console.log("Connected to MongoDB");
      db = client.db(process.env.DATABASE_NAME); // Use database name from .env
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      process.exit(1); // Exit if there's a connection error
    }
  }
  return db;
}

module.exports = { connectDB };
