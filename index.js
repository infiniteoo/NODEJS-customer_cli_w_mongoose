// require dotenv
require("dotenv").config();

// require mongoose
const mongoose = require("mongoose");

// map global promises
mongoose.Promise = global.Promise;

// connect to db
const db = mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING, {
  /*  useMongoClient: true, */
});

// import customer model
const Customer = require("./models/customer");

// add customer
const addCustomer = async (customer) => {
  try {
    const newCustomer = await Customer.create(customer);
    if (newCustomer) {
      console.info("New Customer Added");
      mongoose.connection.close();
    } else {
      console.error("Error adding customer");
    }
  } catch (error) {
    console.error(error);
  }
};

// update customer
const updateCustomer = async (_id, customer) => {
  try {
    const updatedCustomer = await Customer.updateOne({ _id }, customer);
    if (updatedCustomer) {
      console.info("Customer Updated");
      mongoose.connection.close();
    } else {
      console.error("Error updating customer");
    }
  } catch (error) {
    console.error(error);
  }
};

// update customer
const removeCustomer = async (_id) => {
  try {
    const removedCustomer = await Customer.deleteOne({ _id });
    if (removedCustomer) {
      console.info("Customer Removed from database");
      mongoose.connection.close();
    } else {
      console.error("Error removing customer");
    }
  } catch (error) {
    console.error(error);
  }
};

// find customer
const findCustomer = async (name) => {
  try {
    const search = new RegExp(name, "i");
    const foundCustomer = await Customer.find({
      $or: [{ firstname: search }, { lastname: search }],
    });
    if (foundCustomer) {
      console.info(foundCustomer);
      console.info(`${foundCustomer.length} matches`);
      mongoose.connection.close();
    } else {
      console.error("Error finding customer");
    }
  } catch (error) {
    console.error(error);
  }
  // Make case insensitive
};

// export all methods
module.exports = {
  addCustomer,
  findCustomer,
};
