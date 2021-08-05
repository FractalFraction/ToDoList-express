const ToDo = require('../models/ToDo.js');
 
const createTables = () => {
    ToDo.create({
    task: "Open Presents!",
    deadline: "25/12/2021"
  });
}

module.exports = createTables