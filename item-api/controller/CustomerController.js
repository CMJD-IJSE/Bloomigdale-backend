const Item = require('../model/ItemSchema');

const saveItem =(req,resp)=>{
    const item = new Item({
        itemName:req.body.itemName,
        itemSize:req.body.itemSize,
        itemColor:req.body.itemColor,
        itemQty:req.body.itemQty,
        itemPrice:req.body.itemPrice
    });

    console.log(item);

}
