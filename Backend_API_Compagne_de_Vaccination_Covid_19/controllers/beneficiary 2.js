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
            //   console.log(result);
            if (result) {

                if(result.doses[2].nbr_dose === "dose3"){
                    return res.status(200).send({
                        msg: "You already take dose 3",
                    })
                }else if(result.doses[1].nbr_dose === "dose2"){
                    return res.status(200).send({
                        msg: "You already take dose 2",
                    })
                }else if(result.doses[0].nbr_dose === "dose1"){
                    return res.status(200).send({
                        msg: "You already take dose 3",
                    })
                }
            }else
             if(nbr_dose == "dose1"){
                 console.log(nbr_dose);

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
            }else if(nbr_dose == "dose2"){
                    const Benefi =  Beneficiary.updateOne(
                        { _id:id_chauffeur },
                        {$push:{doses: [{
                            nbr_dose:nbr_dose,
                            effect:effect
                        }],}}
                      );
                    
            }else if(nbr_dose == "dose3")
            {
                const Benefi =  Beneficiary.updateOne(
                    { _id:id_chauffeur },
                    {$push:{doses: [{
                        nbr_dose:nbr_dose,
                        effect:effect
                    }],}}
                  );
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

