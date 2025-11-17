const a=require('express')
const obt=require('../services/userService')
const router=a.Router();

router.get('/',(req,res)=>{
    const{limit,offset}=req.query
    if(limit && offset){
        res.json([{
        limit: limit,
        offset: offset
    }])
    }
    else{res.send('sin parametros')}
    
})

router.get('/usarsequelize',async (req,res,next)=>{
    try {
        const response = await obt.obetenerUsuarios(req,res)
    return res.send({response})
    } catch (error) {
        next(error)
    }
})

router.get('/creartabladeprueba',async(req,res,next)=>{
    try {
        const response = await obt.crearTabla(req,res)
        return res.send({response})
    } catch (error) {
        next(error)
    }
})


router.get('/insertar',async(req,res,next)=>{
    try {
        const response = await obt.insertarDatos(req,res)
        return res.send({response})
    } catch (error) {
        next(error)
    }
})

router.put('/actualizar/:idepk',async(req,res,next)=>{
    try {
        const response = await obt.actualizar(req,res)
        return res.send({response})
    } catch (error) {
        next(error)
    }
})

module.exports=router