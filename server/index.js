const routerp=require('../routes/products.js')
const routeru=require('../routes/users.js')
const routerc=require('../routes/clientes.js')

const a=require('express')

function apiRouter(aea){
    const router =a.Router()
    aea.use('/api/v1',router)
    router.use('/products',routerp)
    router.use('/users',routeru)
    router.use('/clientes',routerc)
}


module.exports=apiRouter