const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let Create = new Schema({

    fullname: {
        type: String,
    },
    description: {
        type: String,
    },
    duration: {
        type: String,
    },
    price: {
        type: String,
    },
    date: {
        type: String,
    },

})
module.exports = mongoose.model('Create', Create);