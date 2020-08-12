const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cookieParser = require('cookie-parser');
const path = require('path');
const session = require('express-session');
const passport = require('passport');
const passportConfig = require('./config/passport')(passport);
const flash = require('express-flash-messages');
const app = express();

const { getHomePage } = require('./routes/index');
const { handleLogout, postLogin, getLogin, getFacebookLogin, handleFacebookLogin } = require('./routes/login');
const { getRegister, submitRegister } = require('./routes/register');

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('connected to database');
});
global.db = db;

app.set('port', process.env.PORT);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true  }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'keyboard cat',
    saveUninitialized: true,
    resave: true
  }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.get('/', getHomePage);

app.post('/login', postLogin);
app.get('/login', getLogin);

app.get('/register', getRegister);
app.post('/register', submitRegister);

app.get('/auth/facebook', getFacebookLogin);
app.get('/auth/facebook/callback', handleFacebookLogin);
app.get('/logout', handleLogout);

app.listen(process.env.PORT, () => {
    console.log(`server running on port: ${process.env.PORT}`);
});
