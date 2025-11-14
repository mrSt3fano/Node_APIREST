const sequelize=require('../libs/sequelize')

const obetenerUsuarios = async (req,res)=>{
    try {
        const sq = 'SELECT * from usuario'
        const [dat]=await sequelize.query(sq)
        return {
            dat
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports={obetenerUsuarios}