const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    itemName:{
        type: String,
        required:true
    },
    itemSize:{
        type: Number,
        required:true
    },
    itemColor:{
        type: String,
        required:true
    },
    itemQty:{
        type: Number,
        required:true
    },
    itemPrice:{
        type:Number,
        required:true
    }
});

module.exports=mongoose.model('Item', ItemSchema);
