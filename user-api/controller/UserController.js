const User = require('../model/UserSchema');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodeMailer = require('nodemailer');

const transporter = nodeMailer.createTransport({
    service: 'gmail',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: '', //massage sending email
        pass: '' //password
    }
});


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
        /*const mailOptions = {
            from: '', //massage sending email must disable 2 factor authentication and  Allow less secure apps to access account by default this settings is off and you simply turn it on.
            to: userEmail,
            subject: 'Account creation successful',
            text: 'Hi dear, welcome to bloomingdales'
        };

        await transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error)
            } else {
                console.log('Email sent: ' + info.res)
            }
        })
*/
        console.log('user Created', res)
    } catch (error) {
        if (error.code === 11000) {
            return resp.json({status: 'error', error: 'Email already in use'});
        }
        throw error;
    }

    resp.json({status: 'ok'})

}

const JWT_SECRET='vbgrtfbe';

const login = async (req, resp) =>{

    const {userEmail, userPassword} = req.body;

    const user = await User.findOne({userEmail}).lean()

    if(!user) {
        return resp.json({status: 'error', error: 'Invalid Email or Password'})
    }

    if(await bcrypt.compare(userPassword, user.userPassword)){
        const token = jwt.sign({
            id: user._id,
            username: user.userEmail
        }, JWT_SECRET)

        /*const mailOptions = {
            from: '', //massage sending email must disable 2 factor authentication and  Allow less secure apps to access account by default this settings is off and you simply turn it on.
            to: userEmail,
            subject: 'Logging Successful',
            text: 'Hi dear, welcome to bloomingdales'
        };

        await transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error)
            } else {
                console.log('Email sent: ' + info.res)
            }
        })*/

        return resp.json({status: 'ok', data: token})
    }

    resp.json({status: 'error', error: 'Invalid Email or Password'})
}

const changePassword = async (req, resp) =>{
    const {token, newPassword: plainTextPassword} = req.body;

    if(typeof  plainTextPassword !== 'string'){
        return resp.json({status: 'error', error: 'Invalid Password'})
    }

    try {
        const user = jwt.verify(token, JWT_SECRET)
        const _id = user.id

        const userPassword = await bcrypt.hash(plainTextPassword,10)
        await User.updateOne({_id},{
            $set: {userPassword}
        })

        const mailOptions = {
            from: '', //massage sending email must disable 2 factor authentication and  Allow less secure apps to access account by default this settings is off and you simply turn it on.
            to: userEmail,
            subject: 'Password changed',
            text: 'Hi dear, Your password has been changed'
        };

        await transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error)
            } else {
                console.log('Email sent: ' + info.res)
            }
        })
        resp.json({status: 'ok'})
    } catch (error) {
        resp.json({status: 'error', error:':))'})
    }
}


module.exports={
    saveUser,
    login,
    changePassword
}
