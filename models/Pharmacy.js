const Sequelize = require('sequelize')

module.exports = (db) => {
    const pharma = db.define('Pharma', {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: Sequelize.UUIDV4
        },
        title: Sequelize.STRING,
        owner: Sequelize.STRING,
        description: Sequelize.STRING,
        place: Sequelize.STRING,
        phone: Sequelize.STRING,
        email: Sequelize.STRING,
        lat: Sequelize.DOUBLE,
        lng: Sequelize.DOUBLE,
        isOpened: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        }
    })

    return pharma
}