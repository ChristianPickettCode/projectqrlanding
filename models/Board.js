const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BoardSchema = new Schema({
    profile: {
        type: Schema.Types.ObjectId,
        ref: 'profile'
    },
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
    },
    private: {
        type: Boolean
    },
    scan_num: {
        type: Number,
        default: 0
    },
    scan_list: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: 'user'
            },
            date: {
                type: Date,
                default: Date.now
            }
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Board = mongoose.model('board', BoardSchema);