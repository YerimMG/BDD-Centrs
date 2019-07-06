//Traer funcionalidades de la libreria.
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const center = new Schema({
  title:       String,
  description: String,
  location:    String,
  address:     String,
  status:      Number,
  madeBy:      String,
  type:        String,
  victuals:    [String],
  phoneNumber: Number,
  flag:        Number,

});

const CenterModel = mongoose.model("Center", center);
module.exports = CenterModel;
