const mongoose = require('mongoose');

const manufacturerSchema = new mongoose.Schema({
    id:{type:Number,require:true},
    manufacturerName:{type:String,required:true}
})

const Manifacturer = mongoose.model("manifacturer",manufacturerSchema);

module.exports = Manifacturer;