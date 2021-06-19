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

    item.save().then(result=>{
        resp.status(200).json({state:true,"message":"saved"});
    }).catch(error=>{
        resp.status(500).join(error)
    })

}
const deleteItem=(req,resp)=>{
    Item.deleteOne({itemID:req.headers.id}).then(deleteResp=>{
        resp.status(200).json({message: 'Deleted'});
    }).catch(error=>{
        resp.status(500).join(error)
    })
}
const getItem=(req,resp)=>{}
const updateItem=(req,resp)=>{}
const getAllItems=(req,resp)=>{
    Item.find().then(result=>{
       resp.status(200).json({dataSet:result});
    }).catch(error=>{
        resp.status(500).json(error);
    });
}

module.exports={
    saveItem,
    deleteItem,
    getItem,
    updateItem,
    getAllItems
}
