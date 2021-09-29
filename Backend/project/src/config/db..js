const mongoose = require('mongoose');

module.exports = ()=>{
    return mongoose.connect("mongodb+srv://Pratikj:GOsrYgMAqvvyHQ3l@cluster0.fpqmj.mongodb.net/OnnBikes?retryWrites=true&w=majority");
}






//mongodb://127.0.0.1:27017/testbikes