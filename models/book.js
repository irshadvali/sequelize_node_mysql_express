module.exports = (sequelize, type) => {
    return sequelize.define('book', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        bookName: type.STRING,
        authorId: type.INTEGER
    })
}