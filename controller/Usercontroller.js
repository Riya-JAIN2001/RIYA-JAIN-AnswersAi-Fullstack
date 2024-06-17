const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Question = require("../models/question");


module.exports.createUser =async (req, res)=>{
    try{
        const email= req.body.email
        const already_user= await User.findOne({email})
        
        if(already_user){
            
            return res.status(40398).json({success:false, message:"User already registered !"})

        }
        else{
        const salt= bcrypt.genSaltSync(10);
        const hash= bcrypt.hashSync(req.body.password,salt);
        const newUser=new User({
            
            email:req.body.email,
            password:hash,
           
        })
        const saved_user=await newUser.save();
        const token= jwt.sign({id:saved_user._id}, process.env.JWT_SECRET)
        return res.status(200).json({success:true, message:"Successfull created", newUser, token})

    }}catch(error){
        return res.status(400).json({success:false, message:"Some error", error})

    }

}
module.exports.getUserById =async(req, res)=>{
    try {
        const userid= req.params.userid
        const user= await User.findById({_id:userid})
        if (!user){
            return res.status(404).json({success:false, message:"User not found !"})
        }
        return res.status(200).json({success:true, msg:"user Found", user})
        
    } catch (error) {
        return res.status(400).json({success:false, message:"Some error", error})

    }
}

module.exports.Allquestions=async (req, res)=>{
    try {
        const userId= req.params.userid;
        const user= await User.findById({_id:userId});
        if (!user){
            return res.status(404).json({success:false, message:"User not found !"})

        }
        const questions= await Question.find({userId:userId})
        return res.status(200).json({success:true,message:"all question", questions})
    } catch (error) {
        return res.status(400).json({success:false, message:"Some error", error})

    }
}