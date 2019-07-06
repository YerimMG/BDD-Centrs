const express = require('express'); //Requierp Express
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const registroCentros = require("./routes/resgistroCentros");
const newsFeed = require("./routes/centros")

mongoose.connect("mongodb://localhost:27017/centro",{ useNewUrlParser: true })
  .then(x => {console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch(err => {console.error("Error connecting to mongo", err);});

  const app = express();

// Middleware Setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//setings 
app.set('PORT', 3000);

//Routes
app.use("/", newsFeed);
app.use("/registroCentros", registroCentros);




app.listen(app.get("PORT"), () => {  //Donde lo estas ejecutando, donde lo escuchas?
  console.log(`server on PORT: ${app.get("PORT")}`);
});



