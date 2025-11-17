const sequelize=require('../libs/sequelize')
const subir=require('../db/index')
const {User:modeloimportado}=require('../db/userModels')

const obetenerUsuarios = async (req,res)=>{
    try {
        // const sq = 'SELECT * from users2'
        const data=await modeloimportado.findAll()
        return {data} 
    } catch (error) {
        console.log(error)
    }
};
 
const crearTabla = async (req,res)=>{
    console.log('------iniciando-----')
    try {
        console.log('<--------------')        
        sequelize.sync()
        return {body}
    } catch (error) {
        console.log('un error ha ocurrido',error)
    }
    console.log("------->")
} 


const insertarDatos = async (req,res)=>{
    console.log('------creando datos-----')
    try {
        const body= await subir.insertar()
        console.log('insertando datos <--------------')
        return {body}
    } catch (error) {
        console.log('un error ha ocurrido durante la insercion de datos',error)
    }
    console.log("finalizado------->")
}

const actualizar = async (req,res)=>{
    try {
        
        console.log("transformando JSON: ",req.body," para trabajar")
        const ide=req.params.idepk
        const dats=req.body
        
        const registro = await modeloimportado.findByPk(ide)
        const actualizado = await registro.update(dats);
        return {actualizado}
    } catch (error) {
        console.log('Error actualizando: ',error)
    }
}


module.exports={obetenerUsuarios, crearTabla,insertarDatos,actualizar}