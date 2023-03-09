const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const communitySchema = new Schema({
    names: {
        type: String,
        required: true
    },
    allumni: {
        type: Boolean,
        required: true,
        default: false
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    otherAffiliations: {
        type: String,
        required: true
    },
});


const Community = mongoose.model('Community', communitySchema);
module.exports = Community;
