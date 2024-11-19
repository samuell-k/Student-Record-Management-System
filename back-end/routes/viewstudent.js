const express =  require('express')
const router   =  express.Router()
const Student =  require('../models/student')

router.get('/viewstudent',async (req,res)=>{
    
    // const students =  await Student.find()
  // res.send({"student list":students})
  Student.find({})
  .then(Users=>res.json(Users))
  .catch(err=>res.json(err))
})

module.exports = router
