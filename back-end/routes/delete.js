const express =  require('express')
const router =  express.Router()
const Student  =  require('../models/student')

router.delete('/delete/:id',async (req,res)=>{
 
    const id =  req.params.id
    const delet  = await Student.deleteOne({_id:id})
 res.send('data deleted')
 console.log(delet)

})


module.exports =  router