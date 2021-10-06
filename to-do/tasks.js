const fs = require("fs");
const chalk = require("chalk");
const { load } = require("signal-exit");

// Load Tasks!!
const loadTasks = () => {
  try {
    const bufferData = fs.readFileSync("tasks.json").toString();
    return JSON.parse(bufferData);
  } catch (e) {
    return [];
  }
};

//Save notes!!
const saveTasks = (tasks) => {
  const saveTask = JSON.stringify(tasks);
  fs.writeFileSync("tasks.json", saveTask);
};

//Add Tasks!!
const addTask = function (task, deadline) {
  const tasks = loadTasks();
  const duplicateTask = tasks.find((taskk) => taskk.task === task);
  if (!duplicateTask) {
    tasks.push({
      task: task,
      deadline: deadline,
    });
    saveTasks(tasks);
    return chalk.green.inverse("New task added successfully!");
  } else {
    return "Task already exist!";
  }
};

// Remove tasks!!
const removeTask = function (task) {
  const tasks = loadTasks();
  const taskLength = tasks.length;
  const duplicateTask = tasks.filter((element) => element.task !== task);
  if (duplicateTask.length === taskLength - 1) {
    saveTasks(duplicateTask);
    console.log("Note Removed!");
  } else {
    console.log("Match not found!");
  }
};

// List all tasks!!

const listTasks = () => {
  const tasks = loadTasks();
  return tasks.forEach((task) => {
    console.log(task.task);
  });
};

module.exports = {
  removeTask: removeTask,
  addTask: addTask,
  listTasks: listTasks,
};
