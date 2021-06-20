const Item = require('../model/ItemSchema');

const saveItem =(req,resp)=>{
    const item = new Item({
        orderID:req.body.orderID,
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
    Item.deleteOne({orderID:req.headers.id}).then(deleteResp=>{
        if(deleteResp.deletedCount>0){
            resp.status(200).json({message: 'Deleted'});
        }else{
            resp.status(200).json({message: 'Try Again'});
        }
    }).catch(error=>{
        resp.status(500).join(error)
    })
}
const getItem=(req,resp)=>{}
const updateItem=(req,resp)=>{
    Item.updateOne(
        {orderID:req.body.orderID},
        {$set:{
                itemID:req.body.itemID,
                itemName:req.body.itemName,
                itemSize:req.body.itemSize,
                itemColor:req.body.itemColor,
                itemQty:req.body.itemQty,
                itemPrice:req.body.itemPrice
            }}
        ).then(updateResult=>{
            if(updateResult.nModified>0){
                resp.status(200).json({message: 'Updated'});
            }else{
                resp.status(200).json({message: 'Try Again'});
            }
    }).catch(updateError=>{
        resp.status(500).join(updateError);
    })
}
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
