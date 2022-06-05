const express = require("express");
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser')


//  implement Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Home Route
app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/index.html");
});

//Circle Route GET
app.get('/circle',(req,res)=>{
    res.sendFile(__dirname + "/circle.html");
});

//Circle Route POST
app.post('/circle',(req,res)=>{
    const radius = req.body.radius;
    const circle = Math.PI * radius * radius;
    res.send(`your circle area is:${circle}`);
});



// Triangle Route
app.get('/triangle',(req,res)=>{
    res.sendFile(__dirname + "/triangle.html");
});

//Circle Route POST
app.post('/triangle',(req,res)=>{
    // const base = req.body.base;
    // const height = req.body.height;
    const {base,height} = req.body;
    const triangle = 0.5 * base * height;
    res.send(`your Triangle area is:${triangle}`);
});

app.listen(PORT,()=>{
    console.log(`You are listening at localhost: ${PORT}`);
})