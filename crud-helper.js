// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Plant = require('./models/plant');



// Local variables will come in handy
let u, p;

