// inisialisasi module
const express = require('express');
const expressLayouts = require('express-ejs-layouts')
const ejs = require('ejs');
const app = express();

// inisialisasi EJS sebagai templating engine
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', 'layouts/main-layout')

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Wiki Jarkom',
        layout: false
    })
});

// get page 1
app.get('/page1', (req, res) => {
    res.render('test1', {
        title: 'Local Area Network',
        layout: false
    })
})

// get page 2
app.get('/page2', (req, res) => {
    res.render('test2', {
        title: 'Wide Area Network',
    })
})

// localhost
app.listen(3030, () => {
    console.log('App is listening on port 3030')
})