const url = require ("url");
const http = require ("http");
const fs = require ("fs");

http.createServer((req,resp) =>{
    //request
    const path = req.url
    if(path == "/about"){
        console.log("about page");
        resp.writeHead(200, {
            "content-type" : "text/html",
        });

        const fileContent = fs.readFileSync("./views/about.html");
        resp.write(fileContent);
        resp.end;

    }
    else if(path == "/"){
        console.log("home page");
        resp.writeHead(200, {
            "content-type" : "text/html",
        });

        const fileContent = fs.readFileSync("./views/home.html");
        resp.write(fileContent);
        resp.end;

    }
    else if(path == "/services"){
        console.log("services");
        resp.writeHead(200, {
            "content-type" : "text/html",
        });

        const fileContent = fs.readFileSync("./views/services.html");
        resp.write(fileContent);
        resp.end;

    }


}).listen(8080);