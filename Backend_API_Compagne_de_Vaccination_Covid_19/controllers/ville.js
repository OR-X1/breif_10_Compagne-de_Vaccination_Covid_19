const Ville = require("../models/ville");


exports.getAllCities = async (req, res) => {

    Ville.find()
          .then(result => {
            return res.status(200).json({
                msg: "fetch all data",
                result
            })
          })
          .catch(err => {
            console.log(err);
          });
}