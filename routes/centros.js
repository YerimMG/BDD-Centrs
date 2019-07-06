const express = require("express");
const mongoose = require("mongoose");
const Centers = require("../models/centro");

const router = express.Router();

router.get('/', ( req,res,next ) => {
  Centers.find().then(data => res.status(200).json(data))
  .catch(err => console.log(err))
})


module.exports = router;

