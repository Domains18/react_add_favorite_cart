const Schema = require('mongoose').Schema;
const parentSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {

        type: String,
        required: true
    },
    occupation: {
        type: String,
        required: true,
    },
    children: [{
        type: Schema.Types.ObjectId,
        ref: 'Student',
    }],
    
});


const Parent = mongoose.model('Parent', parentSchema);
module.exports = Parent;
