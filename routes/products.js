const a=require('express')
const productService=require('../services/productService')
const validar=require('../middleware/validator')
const {obj,getProductSchema}=require('../schema/schema')

const router=a.Router()

router.get('/',async (req,res,next)=>{
    
    try {
        const response=await productService.getAllProduct(req,res)
        res.json(response)
    } catch (error) {
     next(error)   
    }
    
    
})


router.post('/enviar',validar(obj,'body'),async (req,res,next)=>{    
    const enviado=await productService.creater(req,res)
    res.json(enviado)
})

module.exports=router