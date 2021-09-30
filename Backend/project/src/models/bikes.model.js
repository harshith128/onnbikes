const mongoose = require('mongoose');

const bikesSchema = new mongoose.Schema({
    id:{type:Number,require:true},
    name:{type:String,require:true},
    price:{type:Number,require:false},
    manufacturer:{type:mongoose.Schema.Types.ObjectId,ref:"manifacturer",require:true},
    model:{type:mongoose.Schema.Types.ObjectId,ref:"bikeModels",require:true},
    vehicleType:{type:String,require:true},
    quantity:{type:Number,require:false},
    image:{type:String,require:false}
})



const Bikes = mongoose.model("bikes",bikesSchema);

module.exports =  Bikes;