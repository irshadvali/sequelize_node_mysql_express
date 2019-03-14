module.exports = (sequelize, type) => {
    return sequelize.define('author', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        authorName: type.STRING,
    })
}