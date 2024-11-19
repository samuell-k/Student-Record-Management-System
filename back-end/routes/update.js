const express  = require('express')
const { reset } = require('nodemon')
const Student =  require('../models/student')
const router  =  express.Router()

router.put('/update', async (req,res)=>{
   
    const {id,...reset} = req.body

    await Student.updateOne({_id:id},reset)
    res.send("data modified")
    console.log(reset)

})

module.exports =  router