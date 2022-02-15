const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const doseSchema = new Schema({
  nbr_dose: {
    type: String,
    required: true
  },
  effect: {
    type: String,
    default: null
  },
}, { timestamps: true });

const dose = mongoose.model('dose', doseSchema);
module.exports = dose;
