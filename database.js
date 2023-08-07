const mysql = require('mysql2/promise')

const connection = mysql.createPool({
    host : process.env.host,
    database:process.env.database,
    user:process.env.user,
    password:process.env.password
})

connection.getConnection(function name(params) {
    
})

module.exports={connection}