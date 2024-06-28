const router = require("express").Router();
const {
    getUserData,
    getUserByID,
    getUserByQuery
} = require("../Controllers/User.controller")



router.get("/", getUserData)

router.get("/search", getUserByQuery)

router.get("/:UUID", getUserByID)


module.exports = router