const Register = require('../models/Register')
const bcrypt = require('bcryptjs');

exports.signinPage = (req, res, next) => {
    res.render('signin')
}

exports.postRegister = async (req, res, next) => {

    const ifUserExist = await Register.findOne({
        where: {
            email: req.body.email
        }
    })

    if (ifUserExist) return res.redirect('signin');
    const hashpassword = await bcrypt.hash(req.body.password, 12)
    const newUser = await new Register({
        ...req.body
    })
    if (newUser.password === req.body.confirmPassword) {

        newUser.password = hashpassword;
        const saved = await newUser.save()
        if (saved) return res.status(201).redirect('login')
    }
    console.log('password not match to origin!')
    return res.redirect('signin');


}