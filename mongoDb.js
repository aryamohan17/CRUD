const mongoose = require('mongoose')

mongoose.connect(process.env.mongo_,{useNewUrlParser:true,useUnifiedTopology: true})
.then(()=>{console.log("mongodb connected");})
.catch((err)=>console.log("connection error"))

 module.exports = mongoose





