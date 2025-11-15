const express = require("express");
const app = express();
app.listen(8000);
app.get("/",(req,res)=>{
     res.send("this is home page");
})
app.get("/path1",(req,res)=>{
     res.send("this is a path ");
})
