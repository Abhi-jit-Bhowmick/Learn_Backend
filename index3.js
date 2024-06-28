const express = require("express");
const app = express();
const PORT = 8084;
const currenciesRoutes = require("./Routes/Currencies.routes")
const userRoutes = require("./Routes/Users.routes")





app.use("/currenciesone", currenciesRoutes)


app.use("/users", userRoutes)

app.listen(PORT, () => {
    console.log("App Listening at port::", PORT)
})