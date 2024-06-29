const express = require("express");
const app = express();
require("dotenv").config();

const PORT = 8084;
const currenciesRoutes = require("./Routes/Currencies.routes")
const userRoutes = require("./Routes/Users.routes");
const verifyAuth = require("./middlewares/verifyAuth.middleware");
const { validateSearchQuery } = require("./middlewares/Validators/User.validetor");




app.use(verifyAuth)
app.use("/currenciesone", currenciesRoutes)


app.use("/users", validateSearchQuery, userRoutes)

app.listen(PORT, () => {
    console.log("App Listening at port::", PORT)
})