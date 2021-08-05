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

const indexRouter = require('./routes/indexRouter.js')
const addRouter = require('./routes/addRouter.js')
const deleteRouter = require('./routes/deleteRouter.js')
const editRouter = require('./routes/editRouter.js')

app.use('/',indexRouter);
app.use('/',addRouter);
app.use('/',deleteRouter);
app.use('/',editRouter);

app.listen(port, () => {
    console.log(`Server up and running on port:${port}`)
})
