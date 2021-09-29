const mongoose = require('mongoose');

const bikeModelSchema = new mongoose.Schema({
    id:{type:Number,required:true},
    modelName:{type:String,required:true}
})

const Models = mongoose.model("bikeModels",bikeModelSchema);

module.exports = Models;