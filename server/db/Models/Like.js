// database
const { Sequelize, DataTypes } = require('sequelize');
const { mySqlUri } = require('../../config')
const sequelize = new Sequelize(mySqlUri)


const Post_like = sequelize.define('post_like', {
    like_id: {
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
        
    }
},
    { timestamps: false }
)

module.exports = Post_like
