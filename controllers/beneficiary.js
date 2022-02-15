const Beneficiary = require("../models/beneficiary");
const dose = require("../models/dose");

const emailsend = require('../services/email/email')



exports.index = (req, res) => {
    
    console.log("hhhh");

    return res.status(200).json({
        msg: "fetch all data",
        
    })
    

}


exports.store = (req, res) => {
    
    // console.log("hhhh");

    // return res.status(200).json({
    //     msg: "fetch all data",
        
    // })

    const {
        cin,
        tel,
        email,
        adress,
        // doses,
        malade,
        traitement,
    } = req.body

    console.log(cin,
        tel,
        email,
        adress,
        // doses,
        malade,
        traitement,);

    if (!cin || !tel || !email || !adress || !malade || !traitement) {
        return res.status(200).send({
            err: "Please add your information"
        })
    }else{

        Beneficiary.findOne({
            cin: cin,
          })
          .then(result => {
              console.log(result);
            if (result) {
                return res.status(200).send({
                    msg: "You already regestred"
                })
            } 
            // else if (password_chauffeur !== passwordconfirm) {
            //     return res.status(200).send({
            //         msg: "Password do not match"
            //     })
            // }

            const beneficiary = new Beneficiary({
                cin: cin,
                tel: tel,
                email: email,
                adress: adress,
                // doses,
                malade: malade,
                traitement: traitement,
              })
            
              beneficiary.save()
                .then(result => {

                    let subj = "Your take dose";
                    let msg = ` email : ${email}
                        `;
                    emailsend.mail(email, subj, msg)

                    console.log(result);
                    return res.status(200).json({
                        msg: "Add manager",
                        result
                    })
                  })
                .catch(err => {
                  console.log(err);
                });


          })
          .catch(err => {
            console.log(err);
          });
    }


}

