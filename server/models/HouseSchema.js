const mongoose = require("mongoose");

const HouseSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true,
    },
    users:[{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
})

const House = mongoose.model('House', houseSchema);
module.exports = House;