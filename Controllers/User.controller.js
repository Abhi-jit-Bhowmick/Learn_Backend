const { getQuerryErrors } = require("../Validators/User.validetor");
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

    // if (!age && !gender) {
    //     res.status(422).json({
    //         message: "Missing Search Parameters, search using age and/or gender",
    //     });
    // }

    // if (age) {
    //     if (!Number(age)) {
    //         return res
    //             .status(422)
    //             .json({ message: "Age parameter should be a number" });
    //     }
    //     if (age >= 100 || age < 0) {
    //         return res
    //             .status(422)
    //             .json({
    //                 message: "Age out of bounds. It should be a number between 0 and 100",
    //             });
    //     }
    // }


    // if (gender) {
    //     if (!["female", "male"].includes(gender)) {
    //         return res
    //             .status(422)
    //             .json({ message: "Gender to search can either be 'male' or 'female'" });
    //     }
    // }


    const error = getQuerryErrors({ age, gender });

    if (error) {
        res.status(422).json(error)
    }

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