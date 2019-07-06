const express =  require("express");
const mongoose = require("mongoose");
const Centers =  require("../models/centro");


const router = express.Router();

// router.get('/', ( req,res,next ) => {
//   res.send('Este si es registrocentros solito')
// })

router.post("/", (req, res, next) => {
  let data = req.body;
  // console.log( data )
  Centers.create( data )
  .then( respuesta => {
  // console.log( respuesta );
    res.json({ respuesta })
  })
});


module.exports = router;