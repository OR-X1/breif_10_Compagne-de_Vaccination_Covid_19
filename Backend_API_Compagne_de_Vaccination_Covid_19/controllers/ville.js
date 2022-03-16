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


exports.getAllCitiesInRegion = async (req, res) => {

  const {
    id,
} = req.params

  console.log("id ree : ".id);
  Ville.find({region_id : id})
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




exports.createCity = async (req, res) => {

  const {
    ville,
    idregion
    
} = req.body

   let city = new Ville({
     ville : ville,
     region_id : idregion
   })
   

   city.save()
  .then((data)=> {
    console.log(data);
   })
  .catch((err)=> {
    console.log(err);
  })
}




exports.getCity = async (req, res) => {

  const {
      id,
  } = req.params

  console.log(id);
  Ville.findOne({
    _id: id
        })
  // Manager.find()
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


exports.test = async (req, res) => {

  const {
      id,
  } = req.params

  console.log(id);
  Ville.find({
    region_id: id
        })
  // Manager.find()
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