const fake=require('faker')

const getAllProduct = (req,res)=>{
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
}

module.exports={getAllProduct}
