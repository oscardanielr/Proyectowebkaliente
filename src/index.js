const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require ('path');
const flash = require ('connect-flash');
const MySQLStore = require('express-mysql-session');
const session = require('express-session');
const { database } = require('./keys');
const passport = require ('passport');

const express_myconnections = require ('express-myconnection');

//inicializaciones
const app = express();
require('./lib/passport');

//settings
app.set('port', process.env.PORT || 5000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs' , exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}))
app.set('view engine', '.hbs');
//middlewares
app.use (session ({
    secret:'danielrojas',
    resave: false,
    saveUninitialized: false,
    store: new MySQLStore(database)

}))
app.use(flash());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());


//Global Variables
app.use((req, res, next)=>{
    app.locals.success = req.flash ('success');
    app.locals.success = req.flash ('message');
    app.locals.user = req.user;
    next();
});
//Routes
app.use(require('./routes'));
app.use(require('./routes/authentication'));
app.use('/route', require('./routes/app'));
app.use('/route', require('./routes/index'));


//public
app.use(express.static(path.join(__dirname, 'public')));

//Satarting the server 
app.listen(app.get('port'), ()=>{
    console.log('Server on port', app.get('port'));
} );