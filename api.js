const express = require('express')
const dbConnection = require('./mongodb')

const app = express();

app.get('/', async (req, res) => {
    let data = await dbConnection()
    data = await data.find().toArray()
    // console.log(data)
    res.send(data)
})

app.post('/', (req, res) => {
console.log({name:'nihal'})
})

app.listen(7000)