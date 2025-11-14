const fake=require('faker')
const pol=require('../libs/postgre')

const getAllProduct = async (req,res)=>{
    // const nose= lolsaf()
    try {
        const response = await pol.query('SELECT * FROM usuario')
        return response.rows
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
