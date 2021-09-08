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

// import customer model
const Customer = require("./models/customer");

// add customer
const addCustomer = (customer) => {
  Customer.create(customer).then((customer) => {
    console.info("New Customer Added");
    db.close();
  });
};

// find customer
const findCustomer = (name) => {
  // make case insensitive
  const search = new RegExp(name, "i");
  Customer.find({ $or: [{ firstName: search }, { lastName: search }] }).then(
    (customer) => {
      console.info(customer);
      console.info(`${customer.length} matches.`);
      db.close();
    }
  );
};

// export all methods
module.exports = {
  addCustomer,
  findCustomer,
};
