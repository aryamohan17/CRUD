var express = require('express');
var router = express.Router();
var cntrl = require('../cntrl/mongoCntrl')

router.post('/insert_data',cntrl.addStud,function (req,res,next) {
    if(res.locals.result == 'err' )
     {
         var status = {'status' : false,'message' :"Something went wrong",result: [] }
             res.status(402).json(status);
     }
     else if(res.locals.result.length == 0){
         var status = {'status' : true,'message' :"No result Found",result: [] }
             res.status(201).json(status);
     }
     else{
         var status = {'status' : true,'message' :"succesfull response",result: res.locals.result }
             res.status(200).json(status);
     }
})

module.exports=router