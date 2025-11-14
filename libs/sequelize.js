const {config}=require('../config/config')
const {Sequelize}=require('sequelize')

const user=encodeURIComponent(config.dbUSer)
const password=encodeURIComponent(config.dbPassword)
const uri=`postgres://${user}:${password}@${config.dbHost}:${config.dbPort}/${config.dbName}`

const sequelize = new Sequelize(uri,{
    dialect: 'postgres',
    logging: true
})

module.exports=sequelize