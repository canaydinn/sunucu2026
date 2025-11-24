const kullanici_login=async(req,res)=>{
    console.log(req.body)
    return res.json(req.body)
}
const kullanici_ekle=async(req,res)=>{
    console.log(req.body)
    return res.json(req.body)
}

module.exports={kullanici_login,kullanici_ekle};