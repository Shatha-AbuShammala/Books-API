const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true , 'the title is required'],
        trim : true,
        maxlength : [100, 'the title can not be more than 100 chatacters!']
    },
    author:{
        type :String,
        required:[true , 'the author is required'],
        trim : true,
        maxlength : [50, 'the name can not be more than 50 chatacters!']
    },
    available:{
        type:Boolean,
        default: true,
    }
});

module.exports = mongoose.model('Book',BookSchema)