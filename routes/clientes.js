const a=require('express')
const enrutador=require('../services/clienteService')

const router=a.Router()

router.get('/getAll',async(req,res,next)=>{
    try {
        const val=await enrutador.ObtenerClientesAll(req,res)
        return res.send({val})
    } catch (error) {
        next(error)
    }
})

router.get('/getOne/:parametro',async(req,res,next)=>{
    try {
        const valor=await enrutador.ObtenerClientesOne(req,res)
        return res.send({valor})
    } catch (error) {
        next(error)
    }
})

router.post('/post',async(req,res,next)=>{
    try {
        const valor=await enrutador.EnviarCliente(req,res)
        return res.send({valor})
    } catch (error) {
        next(error)
    }
})

router.put('/enviarTodo',async(req,res,next)=>{
    try {
        const data=await enrutador.ActualizarCliente(req,res)
        return res.send({data})
    } catch (error) {
        next(error)
    }
})

router.patch('/enviarUno/:parametro',async(req,res,next)=>{
    try {
        const data=await enrutador.ActualizarClienteOne(req,res)
        return res.send({data})
    } catch (error) {
        next(error)
    }
})

router.delete('/eliminar/:parametro',async(req,res,next)=>{
    try {
        const data=await enrutador.BorrarCLiente(req,res)
        return res.send({data})
    } catch (error) {
        next(error)
    }
})

module.exports=router