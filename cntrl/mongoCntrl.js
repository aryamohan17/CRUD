var model_data = require('../model/mongoModel')

// insert data

function addStud(req, res, next) {
    var result_ = {
        stud_name: req.body.stud_name,
        stud_address: req.body.stud_address,
        stud_age: req.body.stud_age
    }
    var result = model_data.User.create(result_)
    res.locals.result = result
    next()

}

// update data
async function updateStud(req, res, next) {

    const stud_id_ = req.params._id
    const stud_id = { _id: stud_id_ }
    const update_data = req.body.data
    var result = await model_data.User.updateOne(stud_id, update_data)
    res.locals.result = result
    next()
}
 
// select

async function selectAll(req,res,next) {
    var result = await model_data.User.find().exec()
    console.log(result);
    res.locals.result = result
    next()
}
// select by using one id 

async function selectById(req,res,next) {
    var stud_id = req.params._id
    var stud_id_ = {_id:stud_id}
   var result = await model_data.User.findOne(stud_id_)

   res.locals.result = result

   next()
}

async function delete_one(req,res,next) {
   var stud_id_ = req.params._id
    // console.log(stud_id_);
    var result = await model_data.User.deleteOne(stud_id_)

    res.locals.result = result
    next()
}

module.exports = { addStud, updateStud ,selectAll,selectById,delete_one}