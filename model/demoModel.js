var mysql_conn = require('../database').connection

// insert data
async function insert_demo(names,address,phonenumber) {
    const insert_s = 'INSERT INTO `insert_data`( `name`, `address`, `phonenumber`) VALUES (?,?,?)';
    var result = await mysql_conn.query(insert_s,[names,address,phonenumber])
    if(result[0].length != 0){
        return result[0];
    }else{
        return [];
    }
}
// update data
async function update_data(names,address,phonenumber,id) {
    const updates = 'UPDATE `insert_data` SET `name`=?,`address`=?,`phonenumber`=? WHERE id=?' 
    var result = await mysql_conn.query(updates,[names,address,phonenumber,id])
    if(result[0].length!=0){
        return result[0];
    }
    else{
        return [];
    }
}
// select data
async function select_all() {
    const select_all_ = 'SELECT `id`, `name`, `address`, `phonenumber` FROM `insert_data` '
    var result = await mysql_conn.query(select_all_)
    if(result[0].length!=0){
        return result[0]
    }else{
        return []
    }
}

// delete data
async function delete_one(id) {
    
    const delete_one = 'DELETE FROM `insert_data` WHERE id=?'
    var result = await mysql_conn.query(delete_one,id)
    if (result[0].length!=0) {
        return result[0]
    }else{
        return []
    }
}
module.exports={insert_demo,update_data,select_all,delete_one}