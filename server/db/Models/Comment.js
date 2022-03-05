// database
const { Sequelize, DataTypes } = require('sequelize');
const { mySqlUri } = require('../../config.json')
const sequelize = new Sequelize(mySqlUri)


const Comment = sequelize.define('comment', {
    comment_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    post_id_fk: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    uid_fk: {
        type: DataTypes.INTEGER,
        allowNull: false,
       
    },
    created: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    text: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
    { timestamps: false }
)

module.exports = Comment
