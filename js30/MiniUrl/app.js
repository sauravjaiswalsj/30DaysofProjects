const { Router } = require('express');
const express = require('express');
const app = express();
const route = require('./Routes/route');
const port =3000;

//route
app.use(route.router);
app.listen(port,()=>{
    console.log(`Listening to port: ${port}`);
});
