const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    gender: {
        type: String,
    },
    registration_complete: {
        type: Boolean,
        default: false
    },
    boards: [
        {
            type: Schema.Types.ObjectId,
            ref: 'board'
        }
    ],
    date: {
        type: Date,
        default: Date.now,
    }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);