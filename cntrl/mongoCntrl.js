var model_data = require('../model/mongoModel')

function addStud(req,res,next){
    var result_ ={
        stud_name:req.body.stud_name,
        stud_address:req.body.stud_address,
        stud_age:req.body.stud_age
    }
    var result = model_data.User.create(result_)
    res.locals.result = result
    next()
    
}
    // return model_data.find().then(result=>{
    //     if(result){
    //         { 
    //             model_data.save()             
    //             // const newStud=new model_data.User({stud_name , stud_address , stud_age})
    //             // newStud.save()            
    //         }
    //     }
       
    // })


module.exports={addStud}