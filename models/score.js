const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const Schema = mongoose.Schema;


const NewScoreSchema =  new Schema
({
    owner:
    {
        type:String,
        required:true
    },
    score:
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

const ScoreSchema = mongoose.model('Scores', NewScoreSchema);

module.exports = ScoreSchema;