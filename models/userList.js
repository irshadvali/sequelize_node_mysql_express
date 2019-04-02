module.exports = (sequelize, type) => {
    return sequelize.define('userList', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        authorName: type.STRING,
        phoneNumber: type.STRING,
        email: type.STRING,
    })
}