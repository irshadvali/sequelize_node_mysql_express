const Sequelize = require('sequelize')
const AuthorModel = require('./models/author')
const BookModel = require('./models/book')
const {DATABASE_NAME,ROOT,PASSWORD,HOST,DIALECT} =require('./constants')
const sequelize = new Sequelize(DATABASE_NAME, ROOT, PASSWORD, {
  host: HOST,
  dialect: DIALECT,
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

const Book = BookModel(sequelize, Sequelize)
const Author = AuthorModel(sequelize, Sequelize)
// Author has Many to book
Author.hasMany(Book)

sequelize.sync({ force: false })
  .then(() => {
    console.log(`Database & tables created here!`)
  })

module.exports = {
  Author,
  Book
}