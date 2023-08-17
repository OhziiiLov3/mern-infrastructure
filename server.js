// Express
const express =  require('express');
const path = require('path');
const logger = require('morgan');
require('dotenv').config();
require('./config/database');


const app = express();
app.use(logger('dev'));
app.use(express.json());


// app.use(favicon(path.join(__dirname, 'dist', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'dist')));
// Middleware to verify token and assign user object of payload to req.user.
// Be sure to mount before routes
app.use(require('./config/checkToken'));

const PORT = process.env.PORT || 3001;



// Put API routes here, before the "catch all" route
app.use('/api/users',require('./routes/api/users'));




// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', (req, res)=>{
 res.sendFile(path.join(__dirname, 'dist', 'index.html'));
})



app.listen(PORT, ()=>{
    console.log(`Express app running on port ${PORT}`);
})