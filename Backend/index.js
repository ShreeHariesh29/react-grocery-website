const express = require("express");

const app = express();

app.use("/",(req,res)=>{
    res.send("hello Node");
})

app.listen(8000);