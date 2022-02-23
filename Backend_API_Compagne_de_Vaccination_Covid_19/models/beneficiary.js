const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const beneficiarySchema = new Schema({
  cin: {
    type: String,
    required: true
  },
  tel: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  adress: {
    type: String,
    required: true
  },
  doses: [
      {nbr_dose: {
        type: String,
      },
      effect: {
        type: String,
        default: null
      }
    }
  ],
  // doses: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "dose",
  //   },
  // ],
  malade: {
    type: String,
    required: true
  },
  traitement: {
    type: String,
    required: true
  },
}, { timestamps: true });

const beneficiary = mongoose.model('beneficiary', beneficiarySchema);
module.exports = beneficiary;
