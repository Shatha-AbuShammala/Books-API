const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:[true ,'email is reuired'],
        unique: true,
        trim: true, 
    },
    password:{
        type:String,
        required:true,
        minlength: 6, 
    }
},{timestamps:true});

module.exports = mongoose.model('User',userSchema);