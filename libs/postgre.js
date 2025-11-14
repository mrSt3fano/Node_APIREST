const {Pool}=require('pg')
const {config}=require('../config/config')

const user=encodeURIComponent(config.dbUSer)
const password=encodeURIComponent(config.dbPassword)
const uri=`postgres://${user}:${password}@${config.dbHost}:${config.dbPort}/${config.dbName}`

const pul=new Pool({connectionString: uri})

module.exports=pul