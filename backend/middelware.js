const jwt=require("jsonwebtoken")
const Jwt_secret=require("./config")

const authentication=(req,res,next)=>{
    const auth=req.headers.authorization;
    if(!auth || !auth.startsWith('Bearer ')){
        return res.status(440).json({msg:"invalid token"})
    }
    const token=auth.split(' ')[1];
    const decoded=jwt.verify(token,Jwt_secret);
    if(decoded){
        req.user_id=decoded.user_id
       
        next();
    }
    else{
        return res.json({msg:"token expired"})
    }
}



module.exports=authentication