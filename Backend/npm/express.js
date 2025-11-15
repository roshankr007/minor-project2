const express = require('express')

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(function (req, res, next){
     console.log(' middleware chala abhi ');
     next();
})

app.use(function (req, res, next){
     console.log('dusra  middleware chala abhi ');
     next();
})

app.use('/users/:id', (req,res,next)=>{
     console.log('Request URL:', req.originalUrl); // e.g. /user/7/profile
     console.log('req.params.id =', req.params.id); // '7
     next();
}, (req,res,next)=>{
     console.log('req type '+ req.method);
     next();
})

app.get('/', (req, res)=>{
     console.log('home page ');
     res.send('hi');
})

app.get('/roshan', (req, res, next)=>{
     console.log('this is new ');
     res.send();
})

app.get('/users/:id', (req, res, next)=>{
     console.log('id in params is :'+ req.params.id);
     console.log('request url '+req.baseUrl);
next('route');
     res.send('you have reached a page with user route');
})


/*
middleware - agar aap request ko routes par jaane ke pehle rokte ho aur kuch action 
ya task karte ho then it is called middleware

note - To skip the rest of the middleware functions from a router middleware stack,
 call next('route') to pass control to the next route.

 next('route') only works with the route-level middleware functions like app.get () and not with application level 
 middleware functions like app.use();

 note - route handler will match with exact route but whereas app.use() middleware function will match the
 starting of the route only hence /app/users can match with app/users/profile

*/
app.listen(3000);