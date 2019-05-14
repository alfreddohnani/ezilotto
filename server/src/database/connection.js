const Sequelize = require('sequelize');
const config    = require('../config/config');

const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
);

module.exports = sequelize;
global.sequelize = sequelize; // We do not want to require sequelize every time hence global