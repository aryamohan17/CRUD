var express = require('express');
var router = express.Router();
var cntrl = require('../cntrl/demoCntrl')
/* GET home page. */

router.post('/insert_data',cntrl.insert_value,function (req,res,next) {
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
// using params
// router.post('/update_data/id',cntrl.update_value,function (req,res,next) {
// using query
router.post('/update_data',cntrl.update_value,function (req,res,next) {
    if(res.locals.result=='err')
    {
        var status= {'status':false,'message':"some errors",result:[]}
        res.status(202).json(status)
    }
    else if(res.locals.result.length == 0){
        var status = {'status':true,'message':"no result",result:[]}
        res.status(202).json(status)
    }
    else{
        var status ={'status':true,'message':"sucessful response",result:res.locals.result}
        res.status(200).json(status)
    }
})

// select all data
router.get('/selectAll',cntrl.select_all__,function (req,res,next) {
    if(res.locals.result=='err'){
        var status = {'status':false,'message':"some error exist",result:[]}
        res.status(402).json(status)
    }else if(res.locals.result.length == 0){
        var status = {'status':true,'message':"no result",result:[]}
        res.status(202).json(status)
    }else{
        var status = {'status':true,'message':"sucessful response",result:res.locals.result}
        res.status(202).json(status)
    }
})

router.delete('/delte_one',cntrl.delete_one_,function (req,res,next) {
    if(res.locals.result=='err'){
        var status = {'status':false,'message':"some error exist",result:[]}
        res.status(400).json(status)
    }else if(res.locals.result.length == 0){
        var status = { 'status':true,'message':"some error exist",result:[]}
        res.status(202).json(status)
    }else{
        var status = {'status':true,'message':"sucessful response",result:res.locals.result}
        res.status(200).json(status)
    }
})


module.exports = router;
