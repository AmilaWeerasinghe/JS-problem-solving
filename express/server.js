const express = require('express');

const app = express();
app.set('view engine','ejs'); //enable view engine


app.get('/',(req,res)=>{
    res.render('index', {'text': "World"})
})

app.listen(3000);