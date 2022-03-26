// database
const { Sequelize, DataTypes } = require('sequelize');
const { mySqlUri } = require('../../config');
const Post = require('./Post');
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
    },
    user_likes_count: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},
    { timestamps: false }
)
Post.belongsTo(User, {foreignKey: 'uid_fk'})
User.hasMany(Post, {foreignKey: 'id'})
module.exports = User

