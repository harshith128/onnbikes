const mongoose = require("mongoose");

const pickSchema = new mongoose.Schema({
    city:{type:mongoose.Schema.Types.ObjectId,ref:'city',required:true},
    address:{type:String,required:true},
    landmark:{type:String,required:true},
    station_time:{type:String,required:true},
    availability:{type:Number,required:true}
})

const Pick = mongoose.model("pick",pickSchema);

module.exports = Pick;