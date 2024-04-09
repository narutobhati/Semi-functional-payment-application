const express=require("express");
const routes=express.Router();


const UserRoute=require("./user")
const AccountRoute=require("./account")


routes.use("/user",UserRoute)
routes.use("/account",AccountRoute);



module.exports=routes;

