const fake=require('faker')

const getAllProduct = (req,res)=>{
    // const nose= lolsaf()
    try {
    
    const v=[]
    const {size}=req.query
    const limit = size || 5
    for(let index=0;index<limit;index++){
        v.push({
            name:fake.commerce.productName(),
            price:parseInt(fake.commerce.price(),10),
            image: fake.image.imageUrl()
        })
    }

    res.json(v)
    } catch (error) {
        console.log(error)
    }
    
}

const creater=(req,res)=>{
    const body=req.body
    console.log(body)
    res.json({
        data:body
    })
}

module.exports={getAllProduct,creater}
