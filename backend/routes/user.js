const express=require("express")
const router=express.Router()
const {User, Account}=require("../db")

const jwt=require("jsonwebtoken")
const Jwt_secret=require("../config")
const zod=require("zod")
const authentication=require('../middelware')


const signupBody = zod.object({
    username: zod.string().email(),
	firstname: zod.string(),
	lastname: zod.string(),
	password: zod.string().min(6)
})
router.post("/signup",async function(req,res){
    const input=req.body;
    const check=signupBody.safeParse(input);
    if(!check){
        return res.status(411).json({message:"incorrect input form signup"})
    }
    const err=await User.findOne({username: input.username});
    if(err){
        return res.status(411).json({message:"User already exist"});
    }
    else{
        const user=await User.create({
            username:input.username,
            firstname:input.firstname,
            lastname:input.lastname,
            password:input.password
        })
        const user_id=user._id
        await Account.create({
            userid:user_id,
            balance: 20000
        })
        const token=jwt.sign({
            user_id
        },Jwt_secret)
        
        res.json({
            message:"user created succesfully",
            token:token,
            flag:true
        })
    }
})



const signinbody=zod.object({
    username:zod.string().email(),
    password:zod.string().min(6)

})
router.post("/signin",async function(req,res){
    const input=req.body;
    const {success}=signinbody.safeParse(input)
        if(!success){
            return res.status(411).json({msg:"wrong input in signin"})
        }
    
    const check=await User.findOne({username:input.username,password:input.password})
    if(check){
        const user_id=check._id
        const token=jwt.sign({
            user_id,
        },Jwt_secret)
        return res.json({
            flag:true,
            token:token
        })
    }
    else{
       return res.status(404).json({msg:"user not found"})
    } 
})


const updatebody=zod.object({
    password:zod.string().min(6),
    firstname:zod.string(),
    lastname:zod.string()
})
router.put('/',authentication,async (req,res)=>{
    const input=req.body;
    const {success}=updatebody.safeParse(input)
    if(!success){
       return res.status(411).json("wrong input for correction")
    }
    await User.updateOne({ _id:req.user_id},input)
    return res.json("updated successfully")
})



router.get('/bulk',async (req,res)=>{
    const filter=req.query.filter;
    const user=await User.find({
        $or:[{
            firstname:{
                '$regex':filter
            }
        },{
            lastname:{
                "$regex":filter
            }
        }]
    })
    res.json({
        user: user.map(user => ({
            username: user.username,
            firstname: user.firstname,
            lastname: user.lastname,
            _id: user._id
        }))
    })
})

module.exports=router;


