import express from 'express';
const app = express();

app.get('/', function(req, res){
     res.send('hello world');
})

//creating routes
app.get('/route1', (req,res)=>{
     res.send('this is route one');
})

app.get('/route2', (req,res)=>{
     res.send('route 2');
})

app.get('/route3', (req,res)=>{
     res.send('route 3 is this fuck yuo');
})

console.dir()
app.listen(3000);



