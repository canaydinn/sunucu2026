const express=require('express');
const bodyParser=require('body-parser');
const path=require('path');
const app=express();
require('dotenv').config();
const cors = require('cors');
app.use(cors());
port=process.env.PORT || 3001;
const router=require("./routers")
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
//localhost:3000/api ye gelen bütün istekleri routers klasöründeki index.js dosyasına yönlendir
app.use("/api",router);
app.listen(port,()=>{
    console.log(`Sunucu port ${port} üzerinde çalışıyor...`);
});
