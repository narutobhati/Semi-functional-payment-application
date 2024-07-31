const mongoose=require("mongoose");
const { number } = require("zod");
mongoose.connect("mongodb+srv://admin:sanchay999@cluster0.f4yqzqa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        minLength:3,
        maxLength:30,
        unique:true,
        lowecase:true,
    },
    firstname:{
        type:String,
        required:true,
        minLength:3,
        maxLength:30,
    },
    lastname:{
        type:String,
        required:true,
        minLength:3,
        maxLength:30
    },
    password:{
        type:String,
        required:true,
        minLength:6
    }
})

const accountSchema=new mongoose.Schema({
    userid:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    balance:{
        type:Number,
        requires:true
    }

})
const Account=mongoose.model("Account",accountSchema)
const User=mongoose.model("User",userSchema);
module.exports={
    User,
    Account
}
