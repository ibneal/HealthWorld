const express=require('express')
const app=express()

//Where files will be viewed
app.set('view engine','ejs')
app.use(express.static('public'))

//Port for listening
app.listen(3000)