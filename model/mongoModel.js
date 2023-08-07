var mongo_conn = require('../mongoDb').mongoose
// var mongoose = require('mongoose');

const {Schema} = new mongo_conn.Schema()

const insertSchema = mongo_conn.Schema({
    stud_name : {type:String,require:true},
    stud_address:{type:String,require:true},
    stud_age:{type:String,require:true} 
}) 

const User = mongo_conn.model('User',insertSchema)
module.exports={User}