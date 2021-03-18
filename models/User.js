const { Shema, model } = require('mongoose');


const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true, 
            unique: true,
            match: [/.+@.+\..+/]
        },
        thoughts:
        friends:
    }
)

const User = model('User, userSchema');

module.exports = User;