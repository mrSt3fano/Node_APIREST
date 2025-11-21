const {Model, DataTypes, Sequelize} = require('sequelize')
const CLIENT_TABLE="tabladelcliente"
const {USER_TABLE,User}=require('../db/userModels')

const CLIENT_SCHEMA={
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull:true
    },
    age:{
        type: DataTypes.INTEGER
    },
    color_Favorite:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    phone:{
        type: DataTypes.INTEGER
    },
    timestamps:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    UserID:{
        field:'UserID',
        allowNull:false,
        type:DataTypes.UUID,
        references:{
            model:USER_TABLE,
            key:'id'
        },
    onUpdate:'CASCADE',
    onDelete:'CASCADE'
    }   

}

class cliente extends Model{

    static asociado(models){
        this.belongsTo(models,{foreignKey:'UserID'})
    }   
    
        static config(sequelize){
                return{
                    sequelize,
                    tableName: CLIENT_TABLE,
                    modelName: 'clientee',
                    timestamps: false
                }
            }

    }

module.exports={CLIENT_SCHEMA,CLIENT_TABLE,cliente}