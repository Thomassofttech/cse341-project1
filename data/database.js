const dotenv = require('dotenv');
dotenv.config();

const mongoClient = require('mongodb').MongoClient;

let database;

// Initialize Database
const initDb = (callback) => {
  if (database) {
    console.log('Database is already initialized!');
    return callback(null, database);
  }
const uri = "mongodb+srv://thomasgreat0_db_user:dvJJaq2tCt8wMpW5@cluster0.fkb9ekq.mongodb.net/?appName=Cluster0";
  mongoClient
    .connect(uri )
    .then((client) => {
      database = client.db(); // select default DB from URI
      console.log('Database connected');
      callback(null, database);
    })
    .catch((err) => {
      callback(err);
    });
};

// Get Database
const getDatabase = () => {
  if (!database) {
    throw new Error('Database not initialized!');
  }
  return database;
};

module.exports = {
  initDb,
  getDatabase
};