const { cliente } = require('../models/cliente_model')

const ObtenerClientesAll = async (req, res) => {
    try {
        const data = await cliente.findAll();
        console.log("ejecutando consulta")
        return { data }
    } catch (error) {
        console.log(error)
    }
}

const ObtenerClientesOne = async (req, res) => {
    try {
        const para = req.params.parametro
        const va = await cliente.findByPk(para)
        const data = await va.findAll()
        return { data }
    } catch (error) {
        console.log(error)
    }
}

const EnviarCliente = async (req, res) => {
    try {

        const a = req.body
        console.log("---------------->", a)
        const data = await cliente.create(a)
        console.log("ejecutando insercion")
        return { data }
    } catch (error) {
        console.log(error)
    }
}

const ActualizarCliente = async (req, res) => {
    try {
        const data = await cliente.update(req.body)
        return { data }
    } catch (error) {
        console.log(error)
    }
}


const ActualizarClienteOne = async (req, res) => {
    try {
        const par = req.params.parametro
        const uno = await cliente.findByPk(par)
        const data = await uno.update(req.body)
        return { data }
    } catch (error) {
        console.log(error)
    }
}

//aqui el parametro debe ser el nombre
const BorrarCLiente = async (req, res) => {
    try {
        const nombre = req.params.parametro
        const data = await cliente.destroy({ where: { name: nombre } })
        return { data }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    ObtenerClientesOne,
    ObtenerClientesAll,
    EnviarCliente,
    ActualizarClienteOne,
    ActualizarCliente,
    BorrarCLiente
}