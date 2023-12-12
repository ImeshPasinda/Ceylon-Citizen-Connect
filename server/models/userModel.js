const mongoose = require("mongoose");

const userSchema = mongoose.Schema({

    name: { type: String, require },
    email: { type: String, require },
    password: { type: String, require },
    profilepicture:{ type: String, require,default: 'empty' },
    isVerified: { type: Boolean, require, default: false },


}, {

    timestamps: true,

})

const User = mongoose.model('users', userSchema)

module.exports = User