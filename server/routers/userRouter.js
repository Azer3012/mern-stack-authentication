const router=require('express').Router()

const User=require('../models/userModel')

const bcrypt=require('bcryptjs')

const jwt=require('jsonwebtoken')

//register
router.post('/',async(req,res)=>{

    try{
    const {email,password,passwordVerify}=req.body

        //validation
        if(!email || !password || !passwordVerify){
            return res.status(400).json({errorMessages:'please enter all required fields'})
        }
        if(password.length<6){
            return res.status(400).json({errorMessages:'please enter a password of least 6 characters'})
        }
        if(password !==passwordVerify){
            return res.status(400).json({errorMessages:'please enter the same passoword twice'})

        }
        const existingUser= await User.findOne({email:email})

        if(existingUser){
            return res.status(400).json({errorMessages:'an Account with this email already exist'})
        }

        //Hash password

        const salt= await bcrypt.genSalt()

        const passwordHash=await bcrypt.hash(password,salt)

        

        //save a new user account to database

        const newUser=new User({
            email,passwordHash
        })

        const savedUser= await newUser.save()

        //sign the token

        const token=jwt.sign({
            user:savedUser._id
        },process.env.JWT_SECRET)

        //send the tpken HTTP only cookie

        res.cookie('token',token,{
            httpOnly:true
        }).send()

    }
    catch(err){
        console.log(err)
        res.status(500).send()
    }
})

//login

router.post('/login',async (req,res)=>{
    try{
    const {email,password}=req.body
    //validate

    if(!email || !password ){
        return res.status(400).json({errorMessages:'please enter all required fields'})
    }
        const existingUser= await User.findOne({email:email})

        if(!existingUser){
            return res.status(401).json({errorMessages:'Wrong email or passsword'})
        }

        const passwordCorrect=await bcrypt.compare(password,existingUser.passwordHash)

        if(!passwordCorrect){
            return res.status(401).json({errorMessages:'Wrong email or passsword'})
        }

        const token=jwt.sign({
            user:existingUser._id
        },process.env.JWT_SECRET)

        //send the tpken HTTP only cookie

        res.cookie('token',token,{
            httpOnly:true
        }).send()
    }
    catch(err){
        console.log(err)
        res.status(500).send()
    }
})

router.get("/logout",(req,res)=>{
    res.cookie('token','',{
        httpOnly:true,
        expires:new Date(0)
    }).send()
})

router.get('/loggedIn',(req,res)=>{
    try {
        const token=req.cookies.token
        console.log(token)

        if(!token){
            return res.json(false)
        }
        jwt.verify(token,process.env.JWT_SECRET)
        res.send(true)
        

        

        
    } catch (error) {
        
        res.json(false)
    }
})
module.exports=router;