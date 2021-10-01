const mongoose = require("mongoose");

const check_out = mongoose.Schema({
    userid:{type:mongoose.Schema.Types.ObjectId,required:true},
    address:{type:mongoose.Schema.Types.ObjectId,ref:"pick",require:true},
    startDate:{type:String,require:true},
    endDate:{type:String,require:true},
    plan:{type:String,require:true},
    bookedBike:{type:mongoose.Schema.Types.ObjectId,ref:"bikes",require:true}
})

const Check_out = mongoose.model("check_out",check_out);

module.exports = Check_out;