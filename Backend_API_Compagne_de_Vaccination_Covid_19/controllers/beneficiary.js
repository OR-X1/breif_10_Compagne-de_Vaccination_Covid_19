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
        nbr_dose,
        effect,
        malade,
        traitement,
    } = req.body

    console.log(cin,
        tel,
        email,
        adress,
        nbr_dose,
        effect,
        malade,
        traitement,);

    if (!malade || !traitement) {
        return res.status(200).send({
            err: "Please add dose information"
        })
    }else if (!cin || !tel || !email || !adress) {
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
                    msg: "You already regestred",
                    res: result.doses[0].nbr_dose
                })
            }else
            //  if(result.doses.nbr_dose == "dose1"){

            // }else
            {
                const beneficiary = new Beneficiary({
                    cin: cin,
                    tel: tel,
                    email: email,
                    adress: adress,
                    doses: [{
                        nbr_dose:nbr_dose,
                        effect:effect
                    }],
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
            } 
            // else if (password_chauffeur !== passwordconfirm) {
            //     return res.status(200).send({
            //         msg: "Password do not match"
            //     })
            // }


          })
          .catch(err => {
            console.log(err);
          });
    }


}



