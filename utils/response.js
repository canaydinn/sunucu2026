class Response {
    constructor(data=null,message=null,status){
        this.data=data;
        this.message=message;
        this.status=status;
    }
    success(res){
        return res.status(this.status || 200).json({
            success:true,
            message:this.message??"İşlem başarıyla gerçekleştirildi",   
            data:this.data
        });
    }
    created(res){
        return res.status(201).json({
            success:true,
            message:this.message??"Kayıt başarıyla oluşturuldu",   
            data:this.data
        });
    }
    error(res){
        return res.status(this.status || 500).json({
            success:false,
            message:this.message??"Bir hata ile karşılaşıldı",   
            data:this.data
        });
    }
    error404(res){
        return res.status(404).json({
            success:false,
            message:this.message??"Kayıt bulunamadı",   
            data:this.data
        });
    }
}