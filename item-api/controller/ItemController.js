const Item = require('../model/ItemSchema');

const saveItem =(req,resp)=>{
    const item = new Item({
        itemID:req.body.itemID,
        itemName:req.body.itemName,
        itemSize:req.body.itemSize,
        itemColor:req.body.itemColor,
        itemQty:req.body.itemQty,
        itemPrice:req.body.itemPrice
    });

    console.log(item);

}
const deleteItem=(req,resp)=>{}
const getItem=(req,resp)=>{}
const updateItem=(req,resp)=>{}
const getAllItems=(req,resp)=>{}

module.exports={
    saveItem,
    deleteItem,
    getItem,
    updateItem,
    getAllItems
}
