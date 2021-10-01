const mongoose = require("mongoose");


const newUserSchema = new mongoose.Schema({
    first_name:{type:String, require:true},
    last_name:{type:String, required:true},
    email:{type:String, required:true},
    mobNum:{type:"number", required:true},
    password:{type:String, required:true}
})

const NewUser = mongoose.model("Registered", newUserSchema, "users");

module.exports = NewUser;