const { data } = require("../db/Users.json");


const getUserData = (req, res) => {
    res.json(data)
}

const getUserByID = (req, res) => {
    const { UUID } = req.params;

    const result = data.filter((ele) => (
        ele.login.uuid === UUID
    ))

    if (result.length >= 1) {
        res.json(result)
    }

    res.status(404).json({
        "message": "UUID doesn't match",
        "status": 404
    })
}

const getUserByQuery = (req, res) => {
    const { gender, age } = req.query;
    let result;

    if (gender && age) {
        result = data.filter((ele) => (
            ele.gender.toLowerCase() === gender.toLowerCase() && Number(ele.dob.age) === Number(age)
        ))

    } else if (gender) {
        result = data.filter((ele) => (ele.gender.toLowerCase() === gender.toLowerCase()));

    } else if (age) {
        result = data.filter((ele) => (Number(ele.dob.age) === Number(age)));

    }

    if (result.length < 1) {
        res.status(404).json({
            "message": "Invalid",
            "status": 404
        })
    }

    res.json(result)
}

module.exports = {
    getUserData,
    getUserByID,
    getUserByQuery
}