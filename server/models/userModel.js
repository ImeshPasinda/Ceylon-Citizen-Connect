const mongoose = require("mongoose");

const userSchema = mongoose.Schema({

    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: { type: String, default: null },
    phone: { type: String, default: null },
    isWaterEbill: { type: Boolean, default: false, },
    isElecEbill: { type: Boolean, default: false },
    watermNo: { type: String, default: null },
    elecmNo: { type: String,default: null },

}, {

    timestamps: true,

});

userSchema.pre('save', function (next) {
    if (this.email) {
        this.email = this.email.toLowerCase();
    }
    next();
});

const User = mongoose.model('users', userSchema)

module.exports = User