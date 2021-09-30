const express = require('express');

const connect = require("./config/db.");

const app = express();

app.use(express.json());


const bikeController = require("./controllers/bikes.controllers");
const manifacturerController = require("./controllers/manufacturer.controller");
const bikeModelcontroller = require("./controllers/bikeModel.controller");
const citysController = require('./controllers/city.controller');
const addressController = require('./controllers/address.controller');


app.use("/bikes",bikeController);
app.use("/manufacturer",manifacturerController);
app.use("/models",bikeModelcontroller);
app.use("/city",citysController);
app.use("/address",addressController);


//-----------------------Server Port ------------------//

app.listen(2323,async function(){
    await connect();
    console.log("Listening to port 2323")
})