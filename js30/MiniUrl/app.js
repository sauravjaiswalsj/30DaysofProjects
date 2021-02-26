const { Router } = require('express');
const express = require('express');
const app = express();
const pug = require('pug');
const route = require('./Routes/route');
const port =3000;

//set the view engine
app.set('view engine','pug');
// set the path
app.set('views','./views');

//route
app.use(route.router);
app.listen(port,()=>{
    console.log(`Listening to port: ${port}`);
});
