const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const Schema = mongoose.Schema;

const NewUserSchema = new Schema
({
    email:
    {
        type:String,
        required:true
    },
    age:
    {
        type:Number,
        required:true
    },
    timestamp:
    {
        type:Date,
        default:Date.now()
    }
});

const UserSchema = mongoose.model('Users', NewUserSchema);

module.exports = UserSchema;