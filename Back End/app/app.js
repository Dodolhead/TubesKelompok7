// inisialisasi module
const express = require('express');
const ejs = require('ejs');
const app = express();

// inisialisasi EJS sebagai templating engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
})

// localhost
app.listen(8080, () => {
    console.log('App is listening on port 8080')
})