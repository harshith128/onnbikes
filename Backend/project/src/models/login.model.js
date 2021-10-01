const mongoose = require("mongoose");

const loginUserSchema = new mongoose.Schema({
    email:{type:String, required:true},
    password:{type:String, required:true}
})

const loginUser = mongoose.model("User", loginUserSchema, "users");

module.exports = loginUser;