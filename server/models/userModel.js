const mongoose = require("mongoose");

const userSchema = mongoose.Schema({

    name: { type: String, require },
    email: { type: String, require },
    password: { type: String, require },
    address: { type: String, require, default: null },
    phone: { type: String, require, default: null },
    isWaterEbill: { type: Boolean, default: false },
    isElecEbill: { type: Boolean, default: false },
    watermNo: { type: String, required: true, unique: true },
    elecmNo: { type: String, required: true, unique: true }

}, {

    timestamps: true,

})

const User = mongoose.model('users', userSchema)

module.exports = User