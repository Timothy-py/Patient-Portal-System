const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes/api');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
const flash = require('connect-flash');
const { body } = require('express-validator');

const app = express()
const port = process.env.PORT || 5000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}))

// parse application/json
app.use(bodyParser.json())

app.use(express.static('public'));
app.use(expressLayouts);

app.use(session({
    secret: "PatientPortal",
    saveUninitialized: true,
    resave: true
}))

app.use(flash());

// static files
app.set('views', path.join(__dirname, 'views'))
// set templating engine
app.set('view engine', 'ejs')

// emabble access to request body
app.use(express.json())

// routing
app.use('/portal', routes)

// Listen on Port 8000
app.listen(port, () => console.info(`App listening on port ${port}`));

module.exports = app;