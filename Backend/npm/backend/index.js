const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, '/public'))); // this gives you full path of public folder
/*
we dont need to mention the path with public folder now, just inside it as we haave 
already defined where to look for static files.
*/
// set ejs as view engine 
app.set('view engine', 'ejs');

app.get('/', (req, res, next)=>{
     res.render('index');

})

app.get('/route1', (req, res, next)=>{
     res.render("index");
})

app.get('/author/:name', (req, res, next)=>{
     res.send('author is '+req.params.name);
     next();
})

app.get('/author/:name/:id', (req, res, next)=>{
     res.send('author is '+req.params.name+" with the id of "+req.params.id);
     next();
})
app.listen(3000, function(){
     console.log('server started on port 3000');
})