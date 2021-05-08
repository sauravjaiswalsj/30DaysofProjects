const express = require('express');
const router = express.Router();

// route
// app.Method(Path,Handler);
// Method is a http request method
// Path is path on the server
//Handler is the function to be excuted when the route is matched
router.get('/', (req,res)=>{
   // res.send('Url Shortner');
    res.render('index',{ title: 'Url Shortner', message: 'Short any URL'});
});
router.get('/about',(req,res)=>{
    //res.send('About the page');
    res.render('about',{title:'About', message:'About the Page'});
});
router.get('/contact',(req,res)=>{
    res.render('contact',{title:'Contact',message:'Contact the admin'});
    //res.send('Contact me over mail');
});
module.exports = {router};