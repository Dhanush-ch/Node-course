const chalk = require("chalk");
const { string, argv } = require("yargs");
const yargs = require("yargs");
const { removeNote } = require("./notes");

const notes = require("./notes");

// Create add command
yargs.command({
  command: "Add",
  describe: "Add a new note!",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    about: {
      describe: "About the note",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.about);
  },
}).argv;

// Create a remove command
yargs.command({
  command: "Remove",
  describe: "Removing a note!",
  builder: {
    title: {
      describe: "Remove title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
}).argv;

// Create a read command
yargs.command({
  command: "Read",
  describe: "Read a note!!",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNotes(argv.title);
  },
}).argv;

// Create a list command
yargs.command({
  command: "List",
  describe: "Listing the notes!",
  handler() {
    notes.getNotes();
  },
}).argv;
