const express = require('express')
const app = express();

const port = 3000

app.set('view engine','ejs')
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    console.log('Get index page!')
    res.render('index')
})


app.listen(port, () => {
    console.log(`Server up and running on port:${port}`)
})
