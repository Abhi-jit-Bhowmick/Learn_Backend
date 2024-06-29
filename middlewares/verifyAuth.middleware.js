

const verifyAuth = (req, res, next) => {
    const { authorization } = req.headers;
    // console.log("authorization from middlewares::", authorization)

    if (!authorization) {
        res.status(403).json({ "message": "Unauthorized Request" })
    }

    if (authorization !== process.env.ROUTE_PASSWORD) {
        res.status(403).json({ "message": "Unauthorized Request" })
    };

    next()

}

module.exports = verifyAuth