const express = require('express')
const products=require('./Router/Products')
const user=require('./Router/user')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/',products)
app.use('/', user)

app.use((err,req,res,next)=>{
  res.status(500).json({message:"server error",err:err})
})


app.listen(3000,()=>{
  console.log("server is running on port 3000");
})