const e = require('connect-flash');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passwordLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
});

userSchema.plugin(passwordLocalMongoose);

module.exports = mongoose.model('User', userSchema);