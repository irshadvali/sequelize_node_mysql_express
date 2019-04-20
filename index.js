const express = require('express')
const bodyParser = require('body-parser')
const { Author, Book ,UserList, PromoCode} = require('./sequelize')
const csvFilePath = "./authorlist.csv"
const csv = require('csvtojson')
var cc = require('coupon-code');
let dataValue;
let promoArray=[];

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

app.post(`/demoApi/bulkUpload`, (req, res) => {
    console.log("new Api")
    let wrongData = [];
    let temp = getValues().then(async result => {
        let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        await asyncForEach(result, async (element) => {
            if (element.phoneNumber && element.phoneNumber.length === 10
                && element.authorName && element.authorName.length > 0
                && (filter.test(element.email) || element.email === "" || element.email === null)
            ) {
                await UserList.findOne(
                    {
                        where: { phoneNumber: element.phoneNumber, },
                    }
                ).then(author => {
                    // console.log("check author", element.phoneNumber, author)
                    if (author) {
                        element.errorType = "Duplicate phone number values."
                        wrongData.push(element)
                    }
                    else {

                        UserList.create(element);
                    }

                })
            }
            else {
                if (element.phoneNumber && element.phoneNumber.length !== 10) {
                    element.errorType = "Phone number is not valid."
                    wrongData.push(element)
                }
                else if (!filter.test(element.email)) {
                    element.errorType = "Please enter valid email id."
                    wrongData.push(element)
                }
                else {
                    element.errorType = "Name can not empty."
                    wrongData.push(element)
                }
            }
        });
        res.json(wrongData)
    });


});
asyncForEach = async (array, callback) => {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
};
 getValues = async () => {
    await csv()
        .fromFile(csvFilePath)
        .then((jsonObj) => {
            dataValue = jsonObj
        })
 
    return dataValue
 }
 // get author with his book list
app.post('/demoApi/generatePromoCode', (req, res) => {
    let wrongData = [];
    try{
        let data=generatePromoCode().then(async result => {
            await asyncForEach(result, async (element) => {
                console.log("element.promoCode",element.promoCode)
               // PromoCode.create(element);
                if(element){
                    await PromoCode.findOne(
                        {
                            where: { promoCode: element.promoCode, },
                        }
                    ).then(pr=>{
                        if(pr){
                            wrongData.push(pr)
                        }else{
                            PromoCode.create(element); 
                        }
                    })
                }
            });
        });
      
        return  res.json(wrongData)
       
    }
    catch(error){
        console.log(error)
    }
  
})

generatePromoCode = async () => {
    for(var i=0; i<=500; i++){
        let data= await {"promoCode":cc.generate()}
        await promoArray.push(data)
    }
 console.log(promoArray.length);
 //SELECT COUNT(id) FROM `promoCodes`
    return promoArray
 }

const port = 3001
app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
})
