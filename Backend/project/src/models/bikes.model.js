const mongoose = require('mongoose');

const bikesSchema = new mongoose.Schema({
    id:{type:Number,require:true},
    name:{type:String,require:true},
    price:{type:Number,require:false},
    manufacturer:{type:String,require:true},
    model:{type:String,require:true},
    vehicleType:{type:String,require:true},
    quantity:{type:Number,require:false},
    image:{type:String,require:false}
})



const Bikes = mongoose.model("bikes",bikesSchema);

module.exports =  Bikes;