const express = require('express')
const fs = require('fs')
const app = express()
const expressLayouts = require('express-ejs-layouts')


app.set('view engine', 'ejs')
app.use(expressLayouts)
app.set('layout', 'layouts/full-layout')

app.use(express.static(__dirname + '/public'))

let jsondata;

// fetch('https://api.github.com/users/github')
//     .then(response => response.json())
//     .then(data => {
//         jsondata = data;
//         console.log('Got Data');
//     })
//     .catch(error => {
//         console.error('Error fetching data!');
//     });

fs.readFile (('./data.json'), 'utf8', (err,json) =>{
    if (err) throw err;
    jsondata = JSON.parse(json);
    console.log('Got Data');
})

app.get('/', (req, res) => {
    res.render('Home' ,{
        layout: false
    });
});

const tagsRouter = require("./routes/tags")

app.use("/tags", tagsRouter)

app.listen(8000)