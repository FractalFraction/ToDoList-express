const express = require('express')
const app = express();
const methodOverride = require('method-override')

const port = 3000
const ToDo = require('./models/ToDo.js')

app.set('view engine','ejs')
app.use(express.urlencoded({extended: true}))

app.use(methodOverride('_method'))

// Get the index page 
app.get('/', async (req, res) => {
    console.log('Get index page!')
    // Load all todos 
    const todos = await ToDo.findAll({
        attributes: ['id','task', 'deadline']
    });

    res.render('index', {todos: todos})
})

app.post('/add-bookmark', async (req, res) => {
   console.log('Add a ToDo!')
   console.log(req.body.task);
   // Run the sequelize create method
    await ToDo.create({
        task: req.body.task,
        deadline: req.body.deadline
    })
    res.redirect('/')
})

app.delete('/todo:id', async (req, res) => {
    console.log('Delete a ToDo!')
     await ToDo.destroy({
         where : {
             id: req.params.id
         }
     })
     res.redirect('/')
 })


app.listen(port, () => {
    console.log(`Server up and running on port:${port}`)
})
