const express=require('express')
const router = express.Router()
const Degree = require('../models/Degree')
const {default: mongoose} = require('mongoose')

router.get('/',async(req,res)=>{
    try{
        const results = await Degree.find()
        if (results){
            res.status(200).json(results)
        }else{
            res.status(404).send("Sorry, No Data Found!")
        }
    }catch(error){
        console.error(error);
        res.status(500).send("Server error!")
    }
})

module.exports=router