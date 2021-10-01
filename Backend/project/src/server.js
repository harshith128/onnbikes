const express = require('express');

const connect = require("./config/db.");
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());


const bikeController = require("./controllers/bikes.controllers");
const manifacturerController = require("./controllers/manufacturer.controller");
const bikeModelcontroller = require("./controllers/bikeModel.controller");
const citysController = require('./controllers/city.controller');
const addressController = require('./controllers/address.controller');
const check_outController = require("./controllers/check_out.controller");

const signupControllers = require("./controllers/signup.controllers");
const loginControllers = require("./controllers/login.controllers");

app.use("/signup/users", signupControllers);
app.use("/login/users/", loginControllers);


app.use("/bikes",bikeController);
app.use("/manufacturer",manifacturerController);
app.use("/models",bikeModelcontroller);
app.use("/city",citysController);
app.use("/address",addressController);
app.use("/checkout",check_outController);

//-----------------------Server Port ------------------//

app.listen(2323,async function(){
    await connect();
    console.log("Listening to port 2323")
})