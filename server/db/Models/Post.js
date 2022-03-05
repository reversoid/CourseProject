// database
const { Sequelize, DataTypes } = require('sequelize');
const { mySqlUri } = require('../../config.json')
const sequelize = new Sequelize(mySqlUri)


const Post = sequelize.define('Post', {
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    text: {
        type: DataTypes.STRING,
        allowNull: false
    },
    like_count: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    uid_fk: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    created: {
        type: DataTypes.DATE,
        allowNull: false
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
},
    { timestamps: false }
)

module.exports = Post
