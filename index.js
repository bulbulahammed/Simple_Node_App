const express = require("express");
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser')


//  implement Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// To use Static file in express app
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.listen(PORT,()=>{
    console.log(`You are listening at localhost: ${PORT}`);
})