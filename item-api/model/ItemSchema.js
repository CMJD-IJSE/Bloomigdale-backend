const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    orderID:{
      type:String,
      required:true
    },
    itemID:{
      type: String,
      required:true
    },
    itemName:{
        type: String,
        required:true
    },
    itemSize:{
        type: String,
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
