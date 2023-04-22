const path = require('path')
const express = require('express');
const hbs = require('hbs');
const app = express()
console.log(__dirname) //get the current working Directory
console.log(path.join(__dirname, '../public')) //moving from current directory to the public folder

const pathdirc = path.join(__dirname, '../public');
const view = path.join(__dirname, '../views');

app.set('view engine', 'hbs');
app.set('view', view);
app.use(express.static(pathdirc));  // Reading the data from the Public folder index.html page data

app.get('/product', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a query value'
        })
    }
    console.log(req.query.search);
    res.send({
        products: []
    }

    )
})

app.get('/wheather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide a address value'
        })
    }
    res.send({
        forecast: 'It is snowing',
        location: 'Philadelhia',
        address: req.query.address
    })
})

console.log(pathdirc);



app.listen(3000, () => {
    console.log('the server is up on port 3000')
});
