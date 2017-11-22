const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const port =3000 ;
const app = express();
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));



app.post("/",function(req,res){
    console.log("form redirected")
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    console.log(req.body);
    var userName =req.body.user.name;
    var userPassword =req.body.user.password;
    if(userPassword=="mongo"){
    res.send("Welcome! " + userName+ ",you have been logged in sucessfully ");
    console.log("testing sucessful");}else{
        res.send("invalid login details ");
        console.log("test failed");
    }
});
const server = http.createServer(app);
server.listen(port,function(){console.log("server started running")} );