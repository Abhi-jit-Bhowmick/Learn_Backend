

const router = require("express").Router();

const {
    getCurrenciesOneHeading,
    getCurrenciesOneData,
    getCurrenciesOneDataBySymbol

} = require("../Controllers/Currencies.controller")



router.get("/title", getCurrenciesOneHeading)
router.get("/", getCurrenciesOneData)


router.get("/:symbol", getCurrenciesOneDataBySymbol)


module.exports = router