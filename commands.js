const program = require("commander");
const { prompt } = require("inquirer");
const { addCustomer, findCustomer } = require("./index");

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

program
  .command("add")
  .alias("a")
  .description("Add a customer to the database")
  .action(() => {
    prompt(customerQuestions).then((answers) => addCustomer(answers));
  });

program
  .command("find <name>")
  .alias("f")
  .description("Find a customer in the database.")
  .action((name) => findCustomer(name));

program.parse(process.argv);
