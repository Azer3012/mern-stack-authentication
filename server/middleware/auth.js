const jwt=require('jsonwebtoken')
const auth=(req,res,next)=>{
    try {
        const token=req.cookies.token
        console.log(token)

        if(!token){
            return res.status(401).json({errorMessages:"Unauthorized"})
        }
        const verified=jwt.verify(token,process.env.JWT_SECRET)
        console.log(verified)

        req.user=verified.user

        next();
    } catch (error) {
        console.log(err)
        res.status(401).json({errorMessages:"Unauthorized"})
    }
}

module.exports=auth;