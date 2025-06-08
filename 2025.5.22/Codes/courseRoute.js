const express=require('express')
const router = express.Router()
const Course = require('../models/Course')
const {default: mongoose} = require('mongoose')

router.get('/',async(req,res)=>{
    try{
        const results = await Course.find()
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

router.get('/:id',async(req,res)=>{
    try{
        const id = req.params.id
        const results = await Course.findById(id)
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

router.get('/code/:cid',async(req,res)=>{
    try{
        const cid = req.params.cid
        const results = await Course.find({code:cid})
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



router.post('/',async(req,res)=>{
    try{
       const {code,name,credits,description} = req.body
       if(!code || !name || !credits){
            res.status(400).send("Please provide the required fields!")
        }else{
            const results = await Course.create({code, name, credits, description})
            res.status(200).json(results)
        }
    }catch(error){
        console.error(error);
        res.status(500).send("Server error!")
    }
})

router.put('/:id',async(req,res)=>{
    try{
        const id = req.params.id
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).send("invalid Id!")
        }
        const ucourse = await Course.findById(id)
       const {code,name,credits,description} = req.body
       if(!code || !name || !credits){
            res.status(400).send("Please provide the required fields!")
        }else{
            const results = await ucourse.updateOne({code, name, credits, description})
            res.status(200).json(results)
        }
    }catch(error){
        console.error(error);
        res.status(500).send("Server error!")
    }
})

router.delete('/:id',async(req,res)=>{
    try{
        const id = req.params.id
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).send("invalid Id!")
        }
        const dcourse = await Course.findById(id)
        const results = await dcourse.deleteOne(dcourse).catch((error)=>{return res.status(500).send("Server error!")})
        res.status(200).json(results)
    }catch(error){
        console.error(error);
        res.status(500).send("Server error!")
    }
})

module.exports=router