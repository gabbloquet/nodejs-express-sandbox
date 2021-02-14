const express = require('express');
const app = express();

// Bootstrap database configuration
require('./config/db')();

// Define controllers / routes
require('./domain/merchant/controllers')(app);

// Bootstrap express configuration
require('./config/express')(app);

// Bootstrap server configuration
require('./config/server')(app);
