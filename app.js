const express = require("express");
const path = require("path");
const app = express();
const mongoose = require('mongoose');
const bodyparser = require("body-parser");
const { request } = require("http");
mongoose.connect('mongodb://localhost/contactgreenPaddle', {useNewUrlParser:true});
const port = 80;

//Define mongoose schema
const contactSchema = new mongoose.Schema({
    name : String,
    email : String,
    phone : String,
    message : String,

});

const Contact = mongoose.model('contact', contactSchema);

// Express specific stuff
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// Pug specific stuff
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

// Endpoints
app.get('/', (req, res)=>{
    const params = { }
    res.status(200).render('home.pug', params);
})
app.get('/contact', (req, res)=>{
    const params = { }
    res.status(200).render('contact.pug', params);
})
app.get('/book', (req, res)=>{
    const params = { }
    res.status(200).render('book.pug', params);
})
app.get('/accessories', (req, res)=>{
    const params = { }
    res.status(200).render('accessories.pug', params);
})
app.get('/faqs', (req, res)=>{
    const params = { }
    res.status(200).render('faqs.pug', params);
})
app.post('/contact', async(req, res)=>{
       var myData = new Contact({
        name : req.body.name,
        email : req.body.email,
        phone : req.body.phone,
        message : req.body.message
       });
       console.log(myData)
       await myData.save().then(()=>{
       res.send("This item has been saved to the database")
       }).catch(()=>{
       res.status(400).send("item was not saved to the databse")
   })
})

// Start the server
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});