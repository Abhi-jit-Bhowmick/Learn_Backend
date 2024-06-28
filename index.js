const http = require("http");



const server = http.createServer((req, res) => {

    console.log("Hello from server...")

    const serverInfo = {
        serverName: "CodeSandBox Server",
        version: "1.0.0",
        currentDate: new Date().toDateString(),
        currentTime: new Date().toTimeString(),
    };

    res.writeHead(200, { "content-type": "application/json" })
    res.write(JSON.stringify(serverInfo));
    res.end();


});


server.listen(8082, () => {
    console.log("listening on port ::8082")
})