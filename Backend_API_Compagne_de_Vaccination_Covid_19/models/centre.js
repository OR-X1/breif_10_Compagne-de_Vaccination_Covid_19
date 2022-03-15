const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const centreSchema = new Schema({
  
  centre: {
    type: String,
    default: null
  },
  ville_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ville"
  },
}, { timestamps: true });

const centre = mongoose.model('centre', centreSchema);
module.exports = centre;