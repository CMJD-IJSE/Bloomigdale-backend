const User = require('../model/UserSchema');
const bcrypt = require('bcryptjs');

const saveUser =async (req, resp) => {

    const {userEmail, userPassword : plainTextPassword} = req.body;
    const userPassword  = await bcrypt.hash(plainTextPassword, 10)


    try {
        const res = await User.create({
            userEmail,
            userPassword
        });
        console.log('user Created', res)
    } catch (error) {
        console.log(error);
        return resp.json({status: 'error'});
    }


    resp.json({status: 'ok'})

}


module.exports={
    saveUser
}
