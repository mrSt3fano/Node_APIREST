const routerp=require('../routes/products.js')
const routeru=require('../routes/users.js')


function apiRouter(aea){
    aea.use('/products',routerp)
    aea.use('/users',routeru)
}


module.exports=apiRouter