const {config}=require('E:/2025-II/NODE JS/api_v1/configdotenv/config')

const user=encodeURIComponent(config.dbUSer)
const password=encodeURIComponent(config.dbPassword)
const uri=`postgres://${user}:${password}@${config.dbHost}:${config.dbPort}/${config.dbName}`


module.exports={
    development: {
    url:uri,
    username: config.dbUSer,
    password: config.dbPassword,
    database: config.dbName,
    host: config.dbHost,
    port: config.dbPort,
    dialect: 'postgres'
  },
  production: {
    url:uri,
    username: config.dbUSer,
    password: config.dbPassword,
    database: config.dbName,
    host: config.dbHost,
    port: config.dbPort,
    dialect: 'postgres'
  }
}
