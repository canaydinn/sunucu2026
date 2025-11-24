const mysql=require('mysql2');
require('dotenv').config();

const connection=mysql.createPool({
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    host:process.env.DB_HOST,
    database:process.env.DB_NAME,
    waitForConnections:true,
    connectionLimit:10,
    queueLimit:0
})
module.exports=connection.promise();