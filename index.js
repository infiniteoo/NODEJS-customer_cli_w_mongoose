// require dotenv
require("dotenv").config();

// require mongoose
const mongoose = require("mongoose");

// map global promises
mongoose.Promise = global.Promise;

// connect to db
const db = mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING, {
  useMongoClient: true,
});
