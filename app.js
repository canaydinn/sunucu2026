const express=require("express")
const app=express()
require('dotenv/config')
const port=process.env.PORT
//"/" kök dizin localhost:5001
app.get("/",(req,res)=>{
    res.json({
        message:"Hoşgeldiniz"
    })
})


app.listen(port,()=>{
    console.log("Sunucu çalışıyor")
})