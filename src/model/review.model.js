const mongoose = require('mongoose');

const ReviewSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products'
    } ,
    rating:{
        type:Number,
        min:1,max:5,
        require:true
    },
    description:{
        type:String
    },
    isDelete: {
        type: Boolean,
        default: false
    }
},
{
    versionKey:false,
    timestamps:true
}
);

module.exports = mongoose.model('reviews' , ReviewSchema);