const express = require('express')
const app = express();

const port = 3000

const ToDo = require('./models/ToDo.js')


app.set('view engine','ejs')
app.use(express.urlencoded({extended: true}))

// Get the index page 
app.get('/', async (req, res) => {

    //await ToDo.sync({alter: true})

    console.log('Get index page!')
    // Load all todos 
    const todos = await ToDo.findAll({
        attributes: ['task', 'deadline']
    });

    // console.log(todos)
    // console.log(todos.dataValues);
    // console.log(todos.task);
    // console.log(todos.deadline);

    res.render('index', {todos: todos})
})

app.post('/add-bookmark', async (req, res) => {
   
   console.log('Request Body')
   console.log(req.body.task)
   console.log(req.body.deadline)

   // Run the sequelize create method
   const todo = await ToDo.create({
        task: req.body.task,
        deadline: req.body.deadline
   });
   
   console.log('ToDo Object')

    res.redirect('/',{todo: todo})
})


app.listen(port, () => {
    console.log(`Server up and running on port:${port}`)
})
