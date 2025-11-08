const a=require('express')
const productService=require('../services/productService')
// const fake=require('faker')

const router=a.Router()

router.get('/',(req,res)=>{
    // const v=[]
    // const {size}=req.query
    // const limit = size || 5
    // for(let index=1;index<limit;index++){
    //     v.push({
    //         name:fake.commerce.productName(),
    //         price:parseInt(fake.commerce.price(),10),
    //         image: fake.image.imageUrl()
    //     })
    // }

    // res.json(v)
    const response=productService.getAllProduct(req,res)
    res.json(response)
})

router.post('/enviar',(req,res)=>{
    const bod=req.body
    
    res.json({
        estado:"ok",
        cuerpo: bod
    })
    console.log("post hecho",bod)
})

module.exports=router