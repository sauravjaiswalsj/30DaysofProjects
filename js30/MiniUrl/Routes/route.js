const express = require('express');
const router = express.Router();

// route
// app.Method(Path,Handler);
// Method is a http request method
// Path is path on the server
//Handler is the function to be excuted when the route is matched
router.get('/', (req,res)=>{
    console.log('Hllo')
   // res.send('Url Shortner');
    res.render('index',{titel:"Url Shortner",message:"Short any URL"});
});
router.get('/about',(req,res)=>{
    res.send('About the page');
});
router.get('/contact',(req,res)=>{
    console.log('Contact me over mail');
    res.send('Contact me over mail');
});
module.exports = {router};