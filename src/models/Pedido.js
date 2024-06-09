const sequelize = require('sequelize')
const connection = require('../database/index')

const Pedido = connection.define('Pedido', {
    ID: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    ID_Mesa: {
        type: sequelize.INTEGER,
        allowNull: false
    }
}, { tableName: 'tbl_Pedido', timestamps: false })

module.exports = Pedido
