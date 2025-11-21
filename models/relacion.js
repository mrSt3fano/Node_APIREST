const {CLIENT_SCHEMA,cliente}=require('../models/cliente_model')
const {UserSchema,User}=require('../db/userModels')

function relacionar (sequelize){
    User.init(UserSchema,User.config(sequelize))
    cliente.init(CLIENT_SCHEMA,cliente.config(sequelize))
}