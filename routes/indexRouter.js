
const express = require('express');
const router = express.Router();

const ToDo = require('../models/ToDo');

// Get the index page 
const indexRouter = router.get('/', async (req, res) => {
  console.log('Get index page!')
  // Load all todos 
  const todos = await ToDo.findAll({
      attributes: ['id','task', 'deadline']
  });

  req.app.locals.todo = ToDo;

  res.render('index', {todos: todos})
})

module.exports = indexRouter;