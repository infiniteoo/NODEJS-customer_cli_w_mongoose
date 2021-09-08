const program = require("commander");
const { addCustomer, findCustomer } = require("./index");

program.version("0.0.1").description("CLI for managing customers");

program
  .command("add <firstname> <lastname> <phone> <email>")
  .alias("a")
  .description("Add a customer to the database")
  .action((firstname, lastname, phone, email) => {
    addCustomer({ firstname, lastname, phone, email });
  });

  program
  .command('find <name>')
  .alias('f')
  .description('Find a customer in the database.')
  .action(name => findCustomer(name));

program.parse(process.argv);
