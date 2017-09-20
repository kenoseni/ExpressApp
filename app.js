const express = require('express');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const router = require('./router')
const db = require('./db').sequelize
const Puppy = require('./db').Puppy

//view engine setup    abstraction — creating a simple model of a more complex thing, which represents its most important aspects in a way that is easy to work with for our program's purposes.
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(volleyball);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname, 'public')));


/*var users = [
{
	firstName : "Olusola",
	lastName : "Oseni",
	sex : "Male",
	age : 33,
	email: "kenolusola@gmail.com"
}, 
{
    firstName : "Mizita",
    lastName : "Saidu",
    sex : "Female",
    age : 32,
    email: "saidu.mizita@gmail.com"
},
{
    firstName : "Temitayo",
    lastName : "Osifeko",
    sex : "Male",
    age : 30,
    email: "osifekosamuel@gmail.com"
}
];
*/
app.use('/puppies', router)
app.listen(3000, (req, res) => {
    console.log('Server listening at Port 3000');
    db.sync()
    .then((message) => {
        console.log('and db id synced')
        //Puppy.findById(1)
        //.then((puppy) => {
           // console.log(puppy.dataValues.age)
        //})    
    })
    
});
