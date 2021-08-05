const express = require('express');
const router = express.Router();

const deleteRouter = router.delete('/todo:id', async (req, res) => {

  todo = req.app.locals.todo;

  console.log('Delete a ToDo!')
   await todo.destroy({
       where : {
           id: req.params.id
       }
   })
   res.redirect('/')
})

module.exports = deleteRouter;