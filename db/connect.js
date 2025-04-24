const mongoose = require('mongoose')

const connectdb = (URL) => {
    return mongoose.connect(URL);
}

module.exports = connectdb;