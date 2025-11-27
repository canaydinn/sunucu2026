<<<<<<< HEAD
const mysql=require("mysql2")
require("dotenv/config")
const dbConn=mysql.createPool({
    user:process.env.MYSQL_USER,
    password:process.env.MYSQL_PASSWORD,
    database:process.env.MYSQL_DATABASE,
    host:process.env.MYSQL_HOSTNAME,
=======
const mysql=require('mysql2');
require('dotenv').config();

const connection=mysql.createPool({
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    host:process.env.DB_HOST,
    database:process.env.DB_NAME,
>>>>>>> fe766ae65e14f5484d5ececa3fb04cfaeabae453
    waitForConnections:true,
    connectionLimit:10,
    queueLimit:0
})
<<<<<<< HEAD

module.exports=dbConn.promise()
=======
module.exports=connection.promise();
>>>>>>> fe766ae65e14f5484d5ececa3fb04cfaeabae453
