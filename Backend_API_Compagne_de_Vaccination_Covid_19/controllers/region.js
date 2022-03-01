const Region = require("../models/region");

exports.getAllRegions = async (req, res) => {

    Region.find()
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