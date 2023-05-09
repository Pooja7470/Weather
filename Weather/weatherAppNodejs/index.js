const http = require("http");
const fs = require("fs");
var requests = require("requests");
const homeFile = fs.readFileSync("home.html" , "utf-8");
 const server = http.createServer((req, res) => {
    if(req.url == "/"){
        requests("https://api.openweathermap.org/data/2.5/weather?q=pune&appid=3e46fd6b0e779950bcd99cf58c529d42" )
        .on("data" ,  (chunk)=>{
            console.log(chunk);
        })
        .on("end",  (err)=>{
            if (err) return console.log("connection closed due to error" , err);
            console.log("end");
        });

    }

 });
 server.listen(8000, "127.0.1")

 
 