import express from "express"; //this syntax is for module js , not common js
                /*it will throw error initially -
                to resolve is -in package.json, after name add- "type":"module"
                it tell browser/ engine to assemble js code as module and not common js */
const app = express();

//home route
// app.get('/',(req,res)=>{
//     res.send("server ready")
// });

//get a list of 5 jokes
app.get('/api/jokes',(req,res)=>{
    const jokes =[
        {
            id:1,
            title:'a joke',
            content: 'this is a joke'
        },
        {
            id:2,
            title:'another joke',
            content: 'this is another joke'
        },        
        {
            id:3,
            title:'another joke',
            content: 'this is another joke'
        },
        {
            id:4,
            title:'another joke',
            content: 'this is another joke'
        },
    ];   // this is an array of objects
    res.send(jokes);
});      // now this is our simple api to send jokes

const port = process.env.PORT || 3000; //if we have process.env file then
                                        //take port from there else use 3000

/*in production port is always taken from env folder, without it app will not run */
app.listen(port,()=>{
    console.log(`serve at http://localhost:${port}`);
});
