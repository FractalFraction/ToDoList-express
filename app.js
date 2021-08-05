const express = require('express')
const app = express();
const methodOverride = require('method-override')
const path = require('path');

const port = 3000
const ToDo = require('./models/ToDo.js')

app.set('view engine','ejs')
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));
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

 app.post('/edit-todo:id', async (req, res) => {
     res.render('update', {
         id: req.params.id
     })
 })

app.get('/update', async (req, res) => {
    res.render('update')
})

app.put('/update-todo:id', async (req, res) => {
    console.log('Update a ToDo!')
    await ToDo.update(
        {deadline: req.body.deadline},{
        where : {
            id: req.params.id
        }
    })
    res.redirect('/');
})


app.listen(port, () => {
    console.log(`Server up and running on port:${port}`)
})
