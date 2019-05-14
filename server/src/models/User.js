const Sequelize = require('sequelize');

const User = sequelize.define('User', {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey:true,
        autoIncrement: true
    },
    email:{
        type: Sequelize.STRING,
        unique: true
    },
    password: Sequelize.STRING
});

module.exports = User;