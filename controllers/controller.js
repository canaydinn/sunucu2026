const dbConn=require("../db/mysql_connect")
const login=async(req,res)=>{
    console.log(req.body)
    return res.json(req.body)
}
const register=async(req,res)=>{
    try{
        const ad_soyad=req.body.ad_soyad
        const eposta=req.body.eposta
        const sifre=req.body.sifre
        const yetki_id=req.body.yetki_id
        const tarih=req.body.tarih
        const [existingUser]=await dbConn.query("SELECT * FROM users Where eposta=?",[eposta])
        if(existingUser.length>0){
            return res.json({
                success:false,
                data:null,
                message:"Kayıt Mevcut"
            })
        }
        const [insertResult]=await dbConn.query("INSERT INTO users (ad_soyad,eposta,sifre,yetki_id,tarih) VALUES (?,?,?,?,?)",[ad_soyad,eposta,sifre,yetki_id,tarih])
        return res.json({
            success:true,
            data:req.body,
            message:"Kayıt Gerçekleşti"
        })
    }catch(error){
        console.log("veritabanı hatası",error)
        return res.json({
            success:false,
            data:null,
            message:"Bir hata oluştu"
        })
    }
}

module.exports={login,register}