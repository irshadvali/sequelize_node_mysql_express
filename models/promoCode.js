module.exports = (sequelize, type) => {
    return sequelize.define('promoCode', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        promoCode : type.STRING,
    })
}