const express = require('express')
const bodyParser = require('body-parser')
const { Author, Book } = require('./sequelize')

const app = express()
app.use(bodyParser.json())

// Create a Author
app.post('/demoApi/author', (req, res) => {
    console.log(req.body)
    Author.create(req.body)
        .then(author => res.json(author))
})
// create a book
app.post('/demoApi/book', (req, res) => {
    console.log("book==>", req.body)
    Book.create(req.body)
        .then(author => res.json(author))
})
// get all books
app.get('/demoApi/books', (req, res) => {
    Book.findAll().then(books =>
        res.json(books))
})
// get all authors
app.get('/demoApi/authors', (req, res) => {
    Author.findAll().then(authors =>
        res.json(authors))
})

// get book by  bookId
app.get('/demoApi/book/:id', (req, res) => {
    Book.findOne(
        {
            where: { id: req.params.id, },
        }
    ).then(book => res.json(book))
})
// get author by id
app.get('/demoApi/author/:id', (req, res) => {
    Author.findOne(
        {
            where: { id: req.params.id, },
        }
    ).then(author => res.json(author))
})

// get author with his book list
app.get('/demoApi/authorHasManyBooks/:id', (req, res) => {
    let query;

    query = Author.findAll({
        where: { id: req.params.id, },
        include: [{ model: Book }
        ]
    })

    return query.then(author => res.json(author))
})

const port = 3001
app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
})
