const { data } = require("../db/Currencies1.json")


const getCurrenciesOneHeading = (req, res) => {
    res.send("<h1>Currencies One Data</h1>")
}


const getCurrenciesOneData = (req, res) => {

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