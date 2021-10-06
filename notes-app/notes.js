const fs = require("fs");
const chalk = require("chalk");

// Listing Notes
const getNotes = () => {
  const notes = loadNotes();
  return notes.forEach((element) => {
    console.log(element.title);
  });
};

//Reading Notes
const readNotes = (title) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => {
    return note.title === title;
  });
  debugger;
  if (duplicateNote) {
    console.log(chalk.inverse(duplicateNote.title));
    console.log(duplicateNote.about);
  } else {
    console.log(chalk.red.inverse("There is no match!"));
  }
};

// Adding Note
const addNote = (title, about) => {
  const notes = loadNotes();
  // const duplicateTitle = notes.filter((note) => note.title === title);
  const duplicateNote = notes.find((note) => note.title === title);
  if (!duplicateNote) {
    notes.push({
      title: title,
      about: about,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("New note added!"));
  } else {
    console.log(chalk.red.inverse("Title already exists!"));
  }
};

// Removing note!!
const removeNote = (title) => {
  const notes = loadNotes();
  const notesLength = notes.length;
  const duplicateNotes = notes.filter((note) => note.title !== title);
  if (duplicateNotes.length === notesLength - 1) {
    console.log(chalk.green.inverse(" Note removed!"));
    saveNotes(duplicateNotes);
  } else {
    console.log(chalk.red.inverse("No note found!"));
  }
};

const loadNotes = () => {
  try {
    const readData = fs.readFileSync("notes.json").toString();
    // const dataJSON = readData.toString();
    return JSON.parse(readData);
  } catch (e) {
    return [];
  }
};

const saveNotes = (notes) => {
  const data = JSON.stringify(notes);
  fs.writeFileSync("notes.json", data);
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  readNotes: readNotes,
};
