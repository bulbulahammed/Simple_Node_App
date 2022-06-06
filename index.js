const express = require("express");
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser')


//  implement Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req,res,next)=>{
    console.log('Time:', Date.now())
    next()
})

app.listen(PORT,()=>{
    console.log(`You are listening at localhost: ${PORT}`);
})