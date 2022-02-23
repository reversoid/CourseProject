// database
const { Sequelize, DataTypes } = require('sequelize');
const { mySqlUri } = require('../../config.json')
const sequelize = new Sequelize(mySqlUri)


const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
    { timestamps: false }
)

module.exports = User
