const express = require('express');
const path = require('path');

const app = express();

app.set('view engine','ejs');
app.set('views','views');

app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res,next) => res.redirect('/home'));

app.get('/home',(req,res,next)=>{
    res.render('home',{type:'home'});
});
app.get('/about',(req,res,next)=>{
    res.render('home',{type:'about'});
});
app.get('/page1',(req,res,next)=>{
    res.render('home',{type:'page1'});
});

app.listen(3000,()=>{
    console.log("serving on 3000");
});