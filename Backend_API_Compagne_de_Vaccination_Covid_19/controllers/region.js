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



exports.getRegion = async (req, res) => {

  const {
      id,
  } = req.params

  Region.findOne({
      _id: id
        })
  
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



exports.createRegion = async (req, res) => {

  const {
    regionn
    // passwordconfirm
} = req.body

   let region = new Region({
     region : regionn
   })
   

   region.save()
  .then((data)=> {
    console.log(data);
   })
  .catch((err)=> {
    console.log(err);
  })
}





