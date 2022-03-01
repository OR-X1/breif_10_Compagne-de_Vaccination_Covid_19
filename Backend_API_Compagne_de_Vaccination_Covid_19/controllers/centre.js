

const Centre = require("../models/centre");


exports.getAllRespos = async (req, res) => {

    Centre.find()
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


exports.createCentre = async (req, res) => {
    
    const {
        nom,
        prenom,
        cin,
        tele,
        email,
        password,
        idregion
    // passwordconfirm
    } = req.body

    

    Centre.find()
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



