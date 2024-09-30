const express = require('express')
const categories = require('./Route/categories')
const students = require('./Route/students')
const app = express()
const mongoose = require('mongoose')
const course = require('./Route/course')

mongoose.connect('mongodb+srv://birlaakshit:Akshit%40123@cluster0.q3evb.mongodb.net/learningPlatform')
.then(() => console.log('Connection is Successfull to Database'))
.catch(err => console.error('Could not connect to mongodb', err))

app.use(express.json())
app.use('/api/categories', categories)
app.use('/api/students', students)
app.use('/api/course', course)


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));



