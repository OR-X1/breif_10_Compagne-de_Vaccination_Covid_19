const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
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
  
}, { timestamps: true });

const Admin = mongoose.model('admin', adminSchema);
module.exports = Admin;