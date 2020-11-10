const express = require('express')
const path = require('path')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const db = require('./config/db')
const app = express()
const port = 3000

const route = require('./routes')

//connect db
db.connect()

//http logger
app.use(morgan('combined'))

app.use(express.static(path.join(__dirname, 'public')))

//template engin
app.engine('hbs', handlebars({
  extname: ".hbs"
}))

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources','views'))

//router
route(app)

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})