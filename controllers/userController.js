const User = require("../models/user.model")
const bcrypt = require('bcrypt');
exports.register = async(req,res)=>{
    try {
        let hashPassword = await bcrypt.hash(req.body.password,10);
        const data = await User.create({...req.body,password:hashPassword});
        return res.status(201).json({data,message:"User created successfully"})
    } catch (error) {
        return res.status(401).json({message:error.message});
    }
}