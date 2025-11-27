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