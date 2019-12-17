const express = require('express');
const app =  express();
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
require("dotenv").config({path:'./config/Keys.env'});
const dbUrl =  `mongodb+srv://${process.env.user}:${process.env.pass}@falconbnb-ppoyi.gcp.mongodb.net/Butterfly?retryWrites=true&w=majority`;
const session = require('express-session');
const mainRouter = require('./routes/main')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));


app.use (
    session ({
        secret:'key',
        saveUninitialized:false,
        resave:false,
        rolling:true,
        cookie :{maxAge :900000}
    })
);

app.use((req,res,next)=>
{
    res.locals.user = req.session.userInfo
    next();
})
app.use('/', mainRouter)
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');




mongoose.connect(dbUrl, {useUnifiedTopology:true, useNewUrlParser:true})
    .then(()=>
    {
        console.log('DB connected');
    })
    .catch(err=>console.log(`DB connection Err : ${err}`))

const port = process.env.PORT || 5000;
app.listen(port,()=>
{
    console.log(`Server Connected listening on port ${port}`);
})