# sequelize_node_mysql_express

### Steps ###

#### Create a project ####
`mkdir sequelize_node_mysql_express` 
#### Go inside project ####
`cd sequelize_node_mysql_express` 
#### npm init to create a package.json file ####
`npm init` 
#### install body-parser ####
`npm install body-parser --save` 
#### install express ####
`npm install express  --save` 
#### install mysql2 ####
`npm install mysql2  --save` 
#### install sequelize ####
`npm install sequelize  --save`

#### create a model folder and files

```
mkdir models
touch ./models/author.js ./models/book.js 
touch sequelize.js 
touch index.js
touch constants.js
```
#### POST API ####
`POST`  `http://localhost:3001/demoApi/author`
##### body #####
```
{
    "authorName": "Irshad vali",
}
```

`POST`  `http://localhost:3001/demoApi/book`
##### body #####
```
{
    "bookName": "Compiler",
    "authorId": 1
}
```
#### GET API ####
`GET`  `http://localhost:3001/demoApi/books`
##### response #####
```
[{"id":1,"bookName":"JAVA","authorId":1,"createdAt":"2019-03-14T16:39:48.000Z","updatedAt":"2019-03-14T16:39:48.000Z"},{"id":2,"bookName":"System Architecture","authorId":1,"createdAt":"2019-03-14T16:40:18.000Z","updatedAt":"2019-03-14T16:40:18.000Z"},{"id":3,"bookName":"Android","authorId":2,"createdAt":"2019-03-14T16:40:33.000Z","updatedAt":"2019-03-14T16:40:33.000Z"},{"id":4,"bookName":"React Native","authorId":2,"createdAt":"2019-03-14T16:40:49.000Z","updatedAt":"2019-03-14T16:40:49.000Z"},{"id":5,"bookName":"Angular","authorId":3,"createdAt":"2019-03-14T16:41:10.000Z","updatedAt":"2019-03-14T16:41:10.000Z"},{"id":6,"bookName":"C#","authorId":3,"createdAt":"2019-03-14T16:41:32.000Z","updatedAt":"2019-03-14T16:41:32.000Z"},{"id":7,"bookName":"Compiler","authorId":1,"createdAt":"2019-03-14T16:43:37.000Z","updatedAt":"2019-03-14T16:43:37.000Z"}]
```
#### GET API ####
`GET`  `http://localhost:3001/demoApi/book/1`
##### response #####
```
{"id":1,"bookName":"JAVA","authorId":1,"createdAt":"2019-03-14T16:39:48.000Z","updatedAt":"2019-03-14T16:39:48.000Z"}
```

#### GET API ####
`GET`  `http://localhost:3001/demoApi/authors`
##### response #####
```
[{"id":1,"authorName":"Naushad vali","createdAt":"2019-03-14T16:36:19.000Z","updatedAt":"2019-03-14T16:36:19.000Z"},{"id":2,"authorName":"Irshad vali","createdAt":"2019-03-14T16:36:29.000Z","updatedAt":"2019-03-14T16:36:29.000Z"},{"id":3,"authorName":"Khathija Ahamadi","createdAt":"2019-03-14T16:36:46.000Z","updatedAt":"2019-03-14T16:36:46.000Z"}]
```

#### GET API ####
`GET`  `http://localhost:3001/demoApi/author/2`
##### response #####
```
{"id":2,"authorName":"Irshad vali","createdAt":"2019-03-14T16:36:29.000Z","updatedAt":"2019-03-14T16:36:29.000Z"}
```

`GET`  `http://localhost:3001/demoApi/authorHasManyBooks/2`
##### response #####
```
[{"id":2,"authorName":"Irshad vali","createdAt":"2019-03-14T16:36:29.000Z","updatedAt":"2019-03-14T16:36:29.000Z","books":[{"id":3,"bookName":"Android","authorId":2,"createdAt":"2019-03-14T16:40:33.000Z","updatedAt":"2019-03-14T16:40:33.000Z"},{"id":4,"bookName":"React Native","authorId":2,"createdAt":"2019-03-14T16:40:49.000Z","updatedAt":"2019-03-14T16:40:49.000Z"}]}]
```
