const User = require('../model/UserSchema');

const saveUser =(req,resp)=>{
    const user = new User({
        userEmail:req.body.userEmail,
        userPassword:req.body.userPassword
    });
    console.log(user)

    user.save().then(result=>{
        resp.status(200).json({state:true,"message":"saved"});
    }).catch(error=>{
        resp.status(500).json(error)
    })
}


module.exports={
    saveUser
}
