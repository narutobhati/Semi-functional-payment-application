const express=require("express");
const mongoose=require("mongoose")
const authentication = require("../middelware");
const { Account } = require("../db");

//const { startSession } = require("mongoose");
const router=express.Router();


router.get("/balance",authentication,async (req,res)=>{
    const user=await Account.findOne({userid:req.user_id})
    res.json({balance:user.balance})
})

router.post("/transfer",authentication,async (req,res)=>{
    const session=await mongoose.startSession();
    session.startTransaction()
    const {amount, to}=req.body;
    const fromuser=await Account.findOne({userid:req.user_id}).session(session)
    if(!fromuser){
        await session.abortTransaction();
        res.json({msg:"from user not found"})
    }
    if(fromuser.balance>=amount){
        const touser=await Account.findOne({userid:to}).session(session);
        if(!touser){
            await session.abortTransaction();
            res.json({msg:"to user not found"})
        }
        else{
            await Account.updateOne({userid:req.user_id},{$inc :{balance: -amount}}).session(session);
            await Account.updateOne({userid:to},{$inc:{balance: amount}}).session(session);
            res.json({msg:"transfered succefully"})
        }

    }
    session.commitTransaction()

})





module.exports=router