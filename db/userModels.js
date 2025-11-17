const {Model, DataTypes, Sequelize} = require('sequelize')
const USER_TABLE='tablademrd'

const UserSchema={
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },

    correo:{
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
    },

    password:{
        allowNull: false,
        type: DataTypes.STRING,
    },

    habido:{
        allowNull: false,
        type: DataTypes.BOOLEAN,
        field: 'created_at',
        defaultValue: false
    },
    
    time:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}  


class User extends Model{
    
    static asociado(){}   

    static config(sequelize){
            return{
                sequelize,
                tableName: USER_TABLE,
                modelName: 'Iuser',
                timestamps: false
            }
        }
    }

module.exports={USER_TABLE, UserSchema, User}