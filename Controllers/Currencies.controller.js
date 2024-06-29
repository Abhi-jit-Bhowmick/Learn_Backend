const { data } = require("../db/Currencies1.json")

// Set the password
// const PASSWORD = "LetMeIn"
const PASSWORD = process.env.ROUTE_PASSWORD


const getCurrenciesOneHeading = (req, res) => {
    res.send("<h1>Currencies One Data</h1>")
}


// Api Password protection
const verifyAuth = (req) => {
    const { authorization } = req.headers;
    console.log("PASSWORD::", PASSWORD);
    // console.log(authorization)
    if (!authorization) {
        return false
    } else if (authorization !== PASSWORD) {
        return false
    }

    return true

}


const getCurrenciesOneData = (req, res) => {

    if (!verifyAuth(req)) {
        res.status(403).json({ "message": "Unauthorized request" })
    }

    const { min_value } = req.query;

    if (min_value) {

        const filteredDataByValue = data.filter(
            (ele) => Number(ele.min_size) === Number(min_value)
        );

        if (filteredDataByValue.length < 1) {
            res.status(404).json({
                "message": "Not Found",
                "status": 404,
                "message2": "min_value doesn't meet"

            })
        } else {

            res.json(filteredDataByValue)
        }


    } else {

        res.json(data)

    }

}


const getCurrenciesOneDataBySymbol = (req, res) => {
    const { symbol } = req.params;

    const dataBySymbol = data.find((ele) =>
        ele.id.toLowerCase() === symbol.toLowerCase()
    )

    if (!dataBySymbol) {
        res.status(404).json({
            "message": "Invalid Symbol",
            "status": 404,
            "symbol": symbol,
            "Name": "Abhijit"
        })
    }

    res.json(dataBySymbol)
}


module.exports = {
    getCurrenciesOneHeading,
    getCurrenciesOneData,
    getCurrenciesOneDataBySymbol
}