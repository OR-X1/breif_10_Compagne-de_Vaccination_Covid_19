

const Centre = require("../models/centre");


exports.getAllCenters = async (req, res) => {

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


exports.createCenter = async (req, res) => {
    
    const {
        center,
        idville,
        
    } = req.body

    let centre = new Centre({
      centre : center,
      ville_id : idville
    })

    centre.save()
  .then((data)=> {
    console.log(data);
   })
  .catch((err)=> {
    console.log(err);
  })
    


    

    
}

exports.getCenter = async (req, res) => {

  const {
      id,
  } = req.params

  Centre.findOne({
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



