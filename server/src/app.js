const exppress = require('express');
const config = require('./config');
const morgan = require('morgan');
const error = require('./middlewares/errors');
const cors = require('cors');

const app = exppress();

// cors
app.use(cors());

// midelewares
app.use(exppress.json());
app.use(exppress.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Set the port
app.set('port', config.app.port);

// Set routes
app.use('/api/users', require('./modulos/users/routes'));
app.use('/api/auth', require('./modulos/auth/routes'));
app.use(error)

module.exports = app;