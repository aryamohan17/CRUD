var model = require('../model/demoModel')

async function insert_value(req, res, next) {
    var result = await model.insert_demo(req.body.names, req.body.address, req.body.phonenumber)
    res.locals.result = result
    next()
}

async function update_value(req, res, next) {
    // var id = req.params.id
    var id = req.query.id
    var names = req.body.names
    var address = req.body.address
    var phno = req.body.phonenumber
    var result = await model.update_data(names, address, phno,id)
    res.locals.result = result
    next()
}

async function select_all__(req,res,next) {
    var result = await model.select_all()
    res.locals.result = result
    next()
}

async function delete_one_(req,res,next) {
    var id = req.query.id
    var result = await model.delete_one(id)
    res.locals.result = result
    next()
}

module.exports = {
    insert_value, update_value , select_all__,delete_one_
}