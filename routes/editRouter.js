const express = require('express');
const editRouter = express.Router();

editRouter.route('/edit-todo:id').get(async (req, res) => {
  res.render('update', {
      id: req.params.id
  })
})

editRouter.route('/update-todo:id').put(async (req, res) => {
  console.log('Update a ToDo!')

  todo = req.app.locals.todo

  await todo.update(
      {deadline: req.body.deadline},{
      where : {
          id: req.params.id
      }
  })
  res.redirect('/');
})

module.exports = editRouter;