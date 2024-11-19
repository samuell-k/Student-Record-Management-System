const express = require('express')
const Student =  require('../models/student')
const router  =  express.Router()
router.post('/addstudent',async(req,res)=>{
       
const student =  new Student({
    name:req.body.name,
    age:req.body.age,
    email:req.body.email
})
student.save()
res.send("student created")
    
})

module.exports =  router