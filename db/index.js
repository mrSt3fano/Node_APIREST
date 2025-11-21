const {User,UserSchema}=require('./userModels')
const {CLIENT_SCHEMA}=require('../models/cliente_model')

function subirUser(modelo,paramSequlz){
    modelo.init(UserSchema,modelo.config(paramSequlz))
};

function subirCLient(modelo,paramSequlz){
    modelo.init(CLIENT_SCHEMA,modelo.config(paramSequlz))
};

 async function insertar (){
    const c =  await User.create({
        correo: 'david@.amarillaso.com',
        password: 'amarillosapestosos',
        habido: false,
        role: 'socio'
    })
    console.log(c.toJSON())
    return c
}

module.exports = {subirCLient,subirUser,insertar}