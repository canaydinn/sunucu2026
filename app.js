<<<<<<< HEAD
const express=require("express")
const app=express()
require('dotenv/config')
const port=process.env.PORT
//"/" kök dizin localhost:5001
//klasör gösterdik
const router=require("./routers")
app.use(express.json())
app.use("/api",router)

app.listen(port,()=>{
    console.log("Sunucu çalışıyor")
})
=======
const express=require('express');
const app=express();
require('dotenv').config();
port=process.env.PORT || 3001;
const router=require("./routers")
app.use(express.json());
//localhost:3000/api ye gelen bütün istekleri routers klasöründeki index.js dosyasına yönlendir
app.use("/api",router);
app.listen(port,()=>{
    console.log(`Sunucu port ${port} üzerinde çalışıyor...`);
});
>>>>>>> fe766ae65e14f5484d5ececa3fb04cfaeabae453
