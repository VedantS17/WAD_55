const express = require('express')
const mongoose = require('mongoose')

const url = 'mongodb+srv://abc:<password>@cluster0.ubile4x.mongodb.net/'
const app = express()

mongoose.connect(url)
app.use(express.json())
const mydbRouter = require('./routes/mydbroutes')

app.use('/', mydbRouter)

app.listen(3000, ()=>{
    console.log('Server Started')
})