const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/CrudOp'

const app = express()


const cors = require("cors");

app.options("*", cors({ origin: 'http://localhost:3000', optionsSuccessStatus: 200 }));

app.use(cors({ origin: "http://localhost:3000", optionsSuccessStatus: 200 }));





mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const crudRouter = require('./routes/crud')
app.use('/',crudRouter)

app.listen(9000, () => {
    console.log('Server started')
})