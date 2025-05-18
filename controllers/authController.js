require('dotenv').config(); 
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const validator = require('validator');

exports.register = async(req,res) => {
    const {email,password} = req.body;
    try{
        if(!email || !password){
            return res.status(400).json({message :'Email and password are required'})
        }
        if(!validator.isEmail(email)){
            return res.status(400).json({message:'Invalid email format'})
        }
        if(password.length < 6){
            return res.status(400).json({message:'the password must be more than 6 character!'})
        }
        const existinguser = await User.findOne({email});
        if(existinguser){
            return res.status(400).json({message:'Email already in use!'})
        }


        const hashedpassword = await bcrypt.hash(password,10); 
        const user = new User({email, password :hashedpassword})
        await user.save();
        res.status(200).json({message:'User registered succefully!'})
    } catch (error) {
        res.status(500).json({message :'Server error during registration!',error})
    }
}

exports.login = async (req,res)=>{
    const {email,password}= req.body;
    try {
        if(!email || !password){
            return res.status(400).json({message:'Please provide email and password'})
        }
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({message:'the user not found'})
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({message:'wrong password'})
        }
        const token = jwt.sign({id:user._id} , process.env.JWT_SECRET ,{expiresIn:'1d'});
        res.json({token})
    } catch (error) {
        res.status(500).json({message:'Error logging in', error})

    }
}