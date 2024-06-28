
const http = require("http");

const port = 8084;
const currenciesData = require("./db/Currencies.json")

const server = http.createServer((req, res) => {

    const URL = req.url;
    const splitURL = URL.split("/")
    const symbol = splitURL[splitURL.length - 1]


    switch (URL) {

        case "/": {
            res.write(`<h1>Currencyes Database </h1>`);
            res.end();
            break;
        }

        case "/currencies": {
            res.writeHead(200, { "content-type": "application/ json" });
            res.write(JSON.stringify(currenciesData.data));
            res.end();
            break;
        }

        case `/currencies/${symbol}`: {

            const filteredDAta = currenciesData.data.find((element) =>
                element.id.toLowerCase() === symbol.toLowerCase()
            )
            console.log("FILTERED DATA ::", filteredDAta)

            if (!filteredDAta) {

                res.writeHead(404, { "content-type": "application/ html" });
                res.write(`<h1>Incorrect symbol!! </h1>`)
                res.end()

            } else {

                res.writeHead(200, { "content-type": "application / json" });
                res.write(JSON.stringify(filteredDAta));
                res.end()

            }
            break;
        }


        default: {
            res.writeHead(404, { "content-type": "application/ html" });
            res.write(`<h1>Invalied URL!! </h1>`)
            res.end()
        }


    }

})





server.listen(port, () => {
    console.log(`Server Listening at PORT....:${port}`)
})