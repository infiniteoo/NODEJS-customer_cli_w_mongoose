#!/usr/bin/env node

const program = require("commander");
const { prompt } = require("inquirer");
const {
  addCustomer,
  findCustomer,
  updateCustomer,
  removeCustomer,
  listCustomers,
} = require("./index");

// customer questions
const customerQuestions = [
  {
    type: "input",
    name: "firstname",
    message: "What is the customer's first name?",
  },
  {
    type: "input",
    name: "lastname",
    message: "What is the customer's last name?",
  },
  {
    type: "input",
    name: "phone",
    message: "What is the customer's phone number?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the customer's email address?",
  },
];

program.version("0.0.1").description("CLI for managing customers");

/* program
  .command("add <firstname> <lastname> <phone> <email>")
  .alias("a")
  .description("Add a customer to the database")
  .action((firstname, lastname, phone, email) => {
    addCustomer({ firstname, lastname, phone, email });
  }); */

// add command
program
  .command("add")
  .alias("a")
  .description("Add a customer to the database")
  .action(() => {
    prompt(customerQuestions).then((answers) => addCustomer(answers));
  });

// find command
program
  .command("find <name>")
  .alias("f")
  .description("Find a customer in the database.")
  .action((name) => findCustomer(name));

// update command
program
  .command("update <_id>")
  .alias("u")
  .description("updated a customer in the database")
  .action((_id) => {
    prompt(customerQuestions).then((answers) => updateCustomer(_id, answers));
  });

// remove command
program
  .command("remove <_id>")
  .alias("r")
  .description("Remove a customer from the database.")
  .action((_id) => removeCustomer(_id));

program
  .command("list")
  .alias("l")
  .description("List all customers in database.")
  .action(() => listCustomers());

program.parse(process.argv);
