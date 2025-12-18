const APIError=require('../../utils/erros').APIError;

const errorHandlerMiddleware=(err, req, res, next) =>{   
    if (err instanceof APIError) {
        return res.status(err.statusCode).json({
            success:false,
            message:err.message
         });
    }

    return res.status(500).json({
        success:false,
        message:'Bir hata ile karşılaşıldı.Lütfen API sağlayıcınızla iletişime geçin.'
    });
} 
module.exports=errorHandlerMiddleware;