const yargs = require("yargs");
const chalk = require("chalk");
const tasks = require("./tasks");
const { truncate } = require("fs");

yargs.command({
  command: "Add",
  describe: "Add a new task",
  builder: {
    task: {
      describe: "describe task",
      demandOption: true,
      type: "string",
    },
    deadline: {
      describe: "set deadline",
      demandOption: true,
    },
  },
  handler(argv) {
    console.log(tasks.addTask(argv.task, argv.deadline));
  },
}).argv;

yargs.command({
  command: "Remove",
  builder: {
    task: {
      demandOption: true,
    },
    deadline: {
      describe: "Deadline",
    },
  },
  handler(argv) {
    tasks.removeTask(argv.task);
  },
}).argv;

yargs.command({
  command: "List",
  describe: "List tasks",
  handler() {
    tasks.listTasks();
  },
});
