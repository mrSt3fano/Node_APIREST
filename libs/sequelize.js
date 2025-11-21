const {config}=require('../configdotenv/config')
const {Sequelize}=require('sequelize')
const aea=require('../db/index')
const {User:modeloimportado}=require('../db/userModels')
const {cliente}=require('../models/cliente_model')

const user=encodeURIComponent(config.dbUSer)
const password=encodeURIComponent(config.dbPassword)
const uri=`postgres://${user}:${password}@${config.dbHost}:${config.dbPort}/${config.dbName}`

const sequelize = new Sequelize(uri,{
    dialect: 'postgres',
    logging: true
});

aea.subirUser(modeloimportado,sequelize);
aea.subirCLient(cliente,sequelize);

modeloimportado.asociado(cliente);
cliente.asociado(modeloimportado);

module.exports=sequelize