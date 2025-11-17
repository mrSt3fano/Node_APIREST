const {User,UserSchema}=require('./userModels')

function subirTablas(modelo,paramSequlz){
    modelo.init(UserSchema,modelo.config(paramSequlz))
};

 async function insertar (){
    const c =  await User.create({
        correo: 'california@.com',
        password: 'california',
        habido: false
    })
    console.log(c.toJSON())
    return c
}

module.exports = {subirTablas,insertar}