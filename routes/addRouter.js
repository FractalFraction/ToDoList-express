const express = require('express');
const router = express.Router();

const addRouter = router.post('/add-bookmark', async (req, res) => {
  console.log('Add a ToDo!')
  // Run the sequelize create method
  const todo = req.app.locals.todo

   await todo.create({
       task: req.body.task,
       deadline: req.body.deadline
   })
   res.redirect('/')
})

module.exports = addRouter;