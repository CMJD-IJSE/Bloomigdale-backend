const User = require('../model/UserSchema');
const bcrypt = require('bcryptjs');

const saveUser =async (req, resp) => {

    const {userEmail, userPassword : plainTextPassword} = req.body;

    if(typeof  userEmail !== 'string'){
        return resp.json({status: 'error', error: 'Invalid Email'})
    }
    if(typeof  plainTextPassword !== 'string'){
        return resp.json({status: 'error', error: 'Invalid Password'})
    }


    const userPassword  = await bcrypt.hash(plainTextPassword, 10)


    try {
        const res = await User.create({
            userEmail,
            userPassword
        });
        console.log('user Created', res)
    } catch (error) {
//        console.log(error);

        if (error.code === 11000) {
            return resp.json({status: 'error', error: 'Email already in use'});
        }
        throw error;
    }


    resp.json({status: 'ok'})

}


module.exports={
    saveUser
}
