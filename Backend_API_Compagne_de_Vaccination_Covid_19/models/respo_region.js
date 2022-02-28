const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const respo_regionSchema = new Schema({
  nom: {
    type: String,
    required: true
  },
  prenom: {
    type: String,
    default: null
  },
  cin: {
    type: String,
    default: null
  },
  tele: {
    type: Number,
    default: null
  },
  email: {
    type: String,
    default: null
  },
  password: {
    type: String,
    default: null
  },
  region_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "region"
  },
}, { timestamps: true });

const respo_region = mongoose.model('respo_region', respo_regionSchema);
module.exports = respo_region;