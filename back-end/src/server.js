const express =  require('express')
const dotenv = require('dotenv')
const mongoose =  require('mongoose')
const cors =  require('cors')
const students = require('../routes/studentRouter')
const studentview  =require('../routes/viewstudent')
const studentupdate =  require('../routes/update')
const studentdelete = require('../routes/delete')
const userModel =  require('../models/student')
dotenv.config()
const app =  express()
app.use(express.json())
app.use(cors())
const CONNECTION = process.env.CONNECTION

app.use('/api',students)//http://localhost:9000/api/addstudent
app.use('/api',studentview)//http://localhost:9000/api/viewstudent
app.use('/api',studentupdate)//http://localhost:9000/api/
app.use('/api',studentdelete)//http://localhost:9000/api/
const PORT = process.env.PORT || 7000
app.listen(PORT,()=>{
    console.log('server is running on',PORT)
})

// extra used retrieve data
app.get('/getUser/:id',(req,res)=>{
const id = req.params.id;
userModel.findById({_id:id})
.then(users=>res.json(users))
.catch(err=>res.json(err))
})

app.put('/updateUser/:id',(req,res)=>{
    const id = req.params.id;
    userModel.findByIdAndUpdate({_id:id},{
        name:req.body.name,
        email:req.body.email,
        age:req.body.age})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})



// delete

app.delete('/deleteUser/:id',(req,res)=>{
    const id = req.params.id;
    userModel.findByIdAndDelete({_id:id})
    .then(res=>res.json(res))
    .catch(err=>console.log(err))
})












const dbconnect = async()=>{
    try{
await mongoose.connect(CONNECTION)
console.log('connection successfully!!!!')

    }
    catch(error){
        console.log('connection failed',error.message)
    }
}
dbconnect()


