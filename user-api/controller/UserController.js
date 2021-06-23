const User = require('../model/UserSchema');
const bcrypt = require('bcryptjs');

const saveUser =async (req, resp) => {
    /*const user = new User({
        userEmail:req.body.userEmail,
        userPassword:req.body.userPassword
    });
    console.log(user);*/

    /*const {userEmail, userPassword: plainTextPassword} = req.body;

    console.log(req.body)

    const userPassword = await bcrypt.hash(plainTextPassword, 10)

    try {
        const res = await User.create({
            userEmail,
            userPassword
        });
        console.log('user Created', res)
    } catch (error) {
        console.log(error);
        return res.json({status: 'error'});
    }*/


    /*    user.save().then(result=>{
            console.log(user);
            resp.status(200).json({state:true,"message":"saved"});
        }).catch(error=>{
            resp.status(500).json(error)
        })*/
    
    User.pre("save",async function f() {
        
    })
}


module.exports={
    saveUser
}
