// require modules for our User Model
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let userSchema = mongoose.Schema({
    username: {
        type: String,
        default: '',
        trim: true,
        required: 'username is required'
    },
    email: {
        type: String,
        default: '',
        trim: true,
        required: 'email is required'
    },
    displayName: {
        type: String,
        default: '',
        trim: true,
        required: 'Display Name is required'
    },
    accountType: {
        type: String,
        default: 'None'
    },
    created: {
        type: Date,
        default: Date.now,
    },
    update: {
        type: Date,
        default: Date.now
    }
}, {
    collection: 'users'
});

// configure options for the UserSchema

let options = ({
    missingPasswordError: 'Wrong / Missing Password'
});

userSchema.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model('User', userSchema);