const router=require('express').Router()

const Customer=require('../models/customerModel')

const auth=require('../middleware/auth');

router.post('/',auth, async(req,res)=>{
    try{
        const {name}=req.body
        const newCustomer=new Customer({name:name})

        const savedCustomer=await newCustomer.save()
        res.json(savedCustomer)
    }
    catch(err){
        console.log(err)
        res.status(500).send()
    }
})

router.get('/',auth, async(req,res)=>{
    try{
       const customers=await Customer.find()
       res.json(customers)
    }
    catch(err){
        console.log(err)
        res.status(500).send()
    }
})

module.exports=router;