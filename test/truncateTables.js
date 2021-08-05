const ToDo = require('../models/ToDo.js');
 
const truncateTables = () => {
    ToDo.destroy({
    truncate: true
  });
}

module.exports = truncateTables