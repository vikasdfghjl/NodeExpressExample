const express = require('express')
const exphbs = require('express-handlebars');
const path = require("path");
const app = express()
const port = 8000

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars')

app.use('/', require(path.join(__dirname, 'routes/blog.js')))

app.listen(port, () => {
    console.log(`My Website listening on port ${port}`)
})