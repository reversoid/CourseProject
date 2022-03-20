// database
const { Sequelize, DataTypes } = require('sequelize');
const { mySqlUri } = require('../../config')
const sequelize = new Sequelize(mySqlUri)


const Tag = sequelize.define('Tag', {
    tag_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    post_id_fk: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    text: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
    { timestamps: false }
)

module.exports = Tag
