const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const Respo_region = require("../models/respo_region");


const emailsend = require('../controllers/email')

// all responsable
exports.getAllRespos = async (req, res) => {

    Respo_region.find()
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

//  login
exports.login = async (req, res) => {
    try {
        const {
            email,
            password
        } = req.body
        console.log(req.body)
        if (!email || !password) {
            return res.status(200).send({
                msg: "Please add an email and password"
            })
        }

        const login_respo = await Respo_region.findOne({
            email: email,
            // password: password
          })
          

            if (!login_respo || !(await bcrypt.compareSync(password, login_respo.password))) {
                return res.status(200).send({
                    err: 'email or password is incorrect',
                })
            } else {
                const id = login_respo._id;
                const nom = login_respo.nom;
                const prenom = login_respo.prenom;
                const email = login_respo.email;
                const role = "respo_region";
                
                
                const token = jwt.sign({
                    id,
                    nom,
                    prenom,
                    email,
                    role
                }, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRE_IN
                })
                console.log(token);
                return res.status(200).send({
                    msg: "lOGIN SUCCES",
                    token: token,
                    data_login_respo: login_respo,
                })
            }
    } catch (error) {
        console.log(error)
    }
}

//  creation of resposable region
exports.createRespo = (req, res) => {

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


    Respo_region.findOne({
        email: email
          })
          .then(result => {
            console.log(result);
          if (result) {
              return res.status(200).send({
                  msg: "email used already"
              })
          }
           /* else if (password !== passwordconfirm) {
                return res.status(200).send({
                    msg: "Password do not match"
                })
            } */
            let hashedpassword =  bcrypt.hashSync(password, 10)
          
        //   hashedpassword =  password
          console.log(hashedpassword)

          const respo_region = new Respo_region({
            nom  : nom,
            prenom :prenom,
            cin : cin,
            tele :tele,
            email : email,
            password : hashedpassword,
            region_id : idregion
   
            })
          
            respo_region.save()
              .then(result => {

                  let subj = "Your Login Info";
                  let msg = ` email : ${email}
                              password : ${password}
                      `;
                  emailsend.mail(email, subj, msg)


                  console.log(result);
                  return res.status(200).json({
                      msg: "Add responsable region",
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



