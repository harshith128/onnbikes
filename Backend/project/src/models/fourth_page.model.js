const mongoose = require("mongoose");

const fourthSchema = new mongoose.Schema({
    user_id:{type:String,required:true},
    name:{type:String,required:true},
    date1:{type:String,required:true},
    date2:{type:String,required:true},
    price:{type:Number,required:true},
    tariff:{type:Number,required:true},
})

const Fourth = mongoose.model("fourth",fourthSchema);

module.exports = Fourth;