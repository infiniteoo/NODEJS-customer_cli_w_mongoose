const program = require("commander");
const { addCustomer, findCustomer } = require("./index");

program.version("0.0.1").description("CLI for managing customers");

program.parse(process.argv);
