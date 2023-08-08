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

router.put('/updateStud/:_id',cntrl.updateStud,function (req,res,next) {
    if(res.locals.result == 'err' )
    {
        var status = {'status' : false,'message' :"Something went wrong",result: [] }
            res.status(402).json(status);
    }
    else if(res.locals.result.length == 0){
        var status = {'status' : true,'message' :"No result Found",result: [] }
            res.status(202).json(status);
    }
    else{
        var status = {'status' : true,'message' :"succesfull response",result: res.locals.result }
            res.status(200).json(status);
    }
})

router.get('/getAllData',cntrl.selectAll,function (req,res,next) {
    console.log(res.locals.result);
    if(res.locals.result == 'err'){
        var status = {'status':false,'message':"something error",result:[]}
        res.status(402).json(status)
    }else if(res.locals.result.length == 0){
        var status = {'status':true , 'message':"no found",result:[]}
        res.status(202).json(status)
    }else{
        var status = {'status':true , 'message':"sucessfully get data",result:res.locals.result}
        res.status(200).json(status);
    }
})

router.get('/getById/:_id',cntrl.selectById,function (req,res,next) {
    console.log(res.locals.result);
    if(res.locals.result == 'err'){
        var status = {'status':false , 'message':"some error" , result:[]}
        res.status(400).json(status)
    }else if(res.locals.result.length == 0){
        var status = {'status':true , 'message':"not found",result:[]}
        res.status(403).json(status)
    }else{
        var status = {'status':true,'message':"sucessfully get data",result:res.locals.result}
        res.status(200).json(status)
    }
})

router.delete('/delete_one/:id',cntrl.delete_one,function (req,res,next) {
    if(res.locals.result == 'err'){
        var status = {'status':false , 'message':"some error" , result:[]}
        res.status(400).json(status)
    }else if(res.locals.result.length == 0){
        var status ={'status':true,'message':"not found",result:[]}
        res.status(404).json(status)
    }else{
        var status ={'status':true , 'message':"delete sucessfully" , result:res.locals.result}
        res.status(200).json(status)
    }
})

module.exports=router