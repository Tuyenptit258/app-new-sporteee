const express = require('express')

const app = express()

app.use('/', (req,res)=>{
    res.json('Hello')
})

app.listen(3000,()=>{
   // res.json('Start on')
})