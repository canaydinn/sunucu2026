const mysql=require("mysql2")
require("dotenv/config")
const dbConn=mysql.createPool({
    user:process.env.MYSQL_USER,
    password:process.env.MYSQL_PASSWORD,
    database:process.env.MYSQL_DATABASE,
    host:process.env.MYSQL_HOSTNAME,
    waitForConnections:true,
    connectionLimit:10,
    queueLimit:0
})

module.exports=dbConn.promise()