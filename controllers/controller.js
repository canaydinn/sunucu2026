
const db=require("../db/mysql_connect")
const bcrypt=require("bcrypt")
const kullanici_login=async(req,res)=>{
    const [existingUser]=await db.query("SELECT * FROM musteriler WHERE kullanici_adi=? and sifre=?", [kullanici_adi,sifre]);
   if(error,results){
   }
}
const kullanici_ekle=async(req,res)=>{
    try{
        const adi=req.body.adi;
        const soyadi=req.body.soyadi;
        const hesap_no=req.body.hesap_no;
        const kullanici_adi=req.body.kullanici_adi;
        const sifre=await bcrypt.hash(req.body.sifre,10);
        const [existingUser]=await db.query("SELECT * FROM musteriler WHERE kullanici_adi=?", [kullanici_adi]);
        if(existingUser.length>0){
            return res.status(400).json({error:"Bu kullanıcı adı zaten alınmış"})
        }
         const [insertResult]=await db.query("INSERT INTO musteriler (adi, soyadi, hesap_no, kullanici_adi, sifre) VALUES (?, ?, ?, ?, ?)", [adi, soyadi, hesap_no, kullanici_adi, sifre]);
        return res.status(201).json({message:"Kullanıcı başarıyla eklendi", kullanici_id:insertResult.insertId});
    }catch(err){
        console.log(err);
        return res.status(500).json({error:"Sunucu hatası"})

    }
}


const kullanici_getir=async(req,res)=>{
    try{
        const [rows]=await db.query("SELECT * FROM musteriler");    
        console.log(rows);
        return res.status(200).json(rows);
    }catch(err){
        console.log(err);
        return res.status(500).json({error:"Sunucu hatası"})
    }
}

const satis_getir=async(req,res)=>{
    try{
        const [rows]=await db.query("SELECT sales_date,sales_amount FROM sales_data"); 
        console.log(rows);
        return res.status(200).json(rows);
    }catch(err){
        console.log(err);
        return res.status(500).json({error:"Sunucu hatası"})
    }
} 
module.exports={kullanici_login,kullanici_ekle,kullanici_getir,satis_getir };
